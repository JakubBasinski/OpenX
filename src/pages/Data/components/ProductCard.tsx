import React from 'react';
import { capFirstLetter } from '../../../utils/functions';
import { Box, Typography } from '@mui/material';
import { CloseCardButton } from './CloseCardButton';

export const ProductCard = ({
  product,
  showButtom,
  isSmallScreen,
  handleShowList,
}) => {
  return (
    <Box
      sx={(theme) => ({
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
        // marginTop: '30px',
      })}
    >
      {product ? (
        <>
          {!showButtom && isSmallScreen && (
            <Box
              sx={{
                width: '100%',
                display: 'flex',
                justifyContent: 'flex-end',
              }}
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
              sx={(theme) => ({
                maxWidth: '200px',
                maxHeight: '300px',
                [theme.breakpoints.down('md')]:{
                  maxWidth: '300px',
                  maxHeight: '400px',
                }
              })}
              src={product?.image}
              alt={product?.title}
            />
          </Box>
          <Box
            sx={(theme) => ({
              [theme.breakpoints.up('lg')]: {
                width: '70%',
              },
              display: 'flex',
              flexDirection: 'column',
              gap: '15px',
              width: '100%',
            })}
          >
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
