/* eslint-disable no-console */
import ProductCoreData from 'src/models/ProductCoreData';
import ProductListData from 'src/models/ProductListData';
import ProductDetailData from 'src/models/ProductDetailData';

import mockedItemList from 'src/tests/__mocks__/mockedItemList';
import mockedItemDetail from 'src/tests/__mocks__/mockedItemDetail';
import { ONE_HOUR } from "../models/constants";

describe('model constructor test', () => {
  it('product list class test', () => {
    const productListData = new ProductListData(mockedItemList, new Date());
    expect(productListData.productListData).toEqual(mockedItemList.map(data => new ProductCoreData(data)));
    expect(productListData.isExpired()).toEqual(false);
    console.log(productListData.savedTime + ONE_HOUR);
  });

  it('product detail', () => {
    console.log(new ProductDetailData(mockedItemDetail));
  });
});
