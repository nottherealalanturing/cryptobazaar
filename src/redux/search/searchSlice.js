import { createSlice } from '@reduxjs/toolkit';

const options = {
  name: 'search',
  initialState: '',
  reducers: {
    setSearchTerm: (state, action) => action.payload,
  },
};

const searchSlice = createSlice(options);

export const selectSearchTerm = (state) => state.search;
export const { setSearchTerm } = searchSlice.actions;
export default searchSlice.reducer;
