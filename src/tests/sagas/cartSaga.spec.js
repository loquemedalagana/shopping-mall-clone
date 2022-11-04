import { expectSaga } from 'redux-saga-test-plan';
import { throwError } from 'redux-saga-test-plan/providers';
import * as matchers from 'redux-saga-test-plan/matchers';

import { restApiAddToCart } from 'src/http/api';
import * as actions from 'src/actions/cartActions';
import { addProductToCart } from 'src/actions/cartSaga';
import { definedMockedItemDetail } from 'src/tests/__mocks__/mockedItemDetail';

describe('cart saga test', () => {
  const sampleError = new Error('some error occurred');

  it('should catch error if fails', async () => {
    const res = await expectSaga(addProductToCart, { id: 'abc', colorCode: 1000, storageCode: 202 })
      .provide([[matchers.call.fn(restApiAddToCart), throwError(sampleError)]])
      .put(actions.addCartFail(sampleError))
      .run();
  });

  it('should receive data if success', async () => {
    const res = await expectSaga(addProductToCart, {
      id: definedMockedItemDetail.id,
      colorCode: definedMockedItemDetail.options.colors[0].code,
      storageCode: definedMockedItemDetail.options.storages[0].code,
    })
      .provide([[matchers.call.fn(restApiAddToCart), { count: 2 }]])
      .put(actions.addCartSuccess({ count: 2 }))
      .run();
  });
});
