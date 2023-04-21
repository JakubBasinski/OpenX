import React from 'react';
import { capFirstLetter } from '../utils/functions';
import { Box, Typography } from '@mui/material';

const UserCard = ({ user }) => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        width: '300px',
        // minHeight: '480px',
        padding: '30px ',
        backgroundColor: 'rgba(0, 0, 0, 0.7)',
        backdropFilter: blur('2px'),
        gap: '15px',
      }}
    >
      {user ? (
        <>
          <Box>
            <Typography
              sx={{
                textAlign: 'start ',
                color: 'grey',
                padding: '0',
                margin: '0',
                fontSize: ' 0.8rem',
              }}
            >
              Name
            </Typography>
            <Typography
              sx={{
                color: 'primary.dark',
                textAlign: 'start ',
                fontSize: '1.4rem',
              }}
            >
              {capFirstLetter(user.name.firstname)}{' '}
              {capFirstLetter(user.name.lastname)}
            </Typography>
          </Box>
          <Box>
            <Typography
              sx={{
                textAlign: 'start ',
                color: 'grey',
                padding: '0',
                margin: '0',
                fontSize: ' 0.8rem',
              }}
            >
              Email
            </Typography>
            <Typography
              sx={{
                color: 'primary.dark',
                textAlign: 'start ',
                fontSize: '1.4rem',
              }}
            >
              {user.email}
            </Typography>
          </Box>
          <Box>
            <Typography
              sx={{
                textAlign: 'start ',
                color: 'grey',
                padding: '0',
                margin: '0',
                fontSize: ' 0.8rem',
              }}
            >
              Phone
            </Typography>
            <Typography
              sx={{
                color: 'primary.dark',
                textAlign: 'start ',
                fontSize: '1.4rem',
              }}
            >
              {user.phone}
            </Typography>
          </Box>
          <Box>
            <Typography
              sx={{
                textAlign: 'start ',
                color: 'grey',
                padding: '0',
                margin: '0',
                fontSize: ' 0.8rem',
              }}
            >
              Address
            </Typography>
            <Typography
              sx={{
                color: 'primary.dark',
                textAlign: 'start ',
                fontSize: '1.4rem',
              }}
            >
              {capFirstLetter(user.address.street)} {user.address.number}
            </Typography>
          </Box>
          <Box>
            <Typography
              sx={{
                textAlign: 'start ',
                color: 'grey',
                padding: '0',
                margin: '0',
                fontSize: ' 0.8rem',
              }}
            >
              City
            </Typography>
            <Typography
              sx={{
                color: 'primary.dark',
                textAlign: 'start ',
                fontSize: '1.4rem',
              }}
            >
              {capFirstLetter(user.address.city)}, {user.address.zipcode}
            </Typography>
          </Box>
          <Box>
            <Typography
              sx={{
                textAlign: 'start ',
                color: 'grey',
                padding: '0',
                margin: '0',
                fontSize: ' 0.8rem',
              }}
            >
              Geolocation
            </Typography>
            <Typography
              sx={{
                color: 'primary.dark',
                textAlign: 'start ',
                fontSize: '1.4rem',
              }}
            >
              {user.address.geolocation.lat}
            </Typography>
            <Typography
              sx={{
                color: 'primary.dark',
                textAlign: 'start',
                fontSize: '1.4rem',
              }}
            >
              {user.address.geolocation.long}
            </Typography>
          </Box>
        </>
      ) : (
        <Typography variant={'h4'} sx={{ color: 'primary.dark' }}>
          Select a user
        </Typography>
      )}
    </Box>
  );
};

export default UserCard;
