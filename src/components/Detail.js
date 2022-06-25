import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectCrypto } from '../redux/crypto/cryptoSlice';
import styles from './styles/Detail.module.css';
import HistoryChart from './HistoryChart';

const Detail = () => {
  let coin;
  const { id } = useParams();
  const crypto = useSelector(selectCrypto);
  crypto.forEach((element) => {
    if (element.id === id) {
      coin = element;
    }
  });
  const changePer = `${parseFloat(coin.changePercent24Hr).toPrecision(3)}%`;
  return (
    <div className={styles.container}>
      <span className={styles.detail}>
        <img
          src={`https://assets.coincap.io/assets/icons/${coin.symbol.toLowerCase()}@2x.png`}
          className={styles.image}
          alt={coin.name}
        />
        <div className={styles.title}>
          <h1>{coin.name}</h1>
          <span>{`(Rank#${coin.rank})`}</span>
        </div>
      </span>

      <ul className={styles.list}>
        <li>{`Name: ${coin.name}`}</li>
        <li>{`Symbol: ${coin.symbol}`}</li>
        <li>
          {`Price(USD): ${new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD',
          }).format(coin.priceUsd)}`}
        </li>
        <li>{`Change(24Hr): ${changePer}`}</li>
      </ul>
      <HistoryChart id={id} />
    </div>
  );
};
export default Detail;
