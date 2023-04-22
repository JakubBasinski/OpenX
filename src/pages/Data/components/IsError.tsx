import React from 'react';
import { Typography } from '@mui/material';
import { errorStyle } from './sytlesComponentsSx';

export const IsError = () => {
  return (
    <Typography variant={'h4'} sx={errorStyle}>
      Error occured, please try again later !
    </Typography>
  );
};
