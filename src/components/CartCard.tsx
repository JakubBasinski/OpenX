import React from 'react';
import { Box, Typography } from '@mui/material';
import { formatDate } from '../utils/functions';

export const CartCard = ({ cart }) => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        width: '300px',
        padding: '30px ',
        border: '1px solid',
        borderColor: 'primary.dark',
        borderRadius: '5px',
        gap: '15px',
      }}
    >
      {cart ? (
        <>
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
              UserId
            </Typography>
            <Typography
              sx={{
                color: 'primary.dark',
                textAlign: 'start ',
                fontSize: '1.4rem',
              }}
            >
              {cart.userId}
            </Typography>
          </Box>
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
              Date
            </Typography>
            <Typography
              sx={{
                color: 'primary.dark',
                textAlign: 'start ',
                fontSize: '1.4rem',
              }}
            >
              {formatDate(cart.date)}
            </Typography>
          </Box>
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
              Products
            </Typography>
            <Box>
              {cart.products?.map((product, i) => (
                <Box key={i} sx={{ display: 'flex', gap: '10px' }}>
                  <Typography
                    variant="body1"
                    sx={{
                      color: 'primary.dark',
                      textAlign: 'start ',
                    }}
                  >
                    {i + 1}.
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{
                      color: 'primary.dark',
                      textAlign: 'start ',
                    }}
                  >
                    Product id: {product.productId}
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{
                      color: 'primary.dark',
                      textAlign: 'start ',
                    }}
                  >
                    Quantity: {product.quantity}
                  </Typography>
                </Box>
              ))}
            </Box>
          </Box>
        </>
      ) : (
        <Typography variant={'h4'} sx={{ color: 'primary.dark' }}>
          Select a Cart
        </Typography>
      )}
    </Box>
  );
};
