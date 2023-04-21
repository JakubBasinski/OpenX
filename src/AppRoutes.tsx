import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Box } from '@mui/material';
import { Data } from './pages/Data/Data';
import { Users } from './pages/Users';
import { Carts } from './pages/Carts';
import { Categories } from './pages/Categories/Categories';

export const AppRoutes = () => {
  return (
    <Box sx={{ height: '100%', display: 'flex' }}>
      <Routes>
        <Route path="/data" element={<Data />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/users" element={<Users />} />
        <Route path="/carts" element={<Carts />} />
      </Routes>
    </Box>
  );
};
