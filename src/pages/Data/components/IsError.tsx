import React from 'react';
import { Typography } from '@mui/material';

export const IsError = () => {
  return (
    <Typography
      variant={'h4'}
      sx={{
        padding: '20px',
        width: '40%',
        margin: 'auto',
        backgroundColor: 'secondary.dark',
        color: 'primary.light',
        // border: 'solid 1px black',
        borderColor: 'primary.light',
      }}
    >
      Error occured, please try again later !
    </Typography>
  );
};
