import { createSlice } from '@reduxjs/toolkit';

import { saveErrorMessage, resetErrorMessage } from 'src/actions/appActions';

export const initialState = {
  error: null,
};

const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(saveErrorMessage, (state, action) => {
        return {
          ...state,
          error: action.payload.error,
        };
      })
      .addCase(resetErrorMessage, state => {
        return {
          ...state,
          error: null,
        };
      })
      .addDefaultCase(state => {
        return state;
      });
  },
});

export const appReducer = appSlice.reducer;

export const selectAppState = state => {
  return state.app;
};
