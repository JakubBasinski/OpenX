import React from 'react';
import { Box } from '@mui/material';
import { useProductData } from '../../hooks/useProductData';
import { getUniqueCategories } from '../../utils/functions';


export const Categories = () => {
  const { data: productData, isLodings, isError } = useProductData();
  const products = productData?.data;
  let categories;
  if (products) {
    categories = getUniqueCategories(products);
  }

  // const filteredProducts = 

  if (categories?.length) {
    console.log(categories[0]);
    const filteredProducts = products.filter(
      (product) => product.category === categories[0]
    );

    const count = filteredProducts.length;
    console.log(count);
  }

  return (
    <Box
      sx={{
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: 'rgba(0, 0, 0, 0.3)',
      }}
    >
      {' '}
      hihi{' '}
    </Box>
  );
};
