import React, { useState, useEffect } from 'react';
import { Box, Typography } from '@mui/material';
import { useProductData } from '../../hooks/useProductData';
import { getUniqueCategories } from '../../utils/functions';
import CustomHashTable from '../../utils/CustomHashTable';
import { capFirstLetter } from '../../utils/functions';
import { IsLoading } from '../Data/components/IsLoading';
import { IsError } from '../Data/components/isError';


export const Categories = () => {
  const { data: productData, isLoading, isError } = useProductData();
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [table, setTable] = useState(null);

  useEffect(() => {
    if (productData?.data) {
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

  if (isLoading) {
    return <IsLoading />;
  }

  if (isError) {
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
      <Box
        sx={{
          width: '60%',
          // backgroundColor: 'rgba(0, 0, 0, 0.9)',
          backdropFilter: 'blur(2px)',
          padding: '40px 60px',
          display: 'flex',
          flexDirection: 'column',
          borderRadius: '5px',
        }}
      >
        <Typography
          variant="h4"
          sx={{ marginBottom: '20px', color: 'primary.dark' }}
        >
          CATEGORY LIST
        </Typography>
        <Box
          sx={{
            width: '100%',
            display: 'flex',
          }}
        >
          <Box
            sx={{
              width: '10%',
              padding: '8px',
              border: 'solid 1px white',
              borderColor: 'primary.dark',
            }}
          >
            <Typography
              sx={{
                display: 'flex',
                color: 'primary.dark',
                justifyContent: 'center',
              }}
            >
              Nr
            </Typography>
          </Box>
          <Box
            sx={{
              width: '45%',
              padding: '8px',
              border: 'solid 1px white',
              borderColor: 'primary.dark',
            }}
          >
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
          <Box
            sx={{
              width: '45%',
              padding: '8px',
              border: 'solid 1px white',
              borderColor: 'primary.dark',
            }}
          >
            <Typography
              sx={{
                display: 'flex',
                color: 'primary.dark',
                justifyContent: 'center',
              }}
            >
              QUANTITY
            </Typography>
          </Box>
        </Box>
        <Box>
          {categories.map((category, i) => (
            <Box
              key={i}
              sx={{
                width: '100%',
                display: 'flex',
              }}
            >
              <Box
                sx={{
                  width: '10%',
                  padding: '8px',
                  border: 'solid 1px white',
                  borderColor: 'primary.dark',
                }}
              >
                <Typography sx={{ color: 'primary.dark' }}>{i + 1}</Typography>
              </Box>
              <Box
                sx={{
                  width: '45%',
                  padding: '8px',
                  border: 'solid 1px white',
                  borderColor: 'primary.dark',
                }}
              >
                <Typography sx={{ color: 'primary.dark' }}>
                  {capFirstLetter(category)}
                </Typography>
              </Box>
              <Box
                sx={{
                  width: '45%',
                  padding: '5px',
                  border: 'solid 1px white',
                  borderColor: 'primary.dark',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <Typography sx={{ color: 'primary.dark' }}>
                  {table.get(category)}
                </Typography>
              </Box>
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
};
