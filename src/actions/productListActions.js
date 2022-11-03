import { createAction } from '@reduxjs/toolkit';

export const LOAD__PRODUCT_LIST = 'LOAD__PRODUCT_LIST';
export const LOAD__PRODUCT_LIST__SUCCESS = 'LOAD__PRODUCT_LIST__SUCCESS';
export const LOAD__PRODUCT_LIST__FAIL = 'LOAD__PRODUCT_LIST__FAIL';

export const GET__REACHED_END = 'GET__REACHED_END';

export const SEARCH__PRODUCT_MODEL = 'SEARCH__PRODUCT_MODEL';
export const SEARCH__PRODUCT_BRAND = 'SEARCH__PRODUCT_BRAND';
export const SEARCH__PRODUCT_PRICE = 'SEARCH__PRODUCT_PRICE';

export const UPDATE__PRODUCT_LIST = 'UPDATE__PRODUCT_LIST';
export const UPDATE__PRODUCT_LIST__SUCCESS = 'UPDATE__PRODUCT_LIST__SUCCESS';
export const UPDATE__PRODUCT_LIST__FAIL = 'UPDATE__PRODUCT_LIST__FAIL';

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

export const searchProductModel = createAction(SEARCH__PRODUCT_MODEL, model => {
  return {
    payload: {
      model,
    },
  };
});

export const searchProductBrand = createAction(SEARCH__PRODUCT_BRAND, brand => {
  return {
    payload: {
      brand,
    },
  };
});

export const searchPriceRange = createAction(SEARCH__PRODUCT_PRICE, ({ max, min }) => {
  return {
    payload: {
      price: {
        max,
        min,
      },
    },
  };
});

export const updateProductList = createAction(UPDATE__PRODUCT_LIST);

export const updateProductListSuccess = createAction(UPDATE__PRODUCT_LIST__SUCCESS, data => {
  return {
    payload: {
      data,
    },
  };
});

export const updateProductListFail = createAction(UPDATE__PRODUCT_LIST__FAIL, error => {
  return {
    payload: {
      error,
    },
  };
});
