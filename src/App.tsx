import './App.scss';
import React, { useState, useEffect } from 'react';
import { createTheme, ThemeProvider } from '@mui/material';
import Grid from '@mui/material/Grid';
import { Menu } from './layouts/Menu';
import { AppRoutes } from './AppRoutes';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import { ReactQueryDevtools } from 'react-query/devtools';
import { BackToMenuArrow } from './components/BackToMenuArrow';

const customTheme = createTheme({
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
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('md'));
  console.log(isSmallScreen);

  console.log(theme.breakpoints);
  const [menuVisible, setMenuVisible] = useState(true);

  useEffect(() => {
    if (!isSmallScreen) {
      setMenuVisible(true);
    }
  }, [isSmallScreen]);

  const handleMenuItemClick = () => {
    if (isSmallScreen) {
      console.log('here');
      setMenuVisible(false);
    } else {
      setMenuVisible(true);
    }
  };

  return (
    <ThemeProvider theme={customTheme}>
      <BackToMenuArrow />
      <Grid container sx={{ height: '100vh', width: '100%', display: 'flex' }}>
        {menuVisible && (
          <Grid item sx={{ height: '100%' }} item xs={12} md={3} lg={2}>
            <Menu handleMenuItemClick={handleMenuItemClick} />
          </Grid>
        )}

        <Grid item xs={12} md={9} lg={10} sx={{}}>
          <AppRoutes />
        </Grid>
        <ReactQueryDevtools initialIsOpen={false} position="bottom-right" />
      </Grid>
    </ThemeProvider>
  );
}

export default App;
