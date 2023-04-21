import React from 'react';
import { capFirstLetter } from '../utils/functions';
import { Box, Typography } from '@mui/material';

export const ProductCard = ({ product }) => {
  console.log(product);
  return (
    <Box
      sx={{
        display: 'flex',
        width: '90%',
        // minHeight: '480px',
        padding: '30px ',
        backgroundColor: 'rgba(0, 0, 0, 0.9)',
        backdropFilter: blur('2px'),
        gap: '50px',
      }}
    >
      <Box
        component="img"
        sx={{ height: '200px', width: '200px', margin: 'auto' }}
        src={product?.image}
        alt={product?.title}
      />

      {product ? (
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
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
              Title
            </Typography>
            <Typography
              sx={{
                color: 'primary.dark',
                textAlign: 'start ',
                fontSize: '1.4rem',
              }}
            >
              {product.title}
            </Typography>
          </Box>
          <Box sx={{ display: 'flex', gap: '20px' }}>
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
                Price
              </Typography>
              <Typography
                sx={{
                  color: 'primary.dark',
                  textAlign: 'start',
                  fontSize: '1.4rem',
                }}
              >
                {product.price} $
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
                Category
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  color: 'primary.dark',
                  textAlign: 'start ',
                  fontSize: '1.4rem',
                }}
              >
                {capFirstLetter(product.category)}
              </Typography>
            </Box>
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
            <Typography
              sx={{
                textAlign: 'start ',
                color: 'grey',
                padding: '0',
                margin: '0',
                fontSize: ' 0.8rem',
              }}
            >
              Rating
            </Typography>
            <Typography
              variant="body1"
              sx={{
                color: 'primary.dark',
                textAlign: 'start ',
                fontSize: '1.4rem',
              }}
            >
              {product.rating?.rate}
            </Typography>
          </Box>
        </Box>
      ) : (
        <Typography variant={'h4'} sx={{ color: 'primary.dark' }}>
          Select a product
        </Typography>
      )}
    </Box>
  );
};
