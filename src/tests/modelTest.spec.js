import ProductCoreData from 'src/models/ProductCoreData';
import ProductDetailData from 'src/models/ProductDetailData';

import mockedItemList from 'src/tests/__mocks__/mockedItemList';
import mockedItemDetail from 'src/tests/__mocks__/mockedItemDetail';

describe('model constructor test', () => {
  it('product list', () => {
    // eslint-disable-next-line no-console
    console.log(mockedItemList.map(data => new ProductCoreData(data)));
  });

  it('product detail', () => {
    // eslint-disable-next-line no-console
    console.log(new ProductDetailData(mockedItemDetail));
  });
});
