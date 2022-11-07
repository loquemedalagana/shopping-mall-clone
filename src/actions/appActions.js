import { createAction } from '@reduxjs/toolkit';

export const READ__CACHED_PRODUCT_DETAIL_DATA = 'READ__CACHED_PRODUCT_DETAIL_DATA';
export const REMOVE__CACHED_PRODUCT_DETAIL_DATA = 'REMOVE__CACHED_PRODUCT_DETAIL_DATA';

export const READ__CACHED_PRODUCT_LIST_DATA = 'READ__CACHED_PRODUCT_LIST_DATA';
export const REMOVE__CACHED_PRODUCT_LIST_DATA = 'REMOVE__CACHED_PRODUCT_LIST_DATA';

export const REMOVE__CACHED_DATA__ERROR = 'REMOVE__CACHED_DATA__ERROR';

export const CACHE__PRODUCT_LIST = 'CACHE__PRODUCT_LIST';
export const CACHE__PRODUCT_DETAIL = 'CACHE__PRODUCT_DETAIL';

export const readCachedProductListData = createAction(READ__CACHED_PRODUCT_LIST_DATA);
export const removeCachedProductListData = createAction(REMOVE__CACHED_PRODUCT_LIST_DATA);

export const readCachedProductDetailData = createAction(READ__CACHED_PRODUCT_DETAIL_DATA);

export const removeCachedProductDetailData = createAction(REMOVE__CACHED_PRODUCT_DETAIL_DATA, productId => {
  return {
    payload: {
      productId,
    },
  };
});

export const removeCachedDataError = createAction(REMOVE__CACHED_DATA__ERROR, e => {
  return {
    payload: {
      error: e,
    },
  };
});

export const cacheProductList = createAction(CACHE__PRODUCT_LIST, productList => {
  return {
    payload: {
      productList,
    },
  };
});

export const cacheProductDetail = createAction(CACHE__PRODUCT_DETAIL, productDetail => {
  return {
    payload: {
      productDetail,
    },
  };
});
