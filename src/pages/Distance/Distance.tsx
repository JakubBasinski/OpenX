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
const message =
  'FakeApi provides fake coordinates that is why San Antonio is in the middle of the ocean :) ';

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
    <Box
      sx={{
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Box sx={{ height: '25vh', display: 'flex' }}>
        <Box
          sx={{
            backgroundColor: 'rgba(0, 0, 0, 0.9)',
            backdropFilter: 'blur(2px)',
            padding: '30px 60px',
            display: 'flex',
            flexDirection: 'column',
            borderRadius: '5px',
            gap: ' 15px',
            margin: 'auto',
          }}
        >
          <Box sx={{ display: 'flex' }}>
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
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
            {farAwayUsers?.map((user, i) => (
              <Box key={i} sx={{ display: 'flex', gap: '5px' }}>
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

      <Box
        sx={{
          height: '75vh',
          display: 'flex',
          width: '100%',
        }}
      >
        <Box
          sx={{
            width: '35%',
            dispaly: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            padding: '0 40px',
          }}
        >
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              borderRadius: '5px',
              gap: ' 15px',
              margin: 'auto',
              justifyContent: 'center',
            }}
          >
            <Typography
              sx={{
                backgroundColor: 'rgba(0, 0, 0, 0.95)',
                padding: '20px 40px',
                color: 'primary.dark',
                fontSize: '1.2rem',
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
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  width: '300px',
                  padding: '30px ',
                  backgroundColor: 'rgba(0, 0, 0, 0.95)',
                  backdropFilter: blur('2px'),
                  gap: '15px',
                }}
              >
                {selectedUsers?.map((user, i) => (
                  <Box key={i}>
                    <Typography
                      sx={{
                        textAlign: 'start ',
                        color: 'grey',
                        padding: '0',
                        margin: '0',
                        fontSize: ' 0.8rem',
                      }}
                    >
                      User {i + 1}
                    </Typography>
                    <Typography
                      sx={{
                        color: 'primary.dark',
                        textAlign: 'start ',
                        fontSize: '1.2rem',
                      }}
                    >
                      {capFirstLetter(user.name.firstname)}{' '}
                      {capFirstLetter(user.name.lastname)},{' '}
                      {capFirstLetter(user.address.city)}
                    </Typography>
                  </Box>
                ))}
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
                    Distance
                  </Typography>
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
        <Box
          sx={{
            width: '50%',
            backgroundColor: 'rgba(0, 0, 0, 0.7)',
            borderRadius: '5px',
            marginBottom: '20px',
          }}
        >
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
