import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { selectSearchTerm } from '../search/searchSlice';

axios.defaults.baseURL = 'https://api.coincap.io/v2/assets';

/* axios.defaults.headers.common['Authorization'] = process.env.TOKEN; */
/* const baseURL = 'https://api.coincap.io/v2/assets'; */

export const getData = createAsyncThunk('crpto/getData', async () => {
  const response = await axios.get();
  return response.data.data;
});

const options = {
  name: 'crypto',
  initialState: [],
  reducer: {},
  extraReducers: {
    [getData.fulfilled]: (state, action) => action.payload,
  },
};

const cryptoSlice = createSlice(options);

export const selectCrypto = (state) => state.crypto;
export const selectFilteredCrypto = (state) => {
  const allCrypto = selectCrypto(state);
  const searchTerm = selectSearchTerm(state);

  return allCrypto.filter((crypto) => crypto.id.toLowerCase().includes(searchTerm.toLowerCase()));
};

const { reducer } = cryptoSlice;
export default reducer;
