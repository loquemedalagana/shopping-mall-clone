import { createSlice } from '@reduxjs/toolkit';

import * as actions from 'src/actions/cartActions';

export const initialState = {
  count: 0,
  loading: false,
  error: null,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(actions.addCartRequest, (state, action) => {
        return {
          ...state,
          loading: true,
        };
      })
      .addCase(actions.addCartSuccess, (state, action) => {
        return {
          ...state,
          loading: false,
          count: action.payload.data.count,
        };
      })
      .addCase(actions.addCartFail, (state, action) => {
        return {
          ...state,
          loading: false,
          error: action.payload.error,
        };
      })
      .addDefaultCase(state => {
        return {
          ...state,
        };
      });
  },
});

export const cartReducer = cartSlice.reducer;

export const selectCartState = state => {
  return state.cart;
};
