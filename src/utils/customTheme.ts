import { createTheme } from '@mui/material';

export const customTheme = createTheme({
  palette: {
    primary: {
      main: 'rgb(246,232,199)',
    },
    secondary: {
      main: '#26aa98',
    },
  },
  typography: {
    fontFamily: 'Roboto Condensed, sans-serif',
  },
});
