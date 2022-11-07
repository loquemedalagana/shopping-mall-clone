import { createSlice } from '@reduxjs/toolkit';

import { readCachedData, removeCachedData, cacheProductList, cacheProductDetail } from 'src/actions/appActions';
import ProductListData from 'src/models/ProductListData';
import ProductDetailData from 'src/models/ProductDetailData';
import { ONE_HOUR } from 'src/models/constants';
import { isTest } from 'src/env';

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
      .addCase(cacheProductList, (state, action) => {
        const currentTime = new Date();
        const expiredTimeForTest = new Date(new Date().getTime() - (ONE_HOUR + 10));
        return {
          ...state,
          productList: new ProductListData(action.payload.productList, isTest() ? expiredTimeForTest : currentTime),
        };
      })
      .addCase(cacheProductDetail, (state, action) => {
        const currentTime = new Date();
        const expiredTimeForTest = new Date(new Date().getTime() - (ONE_HOUR + 10));
        return {
          ...state,
          productDetail: [
            ...state.productDetail,
            new ProductDetailData(action.payload.productDetail, isTest() ? expiredTimeForTest : currentTime),
          ],
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
