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

export const stackStyles = {
  margin: 'auto',
  width: '30%',
  color: 'grey.500',
};


export const productCardRoot = (theme) => ({
  [theme.breakpoints.down('sm')]: {
    padding: '0px',
  },
  [theme.breakpoints.down('lg')]: {
    padding: '30px',
    flexDirection: 'column',
    height: '100%',
  },
  flexDirection: 'row',
  display: 'flex',
  width: '95%',
  padding: '30px ',
  border: '1px solid',
  borderColor: 'primary.dark',
  gap: '50px',
  borderRadius: '5px',
})

export const productCardImg = (theme) => ({
  maxWidth: '200px',
  maxHeight: '300px',
  [theme.breakpoints.down('md')]:{
    maxWidth: '300px',
    maxHeight: '400px',
  }
})

export const productCardInfo = (theme) => ({
  [theme.breakpoints.up('lg')]: {
    width: '70%',
  },
  display: 'flex',
  flexDirection: 'column',
  gap: '15px',
  width: '100%',
})

export const productCardText = {
  color: 'primary.dark',
  textAlign: 'start ',
  fontSize: '1.4rem',
}
export const productCardSub = 
  {
    textAlign: 'start ',
    color: 'grey',
    padding: '0',
    margin: '0',
    fontSize: ' 0.8rem',
  }

export const userCardRoot = {
  display: 'flex',
  flexDirection: 'column',
  width: '300px',
  padding: '30px ',
  marginTop: '30px',
  gap: '15px',
  border: '1px solid',
  borderRadius: '5px',
  color: 'primary.dark',
}


export const buttonWrapper ={
    width: '100%',
    display: 'flex',
    justifyContent: 'flex-end',
}

export const cartCardRoot = {
  display: 'flex',
  flexDirection: 'column',
  padding: '30px ',
  border: '1px solid',
  borderColor: 'primary.dark',
  borderRadius: '5px',
  gap: '15px',
  marginTop: '30px',
}