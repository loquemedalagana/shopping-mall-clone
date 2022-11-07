import { createSlice } from '@reduxjs/toolkit';

import {
  removeCachedProductDetailData,
  cacheProductList,
  cacheProductDetail,
  removeCachedDataError,
  removeCachedProductListData,
} from 'src/actions/appActions';
import ProductListData from 'src/models/ProductListData';
import ProductDetailData from 'src/models/ProductDetailData';

export const initialState = {
  error: null,
  productList: null,
  productDetail: [],
};

const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(removeCachedProductListData, state => {
        return {
          ...state,
          productList: null,
        };
      })
      .addCase(removeCachedProductDetailData, (state, action) => {
        return {
          ...state,
          productDetail: state.productDetail.filter(data => data.data.id !== action.payload.productId),
        };
      })
      .addCase(removeCachedDataError, (state, action) => {
        return {
          ...state,
          error: action.payload.error,
        };
      })
      .addCase(cacheProductList, (state, action) => {
        const currentTime = new Date();
        return {
          ...state,
          productList: new ProductListData(action.payload.productList, currentTime),
        };
      })
      .addCase(cacheProductDetail, (state, action) => {
        const currentTime = new Date();
        return {
          ...state,
          productDetail: [...state.productDetail, new ProductDetailData(action.payload.productDetail, currentTime)],
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
