import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FcSearch } from 'react-icons/fc';
import { selectSearchTerm, setSearchTerm } from '../redux/search/searchSlice';
import styles from './styles/Search.module.css';

const Search = () => {
  const dispatch = useDispatch();
  const searchTerm = useSelector(selectSearchTerm);

  const onSearchChangeHandler = (e) => {
    dispatch(setSearchTerm(e.target.value));
  };

  return (
    <span className={styles.searchNav}>
      <input
        className={styles.searchInput}
        id="search"
        type="text"
        value={searchTerm}
        onChange={onSearchChangeHandler}
        placeholder="Search Coin"
      />
      <FcSearch className={styles.searchLogo} />
    </span>
  );
};

export default Search;
