import React from 'react';
import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import { capFirstLetter } from '../../../utils/functions';

export const CustomMapSelect = ({
  selectedUsers,
  handleChangeCustom,
  openCustom,
  handleOpenCustom,
  handleCloseCustom,
  users,
  index,
}) => {
  return (
    <Box
      sx={{
        height: '100%',
        width: '100%',
        display: 'flex',
        alignItems: 'start',
        justifyContent: 'start',
      }}
    >
      <FormControl
        sx={{
          m: 1,
          border: '1px solid',
          justifyContent: 'start',
          borderRadius: '5px',
          color: 'primary.dark',
          margin: 0,
          minWidth: '180px',
        }}
      >
        <Select
          labelId="demo-controlled-open-select-label"
          id="demo-controlled-open-select"
          open={openCustom}
          onClose={handleCloseCustom}
          onOpen={handleOpenCustom}
          value={
            selectedUsers
              ? capFirstLetter(selectedUsers[index].name.firstname) +
                ' ' +
                capFirstLetter(selectedUsers[index].name.lastname)
              : ''
          }
          label="Data"
          onChange={handleChangeCustom}
          MenuProps={{
            PaperProps: { sx: { background: 'black' } },
          }}
          sx={{
            fontSize: '1.2rem',
      

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
          {users?.map((user, i) => {
            return (
              <MenuItem
                key={i}
                sx={{
                  color: 'primary.dark',
                  '&:hover': { color: 'secondary.main' },
                }}
                value={
                  capFirstLetter(user.name.firstname) +
                  ' ' +
                  capFirstLetter(user.name.lastname)
                }
              >
                {capFirstLetter(user.name.firstname)}{' '}
                {capFirstLetter(user.name.lastname)}
              </MenuItem>
            );
          })}
        </Select>
      </FormControl>
    </Box>
  );
};
