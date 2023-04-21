import React from 'react';
import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';

export const CustomSelect = ({
  dataType,
  handleChange,
  open,
  handleOpen,
  handleClose,
}) => {
  return (
    <Box
      sx={{
        height: '100%',
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <FormControl
        sx={{
          m: 1,
          minWidth: 120,
        }}
      >
        <Select
          labelId="demo-controlled-open-select-label"
          id="demo-controlled-open-select"
          open={open}
          onClose={handleClose}
          onOpen={handleOpen}
          value={dataType}
          label="Data"
          onChange={handleChange}
          MenuProps={{
            PaperProps: { sx: { background: 'black' } },
          }}
          sx={{
            minWidth: '250px',
            backgroundColor: 'rgba(0, 0, 0, 0.9)',
            fontSize: '1.8rem',

            '&: hover': {
              border: '1px solid transparent',
            },
            color: 'primary.main',
            '&.Mui-focused .MuiOutlinedInput': {
              borderColor: 'transparent',
            },
            '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
              borderColor: 'transparent',
            },
            '& .MuiOutlinedInput-notchedOutline': {
              borderColor: 'transparent',
            },
            '&.Mui-hover .MuiOutlinedInput-notchedOutline': {
              borderColor: 'transparent',
            },
            '& .MuiSelect-icon': {
              color: 'primary.main',
            },
            '& .MuiInputBase-input': {
              color: 'primary.dark',
            },
          }}
        >
          <MenuItem
            sx={{
              color: 'primary.dark',
              '&:hover': { color: 'secondary.main' },
            }}
            value={'Users'}
          >
            Users
          </MenuItem>
          <MenuItem
            sx={{
              color: 'primary.dark',

              '&:hover': { color: 'secondary.main' },
            }}
            value={'Products'}
          >
            Products
          </MenuItem>
          <MenuItem
            sx={{
              color: 'primary.dark',
              '&:hover': { color: 'secondary.main' },
            }}
            value={'Carts'}
          >
            Carts
          </MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
};
