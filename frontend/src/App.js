import React from 'react';

import { ThemeProvider } from '@material-ui/core';

import theme from '~/styles/theme/light';

import Routes from './routes';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Routes />
    </ThemeProvider>
  );
}

export default App;
