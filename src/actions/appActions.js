import { createAction } from '@reduxjs/toolkit';

export const SAVE_ERROR_MESSAGE = 'SAVE__ERROR_MESSAGE';
export const RESET_ERROR_MESSAGE = 'RESTORE__ERROR_MESSAGE';

export const saveErrorMessage = createAction(SAVE_ERROR_MESSAGE);
export const resetErrorMessage = createAction(RESET_ERROR_MESSAGE);
