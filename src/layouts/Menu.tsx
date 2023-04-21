import React from 'react';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import { Typography } from '@mui/material';
import { NavLink } from 'react-router-dom';
import styles from './menu.module.scss';
import StyledNavLink from './StyledNavLink';
import { red } from '@mui/material/colors';

const menuList = ['Data', 'Categories', 'Cart', 'Users'];

// font-family: 'Roboto Condensed', sans-serif;

export const Menu = () => {
  return (
    <Box
      sx={{
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        gap: '20px',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        padding: '20px',
        justifyContent: 'center',
        borderRight: '1px solid rgba(255, 255, 255)',
        borderColor: 'rgba(20,20,20)',
      }}
    >
      <List>
        {menuList.map((item, i) => (
          <ListItem
            sx={{
              justifyContent: 'center',
              display: 'flex',
            }}
            key={i}
          >
            <Typography
              sx={{
                letterSpacing: '0.5px',
                fontSize: {
                  xs: '1.9rem',
                  md: '2.2rem',
                },
                textShadow: '1px 1px 0px #000',
              }}
            >
              <NavLink
                style={({ isActive }) =>
                  isActive
                    ? {
                        color: 'rgb(246,232,199)',
                        textDecoration: 'none',
                        transition: '0.3s ease 0s',

                        width: '100%',
                      }
                    : {
                        color: 'rgb(26, 118, 106)',
                        textDecoration: 'none',
                      }
                }
                to={`./${item}`}
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
