import React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Typography from '@mui/material/Typography';
import { shorthenString } from '../../../utils/functions';
import ReactPaginate from 'react-paginate';
import { useState } from 'react';
import styles from '../data.module.scss';
import * as cls from './sytlesComponentsSx';

export const ProductList = ({ products,handleShowCart, activeProduct, setActiveProducts }) => {
  const [pageNumber, setPageNumber] = useState(0);
  const prodctsPerPage = 8;
  const pagesVisited = pageNumber * prodctsPerPage;
  const pageCount = Math.ceil(products.length / prodctsPerPage);
  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  const displayProducts = products
    ?.slice(pagesVisited, pagesVisited + prodctsPerPage)
    .map((product, i) => (
      <ListItem
        key={i}
        sx={{
          padding: 0,
          margin: 0,
        }}
        onClick={() => {
          handleShowCart();
        }}
      >
        <Typography
          sx={{
            color:
              activeProduct?.id === product?.id
                ? 'primary.dark'
                : 'secondary.dark',
            fontSize: '1.3rem',
            textAlign: 'start',
            backgroundColor:
              activeProduct?.id === product?.id
                ? 'secondary.dark'
                : 'transparent',
            width: '100%',
            padding: '10px 30px',
            margin: 0,
            border: '1px solid',
            borderColor: 'secondary.dark',
            borderRadius: '5px',

            cursor: 'pointer',
            '&:hover': {
              color: 'primary.dark',
            },
          }}
          onClick={() => setActiveProducts(product)}
        >
          {product.id}. {shorthenString(product.title, 3)}
        </Typography>
      </ListItem>
    ));

  return (
    <List sx={cls.list}>
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
