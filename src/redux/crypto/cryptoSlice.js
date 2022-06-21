import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

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
  reducer: {
    placeholder: () => {},
  },
  extraReducers: {
    [getData.fulfilled]: (state, action) => action.payload,
  },
};

const cryptoSlice = createSlice(options);

const { actions, reducer } = cryptoSlice;
export const { add } = actions;
export default reducer;
