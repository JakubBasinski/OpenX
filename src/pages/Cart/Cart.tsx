import React, { useEffect, useState } from 'react';
import { Box, Typography } from '@mui/material';
import { useCartData } from '../../hooks/useCartsData';
import { useProductData } from '../../hooks/useProductData';
import { IsError } from '../Data/components/isError';
import { IsLoading } from '../Data/components/IsLoading';
import CustomHashTable from '../../utils/CustomHashTable';
import { findHighestValueCartUser } from '../../utils/functions';

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

  useEffect(() => {
    if (productData && cartData) {
      const products = productData.data;
      const carts = cartData.data;
      const priceHashMap = new CustomHashTable(products.length);

      products.forEach((product) => {
        priceHashMap.set(product.id.toString(), product.price);
      });

      const dataCart = findHighestValueCartUser(carts, priceHashMap);
      setHighestValueCartData(dataCart);
    }
  }, [productData, cartData]);

  if (isProductLoading || isCartLoading) {
    return <IsLoading />;
  }

  if (isProductError || isCartError) {
    return <IsError />;
  }
  return (
    <Box
      sx={{
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: 'rgba(0, 0, 0, 0.9)',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Box>
        <Typography> </Typography>
      </Box>
    </Box>
  );
};
