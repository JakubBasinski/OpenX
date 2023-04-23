export const container = {
  width: '100%',
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  gap: '20px',
  backgroundColor: 'rgba(0, 0, 0, 0.7)',
  justifyContent: 'center',
  borderRight: '1px solid rgba(255, 255, 255)',
  borderColor: 'rgba(20,20,20)',
};

export const navLinkTypography = {
  letterSpacing: '0.5px',
  fontSize: {
    xs: '3rem',
    md: '2rem',
  },
  textShadow: '1px 1px 0px #000',
  transition: 'transform 0.2s ease-in-out',
  '&:hover': { transform: 'translateX(2px) translateY(-2px)' },
};

export const active = {
  color: 'rgb(172, 162, 139)',
  textDecoration: 'none',
  transition: '0.3s ease 0s',
  width: '100%',
  '&:hover': 'color:red',
};

export const inactive = {
  color: 'rgb(26, 118, 106)',
  textDecoration: 'none',
  '&:hover': { color: 'red' },
};
