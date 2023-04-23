import React from 'react';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import { Typography } from '@mui/material';
import { NavLink } from 'react-router-dom';
import * as cls from './stylesSx';

const menuList = ['Data', 'Categories', 'Distance', 'Cart'];

export const Menu = ({ handleMenuItemClick }) => {
  return (
    <Box sx={cls.container}>
      <List>
        {menuList.map((item, i) => (
          <ListItem
            sx={{
              justifyContent: 'center',
              display: 'flex',
            }}
            key={i}
          >
            <Typography sx={cls.navLinkTypography}>
              <NavLink
                style={({ isActive }) => (isActive ? cls.active : cls.inactive)}
                to={`./${item}`}
                onClick={() => handleMenuItemClick()}
              >
                {item.toUpperCase()}
              </NavLink>
            </Typography>
          </ListItem>
        ))}
      </List>
    </Box>
  );
};
