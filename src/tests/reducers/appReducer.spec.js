import * as actions from 'src/actions/appActions';
import { appReducer, initialState } from 'src/stores/appStore';
import ProductDetail from 'src/models/ProductDetail';
import mockedAppState from 'src/tests/__mocks__/mockedAppState';
import mockedFetchedState, { mockedItemDetail } from 'src/tests/__mocks__/mockedFetchedData';

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

  it('to remove product detail', () => {
    expect(
      appReducer(mockedAppState, actions.removeCachedProductDetailData(mockedAppState.productDetail[0].data.id))
        .productDetail,
    ).not.toContain(mockedAppState.productDetail[0]);
  });

  it('to remove product list', () => {
    expect(appReducer(mockedAppState, actions.removeCachedProductListData()).productList).toEqual(null);
  });
});
