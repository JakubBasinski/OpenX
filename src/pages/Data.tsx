import React from 'react';
import { Box } from '@mui/material';
import { useProducData } from '../hooks/useProductData';
import Stack from '@mui/material/Stack';
import LinearProgress from '@mui/material/LinearProgress';
import { Grid } from '@mui/material';

const dataCategories = ['Users', 'Data', 'Products'];

export const Data = () => {
  const { isLoading, data: userData, isError, error } = useProducData();

  // console.log(userData);

  // if (isLoading) {
  //   return (
  //     <Stack sx={{ width: '100%', color: 'grey.500' }} spacing={2}>
  //       <LinearProgress color="secondary" />
  //       <LinearProgress color="success" />
  //       <LinearProgress color="inherit" />
  //     </Stack>
  //   );
  // }

  // if (isError) {
  //   return <h2> {error?.message} </h2>;
  // }

  return (
    <Box
      sx={{ border: 'solid yellow 1px', width: '100%', overflowl: 'scroll' }}
    >
      
      <Grid
        container
        sx={{
          border: 'solid blue 1px',
          height: '150px',
          width: '100%',
        }}
      >
        <Grid
          item
          sx={{
            border: 'solid green 1px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
          xs={4}
        >
          Users
        </Grid>
        <Grid item xs={4}>
          Products
        </Grid>
        <Grid item xs={4}>
          Dates
        </Grid>
      </Grid>
    </Box>
  );
};
