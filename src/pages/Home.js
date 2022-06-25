import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Crypto, Herocrypto } from '../components';
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
      <Herocrypto
        name="Bitcoin"
        id="bitcoin"
        url="bitcoin"
        symbol="btc"
        value="20827.4673277614199303"
      />
      <span>Stats by Rank</span>
      <div className="cryptoList">
        {cryptoList.slice(1).map((crypto) => (
          <Crypto
            name={crypto.name}
            id={crypto.id}
            url={crypto.id}
            symbol={crypto.symbol.toLowerCase()}
            value={crypto.priceUsd}
            key={crypto.id}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;
