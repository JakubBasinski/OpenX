import React, { useEffect, useState } from 'react';
import { Box, Typography } from '@mui/material';
import { useCartData } from '../../hooks/useCartsData';
import { useProductData } from '../../hooks/useProductData';
import { useUserData } from '../../hooks/useUserData';
import { IsError } from '../Data/components/isError';
import { IsLoading } from '../Data/components/IsLoading';
import CustomHashTable from '../../utils/CustomHashTable';
import { findHighestValueCartUser } from '../../utils/functions';
import { capFirstLetter } from '../../utils/functions';
import * as cls from './stylesSx';

export const Cart = () => {
  const [highestValueCartData, setHighestValueCartData] = useState<{
    is: number;
    value: string;
  } | null>(null);

  const {
    isLoading: isCartLoading,
    data: cartData,
    isError: isCartError,
  } = useCartData();
  const {
    data: productData,
    isLoading: isProductLoading,
    isError: isProductError,
  } = useProductData();

  const {
    isLoading: isUserLoading,
    data: userData,
    isError: isUserError,
  } = useUserData();

  useEffect(() => {
    if (productData && cartData && userData) {
      const products = productData.data;
      const carts = cartData.data;
      const users = userData.data;
      const priceHashMap = new CustomHashTable(products.length);
      products.forEach((product) => {
        priceHashMap.set(product.id.toString(), product.price);
      });

      const dataCart = findHighestValueCartUser(carts, priceHashMap);
      const richUser = users.find((user) => user.id === dataCart.userId);
      dataCart.userName = richUser.username;
      setHighestValueCartData(dataCart);
    }
  }, [productData, cartData, userData]);

  if (isProductLoading || isCartLoading || isUserLoading) {
    return <IsLoading />;
  }

  if (isProductError || isCartError || isUserError) {
    return <IsError />;
  }

  return (
    <Box sx={cls.container}>
      <Box sx={cls.info}>
        {highestValueCartData && (
          <Typography component="span" variant="h5">
            The highest-value cart has a value of
            <Typography
              sx={{ color: 'secondary.dark' }}
              component="span"
              variant="h4"
            >
              {' '}
              {highestValueCartData.highestValue} ${' '}
            </Typography>
            and it belongs to the user with the username
            <Typography
              sx={{ color: 'secondary.dark' }}
              component="span"
              variant="h4"
            >
              {' '}
              {capFirstLetter(highestValueCartData.userName)}
            </Typography>
          </Typography>
        )}
      </Box>
    </Box>
  );
};
