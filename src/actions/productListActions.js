import { createAction } from '@reduxjs/toolkit';

export const FETCH__PRODUCT_LIST = 'FETCH__PRODUCT_LIST';
export const GET__PRODUCT_LIST = 'GET__PRODUCT_LIST';

export const PRODUCT_LIST__LOADING = 'PRODUCT_LIST__LOADING';
export const PRODUCT_LIST__SUCCESS = 'PRODUCT_LIST__SUCCESS';
export const PRODUCT_LIST__FAIL = 'PRODUCT_LIST__FAIL';

export const LOAD__PRODUCT_LIST__PER_PAGE = 'LOAD__PRODUCT_LIST__PER_PAGE';

export const fetchProductList = createAction(FETCH__PRODUCT_LIST);
export const getProductList = createAction(GET__PRODUCT_LIST);

export const productListLoading = createAction(PRODUCT_LIST__LOADING);
export const productListSuccess = createAction(PRODUCT_LIST__SUCCESS);
export const productListFail = createAction(PRODUCT_LIST__FAIL);

export const loadProductListPerPage = createAction(LOAD__PRODUCT_LIST__PER_PAGE);
