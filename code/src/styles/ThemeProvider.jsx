import React, { createContext, useContext, useEffect, useState } from 'react';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';
import { themes } from './theme';
import { useLoading } from '../contexts/LoadingContext';

const ThemeContext = createContext();

export const ThemeProviderWrapper = ({ children }) => {
  const { withLoader } = useLoading();
  const [currentThemeName, setCurrentThemeName] = useState(() => {
    try {
      const stored = localStorage.getItem('theme');
      if (stored && Object.prototype.hasOwnProperty.call(themes, stored)) {
        return stored;
      }
      return 'light';
    } catch (e) {
      return 'light';
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem('theme', currentThemeName);
    } catch (e) {
      // ignore errors
    }
  }, [currentThemeName]);

  const setTheme = async (themeName) => {
    if (!Object.prototype.hasOwnProperty.call(themes, themeName)) {
      console.warn(`Unknown theme requested: ${themeName}. Falling back to 'light'.`);
      themeName = 'light';
    }
    
    await withLoader(async () => {
      setCurrentThemeName(themeName);
    });
  };

  const toggleTheme = () => {
    setTheme(currentThemeName === 'portfolio' ? 'light' : 'portfolio');
  };

  const value = {
    currentThemeName,
    setTheme,
    toggleTheme,
    isDark: currentThemeName === 'portfolio',
  };

  const currentThemeObj = themes[currentThemeName] || themes.light;

  return (
    <ThemeContext.Provider value={value}>
      <StyledThemeProvider theme={currentThemeObj}>{children}</StyledThemeProvider>
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProviderWrapper');
  }
  return context;
};

export default ThemeProviderWrapper;
