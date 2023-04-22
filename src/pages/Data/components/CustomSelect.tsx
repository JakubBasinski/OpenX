import React from 'react';
import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import * as cls from './sytlesComponentsSx';

const categoriesToSelect = ['Users', 'Products', 'Carts'];

export const CustomSelect = ({
  dataType,
  handleChange,
  open,
  handleOpen,
  handleClose,
}) => {
  return (
    <Box sx={cls.customSelectWrapper}>
      <FormControl sx={cls.formControl}>
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
          sx={cls.selectElement}
        >
          {categoriesToSelect.map((cat, i) => (
            <MenuItem key={i} sx={cls.menuItem} value={cat}>
              {cat}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
};
