import React, { useState } from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import { Typography, Box } from '@mui/material';
import { capFirstLetter } from '../../../utils/functions';
import ReactPaginate from 'react-paginate';
import styles from '../data.module.scss';
import * as cls from './sytlesComponentsSx';

export const UserList = ({
  handleShowCart,
  users,
  activeUser,
  setActiveUser,
}) => {
  const [pageNumber, setPageNumber] = useState(0);
  const usersPerPage = 8;
  const pagesVisited = pageNumber * usersPerPage;
  const pageCount = Math.ceil(users.length / usersPerPage);
  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  const displayesUsers = users
    ?.slice(pagesVisited, pagesVisited + usersPerPage)
    .map((user, i) => (
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
              activeUser?.id === user?.id ? 'primary.dark' : 'secondary.dark',
            fontSize: '1.3rem',
            textAlign: 'start',
            backgroundColor:
              activeUser?.id === user?.id ? 'secondary.dark' : 'transparent',
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
          onClick={() => setActiveUser(user)}
        >
          {capFirstLetter(user.name.firstname)}{' '}
          {capFirstLetter(user.name.lastname)}
        </Typography>
      </ListItem>
    ));

  return (
    <List sx={cls.list}>
      <Box>
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
      </Box>

      {displayesUsers}
    </List>
  );
};
