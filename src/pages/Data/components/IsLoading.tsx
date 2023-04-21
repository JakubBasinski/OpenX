import React from 'react';
import Stack from '@mui/material/Stack';
import LinearProgress from '@mui/material/LinearProgress';
import { Typography, Box } from '@mui/material';

export const IsLoading = () => {
  return (
    <Box
      sx={{
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
      }}
    >
      <Stack
        sx={{
          margin: 'auto',
          width: '30%',
          color: 'grey.500',
        }}
        spacing={2}
      >
        <Typography variant={'h5'}>LOADING...</Typography>
        <LinearProgress color="secondary" />
        <LinearProgress color="secondary" />
      </Stack>
    </Box>
  );
};
