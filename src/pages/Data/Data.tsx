import React, { useState } from 'react';
import { Box } from '@mui/material';
import { Grid } from '@mui/material';
import { CustomSelect } from './components/CustomSelect';
import { IsLoading } from './components/IsLoading';
import { IsError } from './components/isError';
import { UserCard } from '../../components/UserCard';
import { ProductCard } from '../../components/ProductCard';
import { CartCard } from '../../components/CartCard';
import { CartList } from './components/CartList';
import { ProductList } from './components/ProductList';
import { UserList } from './components/UserList';
import { useProductData } from '../../hooks/useProductData';
import { useUserData } from '../../hooks/useUserData';
import { useCartData } from '../../hooks/useCartsData';
import * as cls from './stylesSx';

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

  const {
    isLoading: isCartLoading,
    data: cartData,
    isError: isCartError,
  } = useCartData();

  const users = userData?.data;
  const products = productData?.data;

  const carts = cartData?.data;

  const [activeUser, setActiveUser] = useState(
    users && users.length > 0 ? users[0] : null
  );
  const [activeProduct, setActiveProducts] = useState(
    products && products.length > 0 ? products[0] : null
  );
  const [activeCart, setActiveCart] = useState(
    carts && carts.length > 0 ? carts[0] : null
  );

  if (isUserLoading || isProductLoading || isCartLoading) {
    return <IsLoading />;
  }

  if (isUserError || isProductError || isCartError) {
    return <IsError />;
  }

  console.log('activeCart', activeCart);

  return (
    <Box sx={cls.container}>
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
          }}
          xs={3}
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

          {dataType === 'Carts' && (
            <CartList
              carts={carts}
              activeCart={activeCart}
              setActiveCart={setActiveCart}
            />
          )}
        </Grid>
        <Grid
          sx={{
            display: 'flex',
            alignItems: 'start',
            justifyContent: 'start',
          }}
          item
          xs={9}
        >
          {dataType === 'Users' && <UserCard user={activeUser} />}
          {dataType === 'Products' && <ProductCard product={activeProduct} />}
          {dataType === 'Carts' && <CartCard cart={activeCart} />}
        </Grid>
      </Grid>
    </Box>
  );
};
