import { all, take, fork } from 'redux-saga/effects';

import * as appActions from 'src/actions/appActions';
import { readCachedData } from 'src/actions/appSaga';
import { saveFetchedProductDetailData } from 'src/models/ProductDetailData';
import { mockedItemDetail, mockedItemDetail2 } from 'src/tests/__mocks__/mockedFetchedData';
import { createMockSessionStorage } from 'src/tests/__mocks__/mockStorage';

describe('to test app saga', () => {
  beforeEach(() => {
    createMockSessionStorage({});
    saveFetchedProductDetailData(mockedItemDetail);
    saveFetchedProductDetailData(mockedItemDetail2);
  });

  it('to test root saga', () => {
    // const rootGen = rootAppSaga();
    // expect(rootGen.next().value).toEqual(all([fork(saveErrorMessage), fork(resetErrorMessage)]));
  });

  afterEach(() => {
    sessionStorage.clear();
  });
});
