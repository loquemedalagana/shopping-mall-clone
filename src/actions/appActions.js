import { createAction } from '@reduxjs/toolkit';

export const READ__CACHED_DATA = 'READ__CACHED_DATA';
export const REMOVE__CACHED_DATA = 'REMOVE__CACHED_DATA';

export const readCachedData = createAction(READ__CACHED_DATA);
export const removeCachedData = createAction(REMOVE__CACHED_DATA, productId => {
  return {
    payload: {
      productId,
    },
  };
});
