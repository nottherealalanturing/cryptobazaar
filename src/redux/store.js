import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import cryptoReducer from './crypto/cryptoSlice';
import searchReducer from './search/searchSlice';

const reducers = {
  crypto: cryptoReducer,
  search: searchReducer,
};

const store = configureStore({
  reducer: reducers,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export default store;
