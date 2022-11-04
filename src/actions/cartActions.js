import { createAction } from '@reduxjs/toolkit';

export const ADD_CART__REQUEST = 'ADD_CART__REQUEST';
export const ADD_CART__SUCCESS = 'ADD_CART__SUCCESS';
export const ADD_CART__FAIL = 'ADD_CART__FAIL';

export const addCartRequest = createAction(ADD_CART__REQUEST, ({ id, colorCode, storageCode }) => {
  return {
    payload: {
      id,
      colorCode,
      storageCode,
    },
  };
});

export const addCartSuccess = createAction(ADD_CART__SUCCESS, ({ count }) => {
  return {
    payload: {
      data: {
        count,
      },
    },
  };
});

export const addCartFail = createAction(ADD_CART__FAIL, error => {
  return {
    payload: {
      error,
    },
  };
});
