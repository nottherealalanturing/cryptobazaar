import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { MdArrowForward } from 'react-icons/md';
import styles from './styles/Crypto.module.css';

const Crypto = (props) => {
  const { name, value, url, symbol } = props;
  return (
    <Link to={`/currency/${url}`} className={styles.link}>
      <div
        className={styles.container}
        style={{
          backgroundImage:
            `url("https://cryptologos.cc/logos/${url}-${symbol}-logo.png?v=022")` ||
            url('https://cryptologos.cc/logos/bitcoin-btc-logo.png?v=022'),
        }}
      >
        <MdArrowForward />
        <span className={styles.name}>{name}</span>
        <span className={styles.value}>{value}</span>
      </div>
    </Link>
  );
};

Crypto.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  symbol: PropTypes.string.isRequired,
};

export default Crypto;
