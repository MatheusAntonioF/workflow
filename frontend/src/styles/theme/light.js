import { createMuiTheme } from '@material-ui/core';

const theme = createMuiTheme({
  palette: {
    primary: {
      dark: '#e6ac00',
      main: '#FFD03F',
      light: '#ffdf80',
      contrastText: '#404040',
    },
    secondary: {
      dark: '#dd2c00',
      main: '#ff5722',
      light: '#ff9e80',
    },
    grey: {
      dark: '#404040',
      main: '#5c5c5c',
      light: '#bfbfbf',
      contrastText: '#fff',
    },
    black: {
      main: '#000000',
    },
  },
  typography: {
    fontFamily: ['Nunito'],
  },
});

export default theme;
