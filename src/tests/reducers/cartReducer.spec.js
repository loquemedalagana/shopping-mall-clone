import * as actions from 'src/actions/cartActions';
import { cartReducer, initialState } from 'src/stores/cartStore';
import { definedMockedItemDetail } from 'src/tests/__mocks__/mockedItemDetail';

describe('cart reducer test', () => {
  const sampleError = new Error('some error occurred');
  it('get initial state', () => {
    expect(cartReducer(undefined, { type: undefined })).toEqual(initialState);
  });

  it('after the request', () => {
    expect(
      cartReducer(
        initialState,
        actions.addCartRequest({
          id: definedMockedItemDetail.id,
          colorCode: definedMockedItemDetail.options.colors[0].code,
          storageCode: definedMockedItemDetail.options.storages[0].code,
        }),
      ),
    ).toEqual({
      ...initialState,
      loading: true,
    });
  });

  it('should receive error', () => {
    expect(
      cartReducer(
        {
          ...initialState,
          loading: true,
        },
        actions.addCartFail(sampleError),
      ),
    ).toEqual({
      ...initialState,
      loading: false,
      error: sampleError,
    });
  });

  it('should be success', () => {
    expect(
      cartReducer(
        {
          ...initialState,
          loading: true,
        },
        actions.addCartSuccess({ count: 2 }),
      ),
    ).toEqual({
      ...initialState,
      loading: false,
      count: initialState.count + 2,
    });
  });
});
