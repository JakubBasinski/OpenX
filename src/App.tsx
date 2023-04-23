import './App.scss';
import React, { useState, useEffect } from 'react';
import { ThemeProvider } from '@mui/material';
import Grid from '@mui/material/Grid';
import { Menu } from './layouts/Menu';
import { AppRoutes } from './AppRoutes';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import { ReactQueryDevtools } from 'react-query/devtools';
import { BackToMenuArrow } from './components/BackToMenuArrow';
import { customTheme } from './utils/customTheme';
import { AnimatePresence } from 'framer-motion';

function App() {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('md'));
  const [menuVisible, setMenuVisible] = useState(true);
  console.log(theme.breakpoints);

  useEffect(() => {
    if (!isSmallScreen) {
      setMenuVisible(true);
    }
  }, [isSmallScreen]);

  const handleShowMenu = () => {
    setMenuVisible(true);
  };

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
      <Grid
        container
        sx={{
          height: '100vh',
          width: '100%',
          display: 'flex',
        }}
      >
        {menuVisible && (
          <Grid item sx={{ height: '100%' }} xs={12} md={3} lg={2}>
            <Menu handleMenuItemClick={handleMenuItemClick} />
          </Grid>
        )}

        {(!menuVisible || !isSmallScreen) && (
          <Grid item xs={12} md={9} lg={10} sx={{ height: '100%' }}>
            <AppRoutes />
          </Grid>
        )}
      </Grid>
      {!menuVisible && <BackToMenuArrow handleShowMenu={handleShowMenu} />}
    </ThemeProvider>
  );
}

export default App;
