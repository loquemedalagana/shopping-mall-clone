import { createSlice } from '@reduxjs/toolkit';

import { readCachedData, removeCachedData } from 'src/actions/appActions';

export const initialState = {
  error: null,
};

const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addDefaultCase(state => {
        return state;
      });
  },
});

export const appReducer = appSlice.reducer;

export const selectAppState = state => {
  return state.app;
};
