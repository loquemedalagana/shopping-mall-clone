import ProductListData, { saveFetchedProductListData, getProductListDataFromStorage } from 'src/models/ProductListData';
import ProductDetailData from 'src/models/ProductDetailData';

import mockedItemList from 'src/tests/__mocks__/mockedItemList';
import mockedItemDetail from 'src/tests/__mocks__/mockedItemDetail';
import { createMockSessionStorage } from 'src/tests/__mocks__/mockStorage';
import { getFetchedProductDetailDataFromStorage, saveFetchedProductDetailData } from 'src/models/ProductDetailData';

describe('session storage test', () => {
  it('product list', () => {
    const currentTime = new Date();
    const sampleProductListData = new ProductListData(mockedItemList, currentTime);
    createMockSessionStorage({});
    saveFetchedProductListData(mockedItemList);
    const productListDataFromStorage = getProductListDataFromStorage();
    expect(productListDataFromStorage.data).toEqual(sampleProductListData.data);
    expect(sampleProductListData.savedTime.getTime()).toBeLessThanOrEqual(
      productListDataFromStorage.savedTime.getTime(),
    );

    productListDataFromStorage.changeTimeForTest();
    expect(productListDataFromStorage.isExpired()).toEqual(true);
  });

  it('product detail', () => {
    const currentTime = new Date();
    const sampleProductDetailData = new ProductDetailData(mockedItemDetail, currentTime);
    createMockSessionStorage({});
    saveFetchedProductDetailData(mockedItemDetail);
    const productDetailDataFromStorage = getFetchedProductDetailDataFromStorage(mockedItemDetail.id);
    expect(productDetailDataFromStorage.data).toEqual(sampleProductDetailData.data);
    expect(sampleProductDetailData.savedTime.getTime()).toBeLessThanOrEqual(
      productDetailDataFromStorage.savedTime.getTime(),
    );

    productDetailDataFromStorage.changeTimeForTest();
    expect(productDetailDataFromStorage.isExpired()).toEqual(true);
  });

  afterEach(() => {
    sessionStorage.clear();
  });
});
