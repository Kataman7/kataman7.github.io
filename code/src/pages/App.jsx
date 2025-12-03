import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import styled from 'styled-components'
import ThemeProviderWrapper from '../styles/ThemeProvider'
import { GlobalStyles } from '../styles/globalStyles'
import { LanguageProvider } from '../i18n/LanguageContext'
import OrgHeader from '../components/organisms/OrgHeader'
import AppRoutes from '../routes/routes'

const AppContainer = styled.div`
  background-color: ${props => props.theme.colors.background};
  color: ${props => props.theme.colors.primary};
  min-height: 100vh;
  padding: ${props => props.theme.spacing.large} 5vw ${props => props.theme.spacing.large} 5vw;
  
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

const App = () => {
  // Theme management moved to ThemeProviderWrapper

  return (
    <LanguageProvider>
      <ThemeProviderWrapper>
        <GlobalStyles />
        <BrowserRouter>
          <AppContainer>
            <OrgHeader titleKey="name" />
            <AppRoutes />
          </AppContainer>
        </BrowserRouter>
      </ThemeProviderWrapper>
    </LanguageProvider>
  )
}

export default App
