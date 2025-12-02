import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  /* Reset CSS */
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  /* Add local fonts placed in public/resources/font/ */
  @font-face {
    /* PixelifySans font - drop copies into public/resources/font/ */
    font-family: 'Jersey20';
    src: local('Jersey20'), local('Jersey 20'),
         url('/resources/font/Jersey20.woff2') format('woff2'),
         url('/resources/font/Jersey20.woff') format('woff'),
         url('/resources/font/Jersey20.ttf') format('truetype');
    font-weight: 400;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    /* Chillax font - drop copies into public/resources/font/ */
    font-family: 'Chillax';
    src: local('Chillax'), local('Chillax Regular'),
         url('/resources/font/Chillax.woff2') format('woff2'),
         url('/resources/font/Chillax.woff') format('woff'),
         url('/resources/font/Chillax.ttf') format('truetype'),
         url('/resources/font/Chillax.otf') format('opentype');
    font-weight: 400;
    font-style: normal;
    font-display: swap;
  }

  /* Provide generic body styles using the theme */
  body {
    font-family: ${props => props.theme.fontFamily};
    background-color: ${props => props.theme.colors.background};
    color: ${props => props.theme.colors.primary};
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  /* Theme-aware text selection colors */
  ::selection {
    background: ${props => props.theme.selection?.background || props.theme.colors.primary};
    color: ${props => props.theme.selection?.color || props.theme.colors.background};
  }
  ::-moz-selection {
    background: ${props => props.theme.selection?.background || props.theme.colors.primary};
    color: ${props => props.theme.selection?.color || props.theme.colors.background};
  }
`;