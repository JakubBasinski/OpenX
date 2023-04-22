import React, { useEffect, useState } from 'react';
import { Box, Typography } from '@mui/material';
import { useUserData } from '../../hooks/useUserData';
import { IsError } from '../Data/components/isError';
import { IsLoading } from '../Data/components/IsLoading';
import { getDistanceInfo } from '../../utils/functions';
import { capFirstLetter } from '../../utils/functions';
import Map from './components/Map';
import { Snackbar, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { CustomMapSelect } from './components/CustomMapSelect';
import { calculateDistance } from '../../utils/functions';
import { message } from './stylesSx';
import * as cls from './stylesSx';

export const Distance = () => {
  const [isStackBarOpen, setSnackBarOpen] = useState(true);
  const { data: usersData, isLoading, isError } = useUserData();
  const users = usersData?.data;
  const [distance, setDistance] = useState<number | null>(null);
  const [farAwayUsers, seFarAwayUsers] = useState<[] | null>(null);
  const [selectedUsers, setSelectedUsers] = useState<[] | null>(null);
  const [openCustom, setOpenCustom] = useState(false);
  const [openCustom1, setOpenCustom1] = useState(false);

  let selectedUsersDistance;
  if (selectedUsers) {
    selectedUsersDistance = calculateDistance(
      selectedUsers[0],
      selectedUsers[1]
    );
  }

  const handleCloseCustom = () => {
    setOpenCustom(false);
  };
  const handleOpenCustom = () => {
    setOpenCustom(true);
  };
  const handleChangeCustom = (
    event: SelectChangeEvent<typeof selectedUsers>
  ) => {
    const selectedUserLastName = event.target.value.split(' ')[1];

    const newSelectedUser = users.find(
      (user) => user.name.lastname === selectedUserLastName.toLowerCase()
    );

    setSelectedUsers((prev) => {
      const updatedState = [...prev];
      updatedState[0] = newSelectedUser;
      console.log(updatedState);
      return updatedState;
    });
  };

  const handleCloseCustom1 = () => {
    setOpenCustom1(false);
  };
  const handleOpenCustom1 = () => {
    setOpenCustom1(true);
  };

  const handleChangeCustom1 = (
    event: SelectChangeEvent<typeof selectedUsers>
  ) => {
    const selectedUserLastName = event.target.value.split(' ')[1];

    const newSelectedUser = users.find(
      (user) => user.name.lastname === selectedUserLastName.toLowerCase()
    );

    setSelectedUsers((prev) => {
      const updatedState = [...prev];
      updatedState[1] = newSelectedUser;

      console.log(updatedState);
      return updatedState;
    });
  };

  useEffect(() => {
    if (users && users.length > 0) {
      const { maxDistance, maxDistanceUsers } = getDistanceInfo(users);
      setDistance(maxDistance);
      seFarAwayUsers(maxDistanceUsers);
      setSelectedUsers(maxDistanceUsers);
    }
  }, [users]);

  const handleClose = (reason: any) => {
    if (reason === 'clickaway') {
      return;
    }
    setSnackBarOpen(false);
  };

  const action = (
    <div>
      <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={handleClose}
        type="button"
      >
        <CloseIcon fontSize="small" />
      </IconButton>
    </div>
  );

  if (isLoading) {
    return <IsLoading />;
  }

  if (isError) {
    return <IsError />;
  }

  return (
    <Box sx={cls.container}>
      <Box sx={cls.upperPart}>
        <Box sx={cls.distanceInfor}>
          <Box sx={cls.infoBox}>
            <Typography sx={{ color: 'primary.dark' }}>
              The largest distance is equal{' '}
              <Typography
                variant={'h5'}
                sx={{ color: 'secondary.main' }}
                component="span"
              >
                {Math.floor(distance / 1000)}
              </Typography>{' '}
              km between :
            </Typography>
          </Box>
          <Box sx={cls.userDetails}>
            {farAwayUsers?.map((user, i) => (
              <Box key={i} sx={cls.singleUserBox}>
                <Typography sx={{ color: 'secondary.main' }} variant={'h5'}>
                  {capFirstLetter(user.name.firstname)}
                </Typography>
                <Typography sx={{ color: 'secondary.main' }} variant={'h5'}>
                  {capFirstLetter(user.name.lastname)}
                </Typography>
              </Box>
            ))}
          </Box>
        </Box>
      </Box>

      <Box sx={cls.bottomPart}>
        <Box sx={cls.bottomLeftPartContainer}>
          <Box sx={cls.bottomLeftPartWrapper}>
            <Typography
              sx={{
                color: 'primary.dark',
                fontSize: '1.2rem',

                textAlign: 'start',
              }}
              variant={'h5'}
            >
              Check distances for other users
            </Typography>

            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'start',
                alignItems: 'start',
                gap: '15px',
              }}
            >
              <CustomMapSelect
                handleCloseCustom={handleCloseCustom}
                handleOpenCustom={handleOpenCustom}
                openCustom={openCustom}
                handleChangeCustom={handleChangeCustom}
                selectedUsers={selectedUsers}
                users={users}
                index={0}
              />
              <CustomMapSelect
                handleCloseCustom={handleCloseCustom1}
                handleOpenCustom={handleOpenCustom1}
                openCustom={openCustom1}
                handleChangeCustom={handleChangeCustom1}
                selectedUsers={selectedUsers}
                users={users}
                index={1}
              />
            </Box>

            <Box>
              <Box sx={cls.selectedUserDetails}>
                {selectedUsers?.map((user, i) => (
                  <Box key={i}>
                    <Typography sx={cls.subTitle}>User {i + 1}</Typography>
                    <Typography sx={cls.title}>
                      {capFirstLetter(user.name.firstname)}{' '}
                      {capFirstLetter(user.name.lastname)},{' '}
                      {capFirstLetter(user.address.city)}
                    </Typography>
                  </Box>
                ))}
                <Box>
                  <Typography sx={cls.subTitle}>Distance</Typography>
                  <Typography
                    sx={{
                      color: 'primary.dark',
                      textAlign: 'start ',
                      fontSize: '1.2rem',
                    }}
                  >
                    {Math.floor(selectedUsersDistance / 1000)} km
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
        <Box sx={cls.title}>
          <Map selectedUsers={selectedUsers} />
        </Box>
      </Box>

      <Snackbar
        open={isStackBarOpen}
        autoHideDuration={8000}
        onClose={handleClose}
        message={message}
        action={action}
        anchorOrigin={{
          horizontal: 'center',
          vertical: 'bottom',
        }}
      />
    </Box>
  );
};
