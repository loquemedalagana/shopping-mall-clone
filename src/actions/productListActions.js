import { createAction } from '@reduxjs/toolkit';

export const LOAD__PRODUCT_LIST = 'LOAD__PRODUCT_LIST';
export const LOAD__PRODUCT_LIST__SUCCESS = 'LOAD__PRODUCT_LIST__SUCCESS';
export const LOAD__PRODUCT_LIST__FAIL = 'LOAD__PRODUCT_LIST__FAIL';

export const GET__REACHED_END = 'GET__REACHED_END';

export const loadProductList = createAction(LOAD__PRODUCT_LIST);

export const loadProductListSuccess = createAction(LOAD__PRODUCT_LIST__SUCCESS, data => {
  return {
    payload: {
      data,
    },
  };
});
export const loadProductListFail = createAction(LOAD__PRODUCT_LIST__FAIL, error => {
  return {
    payload: {
      error,
    },
  };
});

export const getReachedEnd = createAction(GET__REACHED_END);
