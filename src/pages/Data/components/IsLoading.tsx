import React from 'react';
import Stack from '@mui/material/Stack';
import LinearProgress from '@mui/material/LinearProgress';
import { Typography, Box } from '@mui/material';
import { isLoadingWrapper, stackStyles } from './sytlesComponentsSx';

export const IsLoading = () => {
  return (
    <Box sx={isLoadingWrapper}>
      <Stack sx={stackStyles} spacing={2}>
        <Typography variant={'h5'}>LOADING...</Typography>
        <LinearProgress color="secondary" />
        <LinearProgress color="secondary" />
      </Stack>
    </Box>
  );
};
