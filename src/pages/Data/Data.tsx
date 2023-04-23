import React, { useState, useEffect } from 'react';
import { Box } from '@mui/material';
import { Grid } from '@mui/material';
import { CustomSelect } from './components/CustomSelect';
import { IsLoading } from './components/IsLoading';
import { IsError } from './components/isError';
import { UserCard } from './components/UserCard';
import { ProductCard } from './components/ProductCard';
import { CartCard } from './components/CartCard';
import { CartList } from './components/CartList';
import { ProductList } from './components/ProductList';
import { UserList } from './components/UserList';
import { useProductData } from '../../hooks/useProductData';
import { useUserData } from '../../hooks/useUserData';
import { useCartData } from '../../hooks/useCartsData';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import * as cls from './stylesSx';

export const Data = () => {
  const [showList, setShowList] = useState(true);
  const [showCart, setShowCart] = useState(false);
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('md'));

  useEffect(() => {
    if (!isSmallScreen) {
      setShowList(true);
      setShowCart(true);
    }
  }, [isSmallScreen]);

  const [dataType, setDataType] = useState<string | number>('Users');
  const [open, setOpen] = useState(false);
  const handleChange = (event: SelectChangeEvent<typeof dataType>) => {
    setDataType(event.target.value);
    handleShowList();
  };

  const handleShowCart = () => {
    setShowList(false);
    setShowCart(true);
  };

  const handleShowList = () => {
    setShowList(true);
    setShowCart(false);
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
          height: '15%',
          width: '100%',
        }}
      >
        <CustomSelect
          dataType={dataType}
          handleChange={handleChange}
          open={open}
          handleOpen={handleOpen}
          handleClose={handleClose}
          handleShowList={handleShowList}
        />
      </Grid>

      <Grid
        container
        sx={{
          overflow: 'scroll',
          height: '85%',
          display: 'flex',
          paddingTop: '20px'
        }}
      >
        {(!showCart || !isSmallScreen) && (
          <Grid
            item
            sx={{
              overflow: 'scroll',
              display: 'flex',
              justifyContent: 'center',
              height: '100%',
            }}
            xs={12}
            md={6}
            lg={4}
          >
            {dataType === 'Users' && (
              <UserList
                handleShowCart={handleShowCart}
                users={users}
                activeUser={activeUser}
                setActiveUser={setActiveUser}
                
              />
            )}

            {dataType === 'Products' && (
              <ProductList
                handleShowCart={handleShowCart}
                products={products}
                activeProduct={activeProduct}
                setActiveProducts={setActiveProducts}
              />
            )}

            {dataType === 'Carts' && (
              <CartList
                handleShowCart={handleShowCart}
                carts={carts}
                activeCart={activeCart}
                setActiveCart={setActiveCart}
              />
            )}
          </Grid>
        )}

        {(!showList || !isSmallScreen) && (
          <Grid
            sx={(theme) => ({
              display: 'flex',
              alignItems: 'start',
              justifyContent: 'start',
              [theme.breakpoints.down('md')]: {
                justifyContent: 'center',
              },
              padding: '20px'
            })}
            item
            xs={12}
            md={6}
            lg={8}
          >
            {dataType === 'Users' && (
              <UserCard
                user={activeUser}
                handleShowList={handleShowList}
                isSmallScreen={isSmallScreen}
                showButtom={showList}
              />
            )}
            {dataType === 'Products' && (
              <ProductCard
                product={activeProduct}
                handleShowList={handleShowList}
                isSmallScreen={isSmallScreen}
                showButtom={showList}
              />
            )}
            {dataType === 'Carts' && (
              <CartCard
                cart={activeCart}
                handleShowList={handleShowList}
                isSmallScreen={isSmallScreen}
                showButtom={showList}
              />
            )}
          </Grid>
        )}
      </Grid>
    </Box>
  );
};
