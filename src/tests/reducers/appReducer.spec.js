import * as actions from 'src/actions/appActions';
import { appReducer, initialState } from 'src/stores/appStore';
import ProductDetail from 'src/models/ProductDetail';
import mockedFetchedState from 'src/tests/__mocks__/mockedFetchedData';

describe('app reducer test', () => {
  it('should return initial state', () => {
    expect(appReducer(undefined, { type: undefined })).toEqual(initialState);
  });

  it('to save product list', () => {
    expect(
      appReducer(initialState, actions.cacheProductList(mockedFetchedState.mockedItemList)).productList.data,
    ).toEqual(mockedFetchedState.mockedItemList);
  });

  it('to save product detail', () => {
    expect(
      appReducer(initialState, actions.cacheProductDetail(mockedFetchedState.mockedItemDetail)).productDetail[0].data,
    ).toEqual(new ProductDetail(mockedFetchedState.mockedItemDetail));
  });
});
