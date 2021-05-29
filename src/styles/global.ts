import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
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
`;
