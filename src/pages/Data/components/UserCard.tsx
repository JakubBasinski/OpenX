import React from 'react';
import { capFirstLetter } from '../../../utils/functions';
import { Box, Typography } from '@mui/material';
import { CloseCardButton } from './CloseCardButton';
import * as cls from './sytlesComponentsSx';

export const UserCard = ({
  user,
  showButtom,
  isSmallScreen,
  handleShowList,
}) => {
  return (
    <Box sx={cls.userCardRoot}>
      {user ? (
        <>
          <Box>
            {!showButtom && isSmallScreen && (
              <Box sx={cls.buttonWrapper}>
                <CloseCardButton handleShowList={handleShowList} />
              </Box>
            )}
            <Typography sx={cls.productCardSub}>Name</Typography>
            <Typography
              sx={cls.productCardText}
            >
              {capFirstLetter(user.name.firstname)}{' '}
              {capFirstLetter(user.name.lastname)}
            </Typography>
          </Box>
          <Box>
            <Typography sx={cls.productCardSub}>Email</Typography>
            <Typography
               sx={cls.productCardText}
            >
              {user.email}
            </Typography>
          </Box>
          <Box>
            <Typography
              sx={cls.productCardSub}
            >
              Phone
            </Typography>
            <Typography
              sx={cls.productCardText}
            >
              {user.phone}
            </Typography>
          </Box>
          <Box>
            <Typography
              sx={cls.productCardSub}
            >
              Address
            </Typography>
            <Typography
              sx={cls.productCardText}
            >
              {capFirstLetter(user.address.street)} {user.address.number}
            </Typography>
          </Box>
          <Box>
            <Typography
             sx={cls.productCardSub}
            >
              City
            </Typography>
            <Typography
              sx={cls.productCardText}
            >
              {capFirstLetter(user.address.city)}, {user.address.zipcode}
            </Typography>
          </Box>
          <Box>
            <Typography
             sx={cls.productCardSub}
            >
              Geolocation
            </Typography>
            <Typography
               sx={cls.productCardText}
            >
              {user.address.geolocation.lat}
            </Typography>
            <Typography
              sx={cls.productCardText}
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
