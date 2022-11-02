import { createAction } from '@reduxjs/toolkit';

export const FETCH__PRODUCT_LIST = 'FETCH__PRODUCT_LIST';
export const GET__PRODUCT_LIST = 'GET__PRODUCT_LIST';

export const FETCH_PRODUCT_LIST__SUCCESS = 'FETCH_PRODUCT_LIST__SUCCESS';
export const FETCH_PRODUCT_LIST__FAIL = 'FETCH_PRODUCT_LIST__FAIL';

export const PRODUCT_LIST__LOADING = 'PRODUCT_LIST__LOADING';

export const GET__PRODUCT_LIST__PER_PAGE = 'GET__PRODUCT_LIST__PER_PAGE';
export const GET__REACHED_END = 'GET__REACHED_END';

export const fetchProductList = createAction(FETCH__PRODUCT_LIST);
export const getProductList = createAction(GET__PRODUCT_LIST);

export const fetchProductListSuccess = createAction(FETCH_PRODUCT_LIST__SUCCESS, data => {
  return {
    payload: data,
  };
});
export const fetchProductListFail = createAction(FETCH_PRODUCT_LIST__FAIL, error => {
  return {
    payload: {
      error,
    },
  };
});

export const productListLoading = createAction(PRODUCT_LIST__LOADING);

export const getProductListPerPage = createAction(GET__PRODUCT_LIST__PER_PAGE);
export const getReachedEnd = createAction(GET__REACHED_END);
