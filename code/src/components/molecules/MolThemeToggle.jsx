import React from 'react';
import AtmButton from '../atoms/AtmButton';
import { useTranslation } from '../../i18n/LanguageContext';
import { useTheme } from '../../styles/ThemeProvider';
import styled from 'styled-components';

const ThemeButton = styled(AtmButton)`
  position: fixed;
  top: ${props => props.theme.spacing.large};
  right: ${props => props.theme.spacing.large};
  z-index: 1000;
`;

const LanguageButton = styled(AtmButton)`
  position: fixed;
  top: ${props => props.theme.spacing.large};
  right: 90px;
  z-index: 1000;
`;

const MolThemeToggle = () => {
  const { t, toggleLanguage, currentLanguage } = useTranslation();
  const { isDark, toggleTheme } = useTheme();

  const handleThemeToggle = () => {
    toggleTheme();
  };

  return (
    <>
      <LanguageButton onClick={toggleLanguage}>
        {currentLanguage === 'fr' ? 'EN' : 'FR'}
      </LanguageButton>
      <ThemeButton onClick={handleThemeToggle}>
        {isDark ? t('lightTheme') : t('darkTheme')}
      </ThemeButton>
    </>
  );
};

export default MolThemeToggle;