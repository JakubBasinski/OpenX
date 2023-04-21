import React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Typography from '@mui/material/Typography';
import { shorthenString } from '../../../utils/functions';
import ReactPaginate from 'react-paginate';
import { useState } from 'react';
import styles from '../data.module.scss';

export const CartList = ({ carts, activeCart, setActiveCart }) => {
  const [pageNumber, setPageNumber] = useState(0);
  const cartsPerPage = 8;
  const pagesVisited = pageNumber * cartsPerPage;
  const pageCount = Math.ceil(carts.length / cartsPerPage);
  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  const displayProducts = carts
    ?.slice(pagesVisited, pagesVisited + cartsPerPage)
    .map((cart, i) => (
      <ListItem
        key={i}
        sx={{
          padding: 0,
          margin: 0,
        }}
      >
        <Typography
          sx={{
            color:
              activeCart?.id === cart?.id ? 'primary.dark' : 'secondary.dark',
            fontSize: '1.3rem',
            textAlign: 'start',
            backgroundColor:
              activeCart?.id === cart?.id
                ? 'secondary.dark'
                : 'rgba(0, 0, 0, 0.9)',
            backdropFilter: blur('2px'),
            width: '100%',
            padding: '10px 30px',
            margin: 0,
            borderRadius: '5px',
            transition:
              'color 0.3s ease-in-out, background-color 0.5s ease-in-out',
            cursor: 'pointer',
            '&:hover': {
              color: 'primary.dark',
            },
          }}
          onClick={() => setActiveCart(cart)}
        >
          Cart {cart.id}
        </Typography>
      </ListItem>
    ));

  return (
    <List
      sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: '10px',
      }}
    >
      {pageCount < 2 ? null : (
        <ReactPaginate
          previousLabel={'Previous'}
          nextLabel={'Next'}
          pageCount={pageCount}
          onPageChange={changePage}
          containerClassName={styles.paginationBttns}
          disabledClassName={styles.paginationDisabled}
          activeClassName={styles.paginationActive}
        />
      )}

      {displayProducts}
    </List>
  );
};