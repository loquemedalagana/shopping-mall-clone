import { createAction } from '@reduxjs/toolkit';

export const READ__CACHED_DATA = 'READ__CACHED_DATA';
export const REMOVE__CACHED_DATA = 'REMOVE__CACHED_DATA';

export const CACHE__PRODUCT_LIST = 'CACHE__PRODUCT_LIST';
export const CACHE__PRODUCT_DETAIL = 'CACHE__PRODUCT_DETAIL';

export const readCachedData = createAction(READ__CACHED_DATA);
export const removeCachedData = createAction(REMOVE__CACHED_DATA, productId => {
  return {
    payload: {
      productId,
    },
  };
});

export const cacheProductList = createAction(CACHE__PRODUCT_LIST, productList => {
  return {
    payload: {
      productList,
    }
  }
})

export const cacheProductDetail = createAction(CACHE__PRODUCT_DETAIL, productDetail => {
  return {
    payload: {
      productDetail,
    }
  }
})