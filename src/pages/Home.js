import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getData } from '../redux/crypto/cryptoSlice';

const Home = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getData());
  }, []);

  return <div>home</div>;
};

export default Home;
