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
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import { message } from './stylesSx';
import * as cls from './stylesSx';
import CancelPresentationIcon from '@mui/icons-material/CancelPresentation';

export const Distance = () => {
  const [showCustomUsers, setShowCustomUsers] = useState(true);
  const [showGlobe, setshowGlobe] = useState(false);
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('md'));
  const [isStackBarOpen, setSnackBarOpen] = useState(false);
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
      return updatedState;
    });
  };

  useEffect(() => {
    if (!isSmallScreen) {
      setShowCustomUsers(true);
      setshowGlobe(true);
    }
  }, [isSmallScreen]);

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
            <Typography variant={'h5'} sx={{ color: 'primary.dark' }}>
              The largest distance is equal{' '}
              <Typography
                variant={'h4'}
                sx={{ color: 'secondary.main' }}
                component="span"
              >
                {Math.floor(distance / 1000)}
              </Typography>{' '}
              km between users:
            </Typography>
          </Box>
          <Box sx={cls.userDetails}>
            {farAwayUsers?.map((user, i) => (
              <Box key={i} sx={cls.singleUserBox}>
                <Typography sx={{ color: 'secondary.main' }} variant={'h5'}>
                  {user.name.firstname.toUpperCase()}
                </Typography>
                <Typography sx={{ color: 'secondary.main' }} variant={'h5'}>
                  {user.name.lastname.toUpperCase()}
                </Typography>
              </Box>
            ))}
          </Box>
        </Box>
      </Box>

      <Box sx={cls.bottomPart}>
        {(!showGlobe || !isSmallScreen) && (
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

              <Box sx={cls.cumstomSelectContainer}>
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
                      <Typography sx={cls.subTitle}>
                        User {i + 1}, city
                      </Typography>
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
                {isSmallScreen && (
                  <Box
                    sx={{
                      marginTop: '50px',
                      border: 'solid 1px',
                      padding: '10px 20px ',
                      borderRadius: '5px',
                      color: 'primary.dark',
                      cursor: 'pointer',
                      '&:hover': { color: 'secondary.dark' },
                    }}
                    onClick={() => {
                      setShowCustomUsers(false);
                      setshowGlobe(true);
                    }}
                  >
                    <Typography variant={'h5'}>
                      Explore where people live
                    </Typography>
                  </Box>
                )}
              </Box>
            </Box>
          </Box>
        )}

        {(!showCustomUsers || !isSmallScreen) && (
          <Box sx={cls.mapWrapper}>
            {isSmallScreen && (
              <CancelPresentationIcon
                fontSize="large"
                sx={{
                  display: 'flex',
                  marginLeft: 'auto',
                  marginRight: '20px',
                  color: 'primary.dark',
                  cursor: 'pointer',
                  '&:hover': { color: 'secondary.dark' },
                }}
                onClick={() => {
                  setshowGlobe(false);
                  setShowCustomUsers(true);
                }}
              />
            )}

            <Map
              setSnackBarOpen={setSnackBarOpen}
              selectedUsers={selectedUsers}
            />
          </Box>
        )}
      </Box>

      <Snackbar
        open={isStackBarOpen}
        autoHideDuration={3500}
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
