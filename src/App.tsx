import React from 'react';
import { ThemeProvider } from 'styled-components';

import Routes from '@/router';
import GlobalStyle from '@/styles/global';
import { theme } from '@/styles/theme';

const App: React.FC = () => (
  <ThemeProvider theme={theme}>
    <Routes />
    <GlobalStyle />
  </ThemeProvider>
);

export default App;
