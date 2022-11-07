import { select } from 'redux-saga/effects';
import { expectSaga } from 'redux-saga-test-plan';

import * as actions from 'src/actions/appActions';
import { readCachedData } from 'src/actions/appSaga';
import { selectAppState, initialState } from 'src/stores/appStore';
import { mockedItemDetail, mockedItemDetail2 } from 'src/tests/__mocks__/mockedFetchedData';
import { createMockSessionStorage, createMockLocalStorage } from 'src/tests/__mocks__/mockStorage';
import getMockedAppState from 'src/tests/__mocks__/getMockedAppState';

describe('to test app saga', () => {
  const notExpiredAppState = getMockedAppState();
  const expiredAppState = getMockedAppState(true);
  beforeEach(() => {
    createMockLocalStorage({});
    createMockSessionStorage({});
  });

  it('should remove expired data', () => {
    const res = expectSaga(readCachedData)
      .provide([[select(selectAppState), expiredAppState]])
      .put(actions.removeCachedProductDetailData(mockedItemDetail.id))
      .put(actions.removeCachedProductDetailData(mockedItemDetail2.id))
      .put(actions.removeCachedProductListData())
      .hasFinalState(initialState)
      .run();
  });

  it('should not remove expired data', () => {
    const res = expectSaga(readCachedData)
      .provide([[select(selectAppState), notExpiredAppState]])
      .hasFinalState(notExpiredAppState)
      .run();
  });

  afterEach(() => {
    sessionStorage.clear();
    localStorage.clear();
  });
});
