import React, { useState, useEffect } from 'react';
import { Box, Typography } from '@mui/material';
import { useProductData } from '../../hooks/useProductData';
import { getUniqueCategories } from '../../utils/functions';
import CustomHashTable from '../../utils/CustomHashTable';
import { capFirstLetter } from '../../utils/functions';
import { IsLoading } from '../Data/components/IsLoading';
import { IsError } from '../Data/components/isError';
import * as cls from './stylesSx';
import { motion } from 'framer-motion';

export const Categories = () => {
  const {
    data: productData,
    isLoading: isProductLoading,
    isError: isProductError,
  } = useProductData();
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [table, setTable] = useState(null);

  useEffect(() => {
    if (productData) {
      setProducts(productData.data);
    }
  }, [productData]);

  useEffect(() => {
    if (products.length > 0) {
      const uniqueCategories = getUniqueCategories(products);
      setCategories(uniqueCategories);
      const newTable = new CustomHashTable(uniqueCategories.length);
      products.forEach((product) => {
        if (product.category && uniqueCategories.includes(product.category)) {
          const currentCount = newTable.get(product.category) || 0;
          newTable.set(product.category, currentCount + 1);
        }
      });
      setTable(newTable);
    }
  }, [products]);

  if (isProductLoading) {
    return <IsLoading />;
  }

  if (isProductError) {
    return <IsError />;
  }

  return (
    <motion.div
      initial={{ opacity: 0, display: 'none' }}
      transition={{
        duration: 0.2,
        ease: 'easeOut',
        delay: 0.5,
      }}
      animate={{ opacity: 1, display: 'flex' }}
      exit={{ opacity: 0, transition: { delay: 0, duration: 0.2 } }}
      style={{ height: '100%', width: '100% ' }}
    >
      <Box sx={cls.container}>
        <Box sx={cls.info}>
          <Typography
            variant="h4"
            sx={{ marginBottom: '20px', color: 'primary.dark' }}
          >
            CATEGORY LIST
          </Typography>
          <Box sx={cls.tableWrapper}>
            <Box sx={cls.column1}>
              <Typography sx={cls.nr}>Nr</Typography>
            </Box>
            <Box sx={cls.column}>
              <Typography
                sx={{
                  display: 'flex',
                  color: 'primary.dark',
                  justifyContent: 'center',
                }}
              >
                NAME
              </Typography>
            </Box>
            <Box sx={cls.column}>
              <Typography sx={cls.nr}>QUANTITY</Typography>
            </Box>
          </Box>
          <Box>
            {categories.map((category, i) => (
              <Box key={i} sx={cls.tableWrapper}>
                <Box sx={cls.column1}>
                  <Typography sx={{ color: 'primary.dark' }}>
                    {i + 1}
                  </Typography>
                </Box>
                <Box sx={cls.column}>
                  <Typography sx={{ color: 'primary.dark' }}>
                    {capFirstLetter(category)}
                  </Typography>
                </Box>
                <Box sx={cls.column}>
                  <Typography sx={{ color: 'primary.dark' }}>
                    {table.get(category)}
                  </Typography>
                </Box>
              </Box>
            ))}
          </Box>
        </Box>
      </Box>
    </motion.div>
  );
};
