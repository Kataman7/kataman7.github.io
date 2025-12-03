import React from 'react';
import AtmButton from '../atoms/AtmButton';
import { useTranslation } from '../../i18n/LanguageContext';
import { useTheme } from '../../styles/ThemeProvider';
import styled from 'styled-components';

const ToggleContainer = styled.div`
  display: flex;
  gap: ${props => props.theme.spacing.medium};
  @media (min-width: 1300px) {
    position: fixed;
    top: ${props => props.theme.spacing.large};
    right: ${props => props.theme.spacing.large};
    z-index: 1000;
  }
`;

const ThemeButton = styled(AtmButton)``;

const LanguageButton = styled(AtmButton)``;

const MolThemeToggle = () => {
  const { t, toggleLanguage, currentLanguage } = useTranslation();
  const { isDark, toggleTheme } = useTheme();

  const handleThemeToggle = () => {
    toggleTheme();
  };

  return (
    <ToggleContainer>
      <LanguageButton onClick={toggleLanguage}>
        {currentLanguage === 'fr' ? 'EN' : 'FR'}
      </LanguageButton>
      <ThemeButton onClick={handleThemeToggle}>
        {isDark ? t('lightTheme') : t('darkTheme')}
      </ThemeButton>
    </ToggleContainer>
  );
};

export default MolThemeToggle;