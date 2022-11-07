import { all, take, fork } from 'redux-saga/effects';

import * as appActions from 'src/actions/appActions';
import { readCachedData } from 'src/actions/appSaga';
import { mockedItemDetail, mockedItemDetail2 } from 'src/tests/__mocks__/mockedFetchedData';
import { createMockSessionStorage, createMockLocalStorage } from 'src/tests/__mocks__/mockStorage';

describe('to test app saga', () => {
  beforeEach(() => {
    createMockLocalStorage({});
    createMockSessionStorage({});
  });

  it('to test root saga', () => {
    // const rootGen = rootAppSaga();
    // expect(rootGen.next().value).toEqual(all([fork(saveErrorMessage), fork(resetErrorMessage)]));
  });

  afterEach(() => {
    sessionStorage.clear();
    localStorage.clear();
  });
});
