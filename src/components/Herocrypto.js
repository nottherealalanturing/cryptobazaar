import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styles from './styles/Herocrypto.module.css';

const Herocrypto = (props) => {
  const { name, value, url, symbol } = props;
  return (
    <Link to={`/currency/${url}`} className={styles.link}>
      <div
        className={styles.container}
        style={{
          backgroundImage: `url("https://cryptologos.cc/logos/${url}-${symbol}-logo.png?v=022")`,
        }}
      >
        <span className={styles.name}>{name}</span>
        <span className={styles.value}>
          {new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(value)}
        </span>
      </div>
    </Link>
  );
};

Herocrypto.propTypes = {
  name: PropTypes.string,
  value: PropTypes.string,
  url: PropTypes.string,
  symbol: PropTypes.string,
};

Herocrypto.defaultProps = {
  name: '',
  value: '',
  url: '',
  symbol: '',
};

export default Herocrypto;
