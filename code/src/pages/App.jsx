import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import styled from 'styled-components'
import ThemeProviderWrapper from '../styles/ThemeProvider'
import { GlobalStyles } from '../styles/globalStyles'
import { LanguageProvider } from '../i18n/LanguageContext'
import { LoadingProvider, useLoading, LOADING_DURATIONS } from '../contexts/LoadingContext'
import { UserModeProvider } from '../contexts/UserModeContext'
import AtmLoader from '../components/atoms/AtmLoader'
import OrgHeader from '../components/organisms/OrgHeader'
import AppRoutes from '../routes/routes'

const AppContainer = styled.div`
  background-color: ${props => props.theme.colors.background};
  color: ${props => props.theme.colors.primary};
  min-height: 100vh;
  padding: ${props => props.theme.spacing.large} 5vw ${props => props.theme.spacing.large} 5vw;
  transition: ${props => props.$noTransition ? 'none' : `background-color ${LOADING_DURATIONS.fadeOut}ms ease-in-out, color ${LOADING_DURATIONS.fadeOut}ms ease-in-out`};
  
  @media (min-width: 700px) {
    padding: ${props => props.theme.spacing.large} 7vw ${props => props.theme.spacing.large} 7vw;
  }
  
  @media (min-width: 800px) {
    padding: ${props => props.theme.spacing.large} 10vw ${props => props.theme.spacing.large} 10vw;
  }
  
  @media (min-width: 1400px) {
    padding: ${props => props.theme.spacing.large} 28vw ${props => props.theme.spacing.large} 28vw;
  }
  
  /* Ajouter une marge en haut sur desktop et tablette (pas sur téléphone) */
  @media (min-width: 769px) {
    margin-top: ${props => props.theme.spacing.xl};
  }
  
  font-family: ${props => props.theme.fontFamily};
  overflow-x: hidden;
  /* Hide the content until fonts and initial data are ready to avoid a flash where
     the loader disappears but the page isn't mounted yet. */
  visibility: ${props => props.$contentReady ? 'visible' : 'hidden'};
  pointer-events: ${props => props.$contentReady ? 'auto' : 'none'};
`;

const AppContent = () => {
  const { isLoading, isExiting } = useLoading();
  const [isInitialLoad, setIsInitialLoad] = React.useState(true);
  const [isInitialExiting, setIsInitialExiting] = React.useState(false);
  const [contentReady, setContentReady] = React.useState(false);

  React.useEffect(() => {
    const loadFonts = async () => {
      try {
        // Attendre que les fonts soient chargées
        await Promise.all([
          document.fonts.load('400 1rem Jersey20'),
          document.fonts.load('400 1rem Chillax'),
          document.fonts.ready
        ]);
        
        // Marquer le contenu comme prêt (pour le rendre sous le loader)
        setContentReady(true);
        
        // Attendre que le navigateur applique les fonts
        await new Promise(resolve => setTimeout(resolve, LOADING_DURATIONS.initialLoadDelay));
      } catch (e) {
        console.warn('Font loading error:', e);
        setContentReady(true);
      }
      
      setIsInitialExiting(true);
      setTimeout(() => {
        setIsInitialLoad(false);
      }, LOADING_DURATIONS.fadeOut);
    };
    
    loadFonts();
  }, []);

  return (
    <>
      <GlobalStyles />
      <BrowserRouter>
        <AppContainer $noTransition={isLoading || isInitialLoad} $contentReady={contentReady}>
          <OrgHeader titleKey="name" />
          <AppRoutes />
        </AppContainer>
      </BrowserRouter>
      {(isInitialLoad || isLoading) && <AtmLoader $initial={isInitialLoad} isExiting={isInitialLoad ? isInitialExiting : isExiting} />}
    </>
  );
};

const App = () => {
  return (
    <LoadingProvider>
      <UserModeProvider>
        <ThemeProviderWrapper>
          <LanguageProvider>
            <AppContent />
          </LanguageProvider>
        </ThemeProviderWrapper>
      </UserModeProvider>
    </LoadingProvider>
  )
}

export default App
