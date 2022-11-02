import { createAction } from '@reduxjs/toolkit';

export const SAVE__ERROR_MESSAGE = 'SAVE__ERROR_MESSAGE';
export const RESET__ERROR_MESSAGE = 'RESTORE__ERROR_MESSAGE';

export const saveErrorMessage = createAction(SAVE__ERROR_MESSAGE, error => {
  return {
    payload: {
      error,
    },
  };
});
export const resetErrorMessage = createAction(RESET__ERROR_MESSAGE);
