import './App.scss';
import { createTheme, ThemeProvider } from '@mui/material';
import Grid from '@mui/material/Grid';
import { Menu } from './layouts/Menu';
import { AppRoutes } from './AppRoutes';
import { ReactQueryDevtools } from 'react-query/devtools';

const theme = createTheme({
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

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Grid container sx={{ height: '100%', width: '100%' }}>
        <Grid item xs={4} md={3} lg={2}>
          <Menu />
        </Grid>
        <Grid item xs={8} md={9} lg={10}>
          <AppRoutes />
        </Grid>
        <ReactQueryDevtools initialIsOpen={false} position="bottom-right" />
      </Grid>
    </ThemeProvider>
  );
}

export default App;
