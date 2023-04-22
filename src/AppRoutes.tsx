import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Box } from '@mui/material';
import { Data } from './pages/Data/Data';
import { Cart } from './pages/Cart/Cart';
import { Distance } from './pages/Distance/Distance';
import { Categories } from './pages/Categories/Categories';

export const AppRoutes = () => {
  return (
    <Box sx={{ height: '100%', display: 'flex' }}>
      <Routes>
        <Route path="/data" element={<Data />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/distance" element={<Distance />} />
      </Routes>
    </Box>
  );
};
