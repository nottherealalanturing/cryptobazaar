import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { MdArrowForward } from 'react-icons/md';
import styles from './styles/Crypto.module.css';

const Crypto = (props) => {
  const { name, value, url } = props;
  return (
    <div className={styles.container}>
      <Link to={`/${url}`}>
        <MdArrowForward />
      </Link>
      <span>{name}</span>
      <span>{value}</span>
    </div>
  );
};

Crypto.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};

export default Crypto;
