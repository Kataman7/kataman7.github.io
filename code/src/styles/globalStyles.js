import { createGlobalStyle } from 'styled-components';
import { LOADING_DURATIONS } from '../contexts/LoadingContext';

export const GlobalStyles = createGlobalStyle`
  /* Reset CSS */
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  /* Add local fonts placed in public/resources/font/ */
  @font-face {
    font-family: 'Jersey20';
    src: local('Jersey20'), local('Jersey 20'),
         url('/resources/font/Jersey20.ttf') format('truetype');
    font-weight: 400;
    font-style: normal;
    font-display: block;
  }

  @font-face {
    font-family: 'Chillax';
    src: local('Chillax'), local('Chillax Regular'),
         url('/resources/font/Chillax.otf') format('opentype');
    font-weight: 400;
    font-style: normal;
    font-display: block;
  }

  /* Provide generic body styles using the theme */
  body {
    font-family: ${props => props.theme.fontFamily};
    background-color: ${props => props.theme.colors.background};
    color: ${props => props.theme.colors.primary};
    transition: background-color ${LOADING_DURATIONS.fadeOut}ms ease-in-out, color ${LOADING_DURATIONS.fadeOut}ms ease-in-out;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  /* Styliser la scrollbar */
  ::-webkit-scrollbar {
    width: 12px;
  }

  ::-webkit-scrollbar-track {
    background: ${props => props.theme.colors.background};
  }

  ::-webkit-scrollbar-thumb {
    background: ${props => props.theme.colors.primary};
    border-radius: ${props => props.theme.borderRadius.normal};
  }

  ::-webkit-scrollbar-thumb:hover {
    background: ${props => props.theme.colors.secondary};
  }

  /* Pour Firefox */
  * {
    scrollbar-width: thin;
    scrollbar-color: ${props => props.theme.colors.primary} ${props => props.theme.colors.background};
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