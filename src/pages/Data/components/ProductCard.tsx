import React from 'react';
import { capFirstLetter } from '../../../utils/functions';
import { Box, Typography } from '@mui/material';
import { CloseCardButton } from './CloseCardButton';
import * as cls from './sytlesComponentsSx';

export const ProductCard = ({
  product,
  showButtom,
  isSmallScreen,
  handleShowList,
}) => {
  return (
    <Box sx={cls.productCardRoot}>
      {product ? (
        <>
          {!showButtom && isSmallScreen && (
            <Box
              sx={cls.buttonWrapper}
            >
              <CloseCardButton handleShowList={handleShowList} />
            </Box>
          )}
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <Box
              component="img"
              sx={cls.productCardImg}
              src={product?.image}
              alt={product?.title}
            />
          </Box>
          <Box sx={cls.productCardInfo}>
            <Box>
              <Typography sx={cls.productCardSub}>Title</Typography>
              <Typography sx={cls.productCardText}>{product.title}</Typography>
            </Box>
            <Box sx={{ display: 'flex', gap: '20px' }}>
              <Box>
                <Typography sx={cls.productCardSub}>Price</Typography>
                <Typography sx={cls.productCardText}>
                  {product.price} $
                </Typography>
              </Box>
              <Box>
                <Typography sx={cls.productCardSub}>Category</Typography>
                <Typography variant="body1" sx={cls.productCardText}>
                  {capFirstLetter(product.category)}
                </Typography>
              </Box>
            </Box>
            <Box>
              <Typography
                sx={cls.productCardSub}
              >
                Description
              </Typography>
              <Typography
                variant="body1"
                sx={{ color: 'primary.dark', textAlign: 'start' }}
              >
                {product.description}
              </Typography>
            </Box>

            <Box>
              <Typography sx={cls.productCardSub}>Rating</Typography>
              <Typography variant="body1" sx={cls.productCardText}>
                {product.rating?.rate}
              </Typography>
            </Box>
          </Box>
        </>
      ) : (
        <Typography
          variant={'h4'}
          sx={{ color: 'primary.dark', margin: 'auto' }}
        >
          Select a product
        </Typography>
      )}
    </Box>
  );
};
