import { all, fork, take } from 'redux-saga/effects';

import { SAVE_ERROR_MESSAGE, RESET_ERROR_MESSAGE } from 'src/actions/appActions';

export function* saveErrorMessage() {
  yield take(SAVE_ERROR_MESSAGE);
}

export function* resetErrorMessage() {
  yield take(RESET_ERROR_MESSAGE);
}

export default function* rootAppSaga() {
  yield all([fork(saveErrorMessage), fork(resetErrorMessage)]);
}
