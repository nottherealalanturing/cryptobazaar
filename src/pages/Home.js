import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Crypto } from '../components';
import { getData, selectFilteredCrypto } from '../redux/crypto/cryptoSlice';
import '../index.css';

const Home = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getData());
  }, []);
  const cryptoList = useSelector(selectFilteredCrypto);

  return (
    <div>
      <div className="hero">HERO IMAGE</div>
      <span>CRYPTO LIST</span>
      <div className="cryptoList">
        {cryptoList.map((crypto) => (
          <Crypto
            name={crypto.name}
            id={crypto.id}
            url={crypto.id}
            value={crypto.priceUsd}
            key={crypto.id}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;
