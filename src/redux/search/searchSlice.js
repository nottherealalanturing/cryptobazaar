import { createSlice } from '@reduxjs/toolkit';

const option = {
  name: 'search',
  initialState: '',
  reducer: {},
};

const searchSlice = createSlice(option);

const { reducer, action } = searchSlice;

export const { setSearchTerm } = action;
export default reducer;
