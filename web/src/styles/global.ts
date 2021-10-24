import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`

  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: Roboto, sans-serif;
  }

  body {
    color: ${props => props.theme.colors.text};
    background: ${props => props.theme.colors.primary};
  }

`;