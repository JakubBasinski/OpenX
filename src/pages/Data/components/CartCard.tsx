import React from 'react';
import { Box, Typography } from '@mui/material';
import { formatDate } from '../../../utils/functions';
import { CloseCardButton } from './CloseCardButton';
import * as cls from  './sytlesComponentsSx'

export const CartCard = ({
  cart,
  showButtom,
  isSmallScreen,
  handleShowList,
}) => {
  return (
    <Box
      sx={cls.cartCardRoot}
    >
      {cart ? (
        <>
          {(!showButtom && isSmallScreen) && (
            <Box
              sx={cls.buttonWrapper}
            >
              <CloseCardButton handleShowList={handleShowList} />
            </Box>
          )}
          <Box>
            <Typography
              sx={cls.productCardSub}
            >
              UserId
            </Typography>
            <Typography
             sx={cls.productCardText}
            >
              {cart.userId}
            </Typography>
          </Box>
          <Box>
            <Typography
            sx={cls.productCardSub}
            >
              Date
            </Typography>
            <Typography
              sx={cls.productCardText}
            >
              {formatDate(cart.date)}
            </Typography>
          </Box>
          <Box>
            <Typography
              sx={cls.productCardSub}
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
