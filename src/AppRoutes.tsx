import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Box } from '@mui/material';
import { Data } from './pages/Data/Data';
import { Cart } from './pages/Cart/Cart';
import { Distance } from './pages/Distance/Distance';
import { Categories } from './pages/Categories/Categories';
import { Home } from './pages/Home/Home';
import { AnimatePresence } from 'framer-motion';
import { useLocation } from 'react-router-dom';

export const AppRoutes = () => {
  const location = useLocation();
  return (
    <Box sx={{ height: '100%', display: 'flex' }}>
      <AnimatePresence>
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/data" element={<Data />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/distance" element={<Distance />} />
        </Routes>
      </AnimatePresence>
    </Box>
  );
};
