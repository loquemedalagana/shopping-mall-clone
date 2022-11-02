import { createSlice } from '@reduxjs/toolkit';

import * as actions from 'src/actions/productListActions';

export const PRODUCTS_COUNT__PER_PAGE = 4;

export const initialState = {
  data: [],
  page: 0,
  searchKeyword: undefined,
  fetchedTime: undefined,
  error: null,
  loading: false,
  isReachedEnd: false,
};

const productListSlice = createSlice({
  name: 'product-list',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(actions.loadProductList, state => {
        return {
          ...state,
          loading: true,
        };
      })
      .addCase(actions.loadProductListSuccess, (state, action) => {
        return {
          ...state,
          page: state.page + 1,
          loading: false,
          data: [...state.data, ...action.payload.data],
        };
      })
      .addCase(actions.loadProductListFail, (state, action) => {
        return {
          ...state,
          loading: false,
          error: action.payload.error,
        };
      })
      .addCase(actions.getReachedEnd, state => {
        return {
          ...state,
          isReachedEnd: true,
        };
      })
      .addDefaultCase(state => {
        return state;
      });
  },
});

export const productListReducer = productListSlice.reducer;

export const selectProductListState = state => {
  return state.productList;
};
