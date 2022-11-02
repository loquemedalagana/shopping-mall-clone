import { createSlice } from '@reduxjs/toolkit';

import * as actions from 'src/actions/productListActions';

export const PRODUCTS_COUNT__PER_PAGE = 4;

export const initialState = {
  data: [],
  currentData: [],
  page: 0,
  error: null,
  loading: false,
  isReachedEnd: false,
};

const productListSlice = createSlice({
  name: 'product-list',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(actions.fetchProductList, state => {
        return {
          ...state,
          loading: true,
          error: null,
          currentData: [],
          page: 0,
          isReachedEnd: false,
        };
      })
      .addCase(actions.getProductList, state => {
        return {
          ...state,
          loading: true,
          error: null,
          isReachedEnd: false,
        };
      })
      .addCase(actions.productListLoading, state => {
        return {
          ...state,
          loading: true,
          error: null,
        };
      })
      .addCase(actions.fetchProductListSuccess, (state, action) => {
        return {
          ...state,
          data: action.payload.data,
          loading: false,
          error: null,
        };
      })
      .addCase(actions.fetchProductListFail, (state, action) => {
        return {
          ...state,
          loading: false,
          error: action.payload.error,
        };
      })
      .addCase(actions.getProductListPerPage, state => {
        const currentPage = state.page;
        return {
          ...state,
          loading: false,
          currentData: [
            ...state.currentData,
            ...state.data.slice(
              currentPage * PRODUCTS_COUNT__PER_PAGE,
              currentPage * PRODUCTS_COUNT__PER_PAGE + PRODUCTS_COUNT__PER_PAGE,
            ),
          ],
          page: currentPage + 1,
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
