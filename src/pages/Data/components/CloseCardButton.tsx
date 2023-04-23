import React from 'react';
import CancelPresentationIcon from '@mui/icons-material/CancelPresentation';

export const CloseCardButton = (props: any) => {
  return (
    <CancelPresentationIcon
      onClick={() => {
        props.handleShowList();
      }}
      sx={{
        color: 'primary.dark',
        cursor: 'pointer',
        '&:hover': { color: 'secondary.dark' },
      }}
    />
  );
};
