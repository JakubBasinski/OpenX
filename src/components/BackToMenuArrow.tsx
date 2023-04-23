import React from 'react';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Typography, Box } from '@mui/material';

export const BackToMenuArrow = ({ handleShowMenu }) => {
  return (
    <Box
      sx={{
        position: 'fixed',
        top: '16px',
        left: '16px',
        zIndex: 1,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '5px',
        fontSize: '10px',
        color: 'primary.dark',
        border: `1px solid`,
        padding: '4px 8px',
        cursor: 'pointer',
        '&:hover': {
          color: 'secondary.dark',
        },
      }}
      onClick={() => {
        handleShowMenu(true);
      }}
    >
      <ArrowBackIcon fontSize="small" />
      <Typography variatn={'body3'}>Back</Typography>
    </Box>
  );
};
