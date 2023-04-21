import React, { useState } from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Typography from '@mui/material/Typography';
import { capFirstLetter } from '../../../utils/functions';
import ReactPaginate from 'react-paginate';
import styles from '../data.module.scss';

export const UserList = ({ users, activeUser, setActiveUser }) => {
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
      >
        <Typography
          sx={{
            color:
              activeUser?.id === user?.id ? 'primary.dark' : 'secondary.dark',
            fontSize: '1.3rem',
            textAlign: 'start',
            backgroundColor:
              activeUser?.id === user?.id
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
          onClick={() => setActiveUser(user)}
        >
          {capFirstLetter(user.name.firstname)}{' '}
          {capFirstLetter(user.name.lastname)}
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
      {displayesUsers}
    </List>
  );
};
