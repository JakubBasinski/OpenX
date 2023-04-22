export const container = {
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
};

export const navLinkTypography = {
  letterSpacing: '0.5px',
  fontSize: {
    xs: '1.9rem',
    md: '2.2rem',
  },
  textShadow: '1px 1px 0px #000',
};

export const active = {
  color: 'rgb(172, 162, 139)',
  textDecoration: 'none',
  transition: '0.3s ease 0s',
  width: '100%',
};

export const inactive = {
  color: 'rgb(26, 118, 106)',
  textDecoration: 'none',
};
