export const list = {
  display: 'flex',
  flexDirection: 'column',
  gap: '10px',
};

export const customSelectWrapper = {
  height: '100%',
  width: '100%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
};

export const formControl = {
  m: 1,
  minWidth: 120,
  margin: 0,
  padding: 0,
  border: '1px solid',
  borderRadius: '5px',
  color: 'primary.dark',
};

export const selectElement = {
  minWidth: '250px',
  backgroundColor: 'rgba(0, 0, 0, 0.9)',
  fontSize: '1.8rem',

  color: 'primary.main',
  '&.Mui-focused .MuiOutlinedInput': {
    borderColor: 'transparent',
  },
  '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
    borderColor: 'transparent',
  },
  '& .MuiOutlinedInput-notchedOutline': {
    borderColor: 'transparent',
  },
  '&.Mui-hover .MuiOutlinedInput-notchedOutline': {
    borderColor: 'transparent',
  },
  '& .MuiSelect-icon': {
    color: 'primary.main',
  },
  '& .MuiInputBase-input': {
    color: 'primary.dark',
  },
};

export const menuItem = {
  color: 'primary.dark',
  '&:hover': { color: 'secondary.main' },
};

export const errorStyle = {
  padding: '20px',
  width: '40%',
  margin: 'auto',
  backgroundColor: 'secondary.dark',
  color: 'primary.light',
  borderColor: 'primary.light',
};

export const isLoadingWrapper = {
  width: '100%',
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
};


export const stackStyles ={
    margin: 'auto',
    width: '30%',
    color: 'grey.500',
  }
