import React, { useState } from 'react';
import { Box } from '@mui/material';
import { Grid, Typography } from '@mui/material';
import UserCard from '../../components/UserCard';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import { capFirstLetter } from '../../utils/functions';
import { useUserData } from '../../hooks/useUserData';
import { CustomSelect } from './components/CustomSelect';
import { IsLoading } from './components/IsLoading';
import { UserList } from './components/UserList';
import { IsError } from './components/isError';
import { useProductData } from '../../hooks/useProductData';
import { ProductList } from './components/ProductList';
import { ProductCard } from '../../components/ProductCard';


export const Data = () => {
  const [dataType, setDataType] = useState<string | number>('Users');
  const [open, setOpen] = useState(false);
  const handleChange = (event: SelectChangeEvent<typeof dataType>) => {
    setDataType(event.target.value);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const {
    isLoading: isUserLoading,
    data: userData,
    isError: isUserError,
  } = useUserData();

  const {
    isLoading: isProductLoading,
    data: productData,
    isError: isProductError,
  } = useProductData();

  const users = userData?.data;
  const products = productData?.data;

  console.log('products', products);
  const [activeUser, setActiveUser] = useState(
    users && users.length > 0 ? users[0] : null
  );
  const [activeProduct, setActiveProducts] = useState(
    products && products.length > 0 ? products[0] : null
  );

  if (isUserLoading || isProductLoading) {
    return <IsLoading />;
  }

  if (isUserError || isProductError) {
    return <IsError />;
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
      <Grid
        container
        sx={{
          height: '15vh',
          width: '100%',
        }}
      >
        <CustomSelect
          dataType={dataType}
          handleChange={handleChange}
          open={open}
          handleOpen={handleOpen}
          handleClose={handleClose}
        />
      </Grid>

      <Grid
        container
        sx={{
          overflow: 'scroll',
          height: '85vh',
          display: 'flex',
        }}
      >
        <Grid
          item
          sx={{
            overflow: 'scroll',
            display: 'flex',
            justifyContent: 'center',
            height: '100%',
            padding: '10px'
          }}
          xs={4}
        >
          {dataType === 'Users' && (
            <UserList
              users={users}
              activeUser={activeUser}
              setActiveUser={setActiveUser}
            />
          )}

          {dataType === 'Products' && (
            <ProductList
              products={products}
              activeProduct={activeProduct}
              setActiveProducts={setActiveProducts}
            />
          )}
        </Grid>
        <Grid item xs={8}>
          {dataType === 'Users' && <UserCard user={activeUser} />}
          {dataType === 'Products' && <ProductCard product={activeProduct} />}
        </Grid>
      </Grid>
    </Box>
  );
};

{
  /* {users?.map((user, i) => ( */
}

// <Grid
//   item
//   sx={{
//     border: 'solid red 1px',
//     backgroundColor: 'rgba(0, 0, 0, 0.9)',
//     border: '2px solid transparent',

//     borderRadius: '5px',
//     padding: '10px',
//   }}

//   item
//   key={i}
//   xs={2}
// >
//   <UserCard user={user} />
// </Grid>
// ))}
