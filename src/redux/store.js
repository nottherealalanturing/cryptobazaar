import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import cryptoReducer from './crypto/cryptoSlice';

const reducers = {
  cryptoReducer,
};

const store = configureStore({
  reducer: reducers,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export default store;
