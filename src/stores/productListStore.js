import { createSlice } from '@reduxjs/toolkit';

import * as actions from 'src/actions/productListActions';

export const PRODUCTS_COUNT__PER_PAGE = 4;

export const initialState = {
  data: [],
  page: 0,
  searchOptions: undefined,
  searchKeyword: {
    price: undefined,
    brand: undefined,
    model: undefined,
  },
  isSearchInputError: false,
  fetchedTime: undefined,
  error: null,
  loading: false,
  isReachedEnd: false,
  isUpdating: false,
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
      .addCase(actions.loadSearchOptions, (state, action) => {
        return {
          ...state,
          searchOptions: action.payload.searchOptions,
        };
      })
      .addCase(actions.updateProductList, state => {
        return {
          ...state,
          loading: true,
          isReachedEnd: false,
          error: null,
          data: [],
          page: 0,
          isUpdating: true,
        };
      })
      .addCase(actions.searchProductModel, (state, action) => {
        return {
          ...state,
          searchKeyword: {
            ...state.searchKeyword,
            model: action.payload.model,
          },
        };
      })
      .addCase(actions.searchProductBrand, (state, action) => {
        return {
          ...state,
          searchKeyword: {
            ...state.searchKeyword,
            brand: action.payload.brand,
          },
        };
      })
      .addCase(actions.searchPriceRange, (state, action) => {
        return {
          ...state,
          searchKeyword: {
            ...state.searchKeyword,
            price: action.payload.price,
          },
        };
      })
      .addCase(actions.loadProductListSuccess, (state, action) => {
        return {
          ...state,
          page: state.page + 1,
          loading: false,
          isUpdating: false,
          data: [...state.data, ...action.payload.data],
        };
      })
      .addCase(actions.loadProductListFail, (state, action) => {
        return {
          ...state,
          loading: false,
          isUpdating: false,
          error: action.payload.error,
        };
      })
      .addCase(actions.getReachedEnd, state => {
        return {
          ...state,
          isReachedEnd: true,
        };
      })
      .addCase(actions.setSearchInputError, (state, action) => {
        return {
          ...state,
          isSearchInputError: action.payload.isSearchInputError,
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
