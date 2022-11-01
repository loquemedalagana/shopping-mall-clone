import { all, fork, take } from 'redux-saga/effects';

import { SAVE__ERROR_MESSAGE, RESET__ERROR_MESSAGE } from 'src/actions/appActions';

export function* saveErrorMessage() {
  yield take(SAVE__ERROR_MESSAGE);
}

export function* resetErrorMessage() {
  yield take(RESET__ERROR_MESSAGE);
}

export default function* rootAppSaga() {
  yield all([fork(saveErrorMessage), fork(resetErrorMessage)]);
}
