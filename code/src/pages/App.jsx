import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import styled from 'styled-components'
import ThemeProviderWrapper from '../styles/ThemeProvider'
import { GlobalStyles } from '../styles/globalStyles'
import { LanguageProvider } from '../i18n/LanguageContext'
import { LoadingProvider, useLoading, LOADING_DURATIONS } from '../contexts/LoadingContext'
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
  
  font-family: ${props => props.theme.fontFamily};
  overflow-x: hidden;
`;

const AppContent = () => {
  const { isLoading, isExiting } = useLoading();
  const [isInitialLoad, setIsInitialLoad] = React.useState(true);
  const [isInitialExiting, setIsInitialExiting] = React.useState(false);

  React.useEffect(() => {
    const loadFonts = async () => {
      try {
        // Attendre que les fonts soient chargées
        await Promise.all([
          document.fonts.load('400 1rem Jersey20'),
          document.fonts.load('400 1rem Chillax'),
          document.fonts.ready
        ]);
        
        // Attendre que le navigateur applique les fonts
        await new Promise(resolve => setTimeout(resolve, LOADING_DURATIONS.initialLoadDelay));
      } catch (e) {
        console.warn('Font loading error:', e);
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
        <AppContainer $noTransition={isLoading || isInitialLoad}>
          <OrgHeader titleKey="name" />
          <AppRoutes />
        </AppContainer>
      </BrowserRouter>
      {(isInitialLoad || isLoading) && <AtmLoader isExiting={isInitialLoad ? isInitialExiting : isExiting} />}
    </>
  );
};

const App = () => {
  return (
    <LoadingProvider>
      <ThemeProviderWrapper>
        <LanguageProvider>
          <AppContent />
        </LanguageProvider>
      </ThemeProviderWrapper>
    </LoadingProvider>
  )
}

export default App
