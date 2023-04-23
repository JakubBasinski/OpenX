export const message =
  'FakeApi provides fake coordinates that is why San Antonio is in the middle of the ocean :) ';

export const container = (theme) => {
  return {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: 'rgba(0, 0, 0, 0.95)',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
  };
};

export const upperPart = (theme) => {
  return {
    height: '25%',
    display: 'flex',
    [theme.breakpoints.down('md')]: {
      width: '100%',
      height: 'auto',
    },
  };
};

export const distanceInfor = {
  padding: '20px 30px',
  display: 'flex',
  flexDirection: 'column',
  borderRadius: '5px',
  gap: ' 15px',
  margin: 'auto',
};

export const infoBox = { display: 'flex' };

export const userDetails = {
  display: 'flex',
  gap: '20px',
  justifyContent: 'center',
};

export const singleUserBox = { display: 'flex', gap: '5px' };

export const bottomPart = (theme) => ({
  height: '75%',
  display: 'flex',
  width: '100%',

  [theme.breakpoints.down('md')]: {
    width: '100%',
    height: 'auto',
    marginTop: '20px',
  },
});

export const bottomLeftPartContainer = (theme) => {
  return {
    [theme.breakpoints.down('md')]: {
      width: '100%',
    },
    width: '35%',
    dispaly: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '0 40px',
  };
};

export const bottomLeftPartWrapper = (theme) => {
  return {
    [theme.breakpoints.down('md')]: {
      width: '100%',
      alignItems: 'center',
    },
    display: 'flex',
    flexDirection: 'column',
    borderRadius: '5px',
    gap: ' 30px',
    margin: 'auto',
    justifyContent: 'center',
  };
};

export const selectedUserDetails = (theme) => {
  return {
    display: 'flex',
    flexDirection: 'column',
    borderRadius: '5px',
    gap: '15px',
    [theme.breakpoints.down('md')]: {
      alignItems: 'center',
    },
  };
};

export const subTitle = (theme) => {
  return {
    textAlign: 'start ',
    color: 'grey',
    padding: '0',
    margin: '0',
    fontSize: ' 0.8rem',
    [theme.breakpoints.down('md')]: {
      textAlign: 'center',
    },
  };
};

export const title = (theme) => {
  return {
    color: 'primary.dark',
    textAlign: 'start ',
    fontSize: '1.2rem',

    [theme.breakpoints.down('md')]: {
      height: '100%',
      width: '100%',
    },
  };
};

export const cumstomSelectContainer = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'start',
  alignItems: 'start',
  gap: '15px',
};

export const mapWrapper = (theme) => {
  return {
    color: 'primary.dark',
    padding: '10px',

    width: '100%',
    height: '100%',
    [theme.breakpoints.down('md')]: {
    },
  };
};
