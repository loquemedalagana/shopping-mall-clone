import { createAction } from '@reduxjs/toolkit';

export const LOAD__PRODUCT_DETAIL = 'LOAD__PRODUCT_DETAIL';
export const LOAD__PRODUCT_DETAIL__SUCCESS = 'LOAD__PRODUCT_DETAIL__SUCCESS';
export const LOAD__PRODUCT_DETAIL__FAIL = 'LOAD__PRODUCT_DETAIL__FAIL';

export const loadProductDetail = createAction(LOAD__PRODUCT_DETAIL, (productId) => {
  return {
    payload: {
      productId,
    },
  };
});

export const loadProductDetailSuccess = createAction(LOAD__PRODUCT_DETAIL__SUCCESS, data => {
  return {
    payload: {
      data,
    },
  };
});

export const loadProductDetailFail = createAction(LOAD__PRODUCT_DETAIL__FAIL, error => {
  return {
    payload: {
      error,
    },
  };
});
