import { createSlice } from '@reduxjs/toolkit';

import * as actions from 'src/actions/productDetailActions';

export const initialState = {
  productId: undefined,
  data: null,
  loading: false,
  error: null,
};

const productDetailSlice = createSlice({
  name: 'product-detail',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(actions.loadProductDetail, (state, action) => {
        return {
          ...state,
          loading: true,
          productId: action.payload.productId,
        };
      })
      .addCase(actions.loadProductDetailSuccess, (state, action) => {
        return {
          ...state,
          loading: false,
          data: action.payload.data,
        };
      })
      .addCase(actions.loadProductDetailFail, (state, action) => {
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

export const productDetailReducer = productDetailSlice.reducer;

export const selectProductDetailState = state => {
  return state.productDetail;
};
