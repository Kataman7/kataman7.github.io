import React, { createContext, useContext, useState, useCallback } from 'react';

const LoadingContext = createContext();

// Configuration centralisée des durées
export const LOADING_DURATIONS = {
  fadeIn: 150,         // Durée fade in rapide
  fadeOut: 400,        // Durée fade out plus lent
  beforeChange: 400,   // Délai avant le changement (thème, langue, page)
  afterChange: 500,    // Délai après le changement
  initialLoadDelay: 1500, // Délai minimum pour le premier chargement
};

export const LoadingProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [isExiting, setIsExiting] = useState(false);

  const showLoader = useCallback(() => {
    setIsExiting(false);
    setIsLoading(true);
  }, []);

  const hideLoader = useCallback(() => {
    setIsExiting(true);
    setTimeout(() => {
      setIsLoading(false);
      setIsExiting(false);
    }, LOADING_DURATIONS.fadeOut);
  }, []);

  const withLoader = useCallback(async (callback, { before = LOADING_DURATIONS.beforeChange, after = LOADING_DURATIONS.afterChange } = {}) => {
    showLoader();
    if (before > 0) await new Promise(resolve => setTimeout(resolve, before));
    await callback();
    // Attendre que React flush le rendu avec le nouveau CSS
    await new Promise(resolve => requestAnimationFrame(() => requestAnimationFrame(resolve)));
    if (after > 0) await new Promise(resolve => setTimeout(resolve, after));
    hideLoader();
  }, [showLoader, hideLoader]);

  return (
    <LoadingContext.Provider value={{ isLoading, isExiting, showLoader, hideLoader, withLoader }}>
      {children}
    </LoadingContext.Provider>
  );
};

export const useLoading = () => {
  const context = useContext(LoadingContext);
  if (!context) {
    throw new Error('useLoading must be used within a LoadingProvider');
  }
  return context;
};
