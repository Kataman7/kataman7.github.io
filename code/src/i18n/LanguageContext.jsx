import React, { createContext, useContext, useState, useEffect } from 'react';
import { translations } from './translations';
import { useLoading } from '../contexts/LoadingContext';
import { useUserMode } from '../contexts/UserModeContext';

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const { withLoader } = useLoading();
  const { isRecruiter } = useUserMode();
  const [currentLanguage, setCurrentLanguage] = useState(() => {
    try {
      const stored = localStorage.getItem('language');
      if (stored === 'fr' || stored === 'en') {
        return stored;
      }
      return 'fr';
    } catch (e) {
      return 'fr';
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem('language', currentLanguage);
    } catch (e) {
      // ignore
    }
  }, [currentLanguage]);

  const toggleLanguage = async () => {
    await withLoader(async () => {
      setCurrentLanguage(prev => prev === 'fr' ? 'en' : 'fr');
    });
  };

  const getNestedValue = (obj, path) => {
    return path.split('.').reduce((current, key) => current?.[key], obj);
  };

  const t = (key) => {
    let translation = getNestedValue(translations, key);
    
    // Si la traduction n'existe pas, retourner la clé
    if (!translation) {
      return key;
    }
    
    let result = key;

    // Si c'est un objet avec des tableaux par langue (comme skills)
    if (translation && typeof translation === 'object' && !Array.isArray(translation)) {
      // Si c'est un tableau dans la langue actuelle
      if (Array.isArray(translation[currentLanguage])) {
        result = translation[currentLanguage];
      }
      // Si c'est une string dans la langue actuelle
      else if (typeof translation[currentLanguage] === 'string') {
        result = translation[currentLanguage];
      }
    }

    // Censure du nom si on n'est pas en mode recruteur
    if (key === 'name' && !isRecruiter) {
      // "Antonin Chabaud-Pech" -> "Antonin C."
      return result.split(' ').map((word, index) => index === 0 ? word : word[0] + '.').join(' ');
    }
    
    return result;
  };

  return (
    <LanguageContext.Provider value={{ currentLanguage, setCurrentLanguage, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useTranslation = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useTranslation must be used within a LanguageProvider');
  }
  return context;
};