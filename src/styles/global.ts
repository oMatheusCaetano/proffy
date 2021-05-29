import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-size: 16px;
    font-family: Poppins, sans-serif;
  }

  body, #root {
    min-height: 100vh;
  }

  ul, li {
    list-style: none;
  }

  button {
    cursor: pointer;
  }

  label, span {
    font-size: 14px;
  }

  small {
    font-size: 12px;
  }

  h2 {
    font-size: 36px;
    font-family: Archivo, sans-serif;
  }

  h4 {
    font-size: 24px;
    font-family: Archivo, sans-serif;
  }

  h5 {
    font-size: 20px;
    font-family: Archivo, sans-serif;
  }
`;
