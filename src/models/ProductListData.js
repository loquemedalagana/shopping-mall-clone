import { ONE_HOUR } from 'src/models/constants';
import ProductCore from 'src/models/ProductCore';
import { APP__PRODUCT_LIST_KEY, APP_KEY, isTest } from 'src/env';

class ProductListData {
  constructor(args, fetchedTime) {
    this.data = args.map(data => new ProductCore(data));
    this.fetchedTime = fetchedTime;
  }

  isExpired() {
    return new Date().getTime() - this.fetchedTime.getTime() >= ONE_HOUR;
  }

  changeTimeForTest() {
    if (!isTest()) {
      throw new Error('This method should only be used in the test env.');
    }
    this.fetchedTime = new Date(new Date().getTime() - (ONE_HOUR + 10));
  }
}

export default ProductListData;

export const saveFetchedProductListData = data => {
  const storageItems = JSON.parse(sessionStorage.getItem(APP_KEY));
  const currentTime = new Date();
  sessionStorage.setItem(
    APP_KEY,
    JSON.stringify({
      ...storageItems,
      [APP__PRODUCT_LIST_KEY]: {
        data,
        savedTime: currentTime,
      },
    }),
  );
};

export const getProductListDataFromStorage = () => {
  const stringifyData = sessionStorage.getItem(APP_KEY);

  if (!stringifyData) return undefined;

  const storageItems = JSON.parse(stringifyData);

  if (!storageItems[APP__PRODUCT_LIST_KEY]) return undefined;

  return new ProductListData(
    storageItems[APP__PRODUCT_LIST_KEY].data,
    new Date(storageItems[APP__PRODUCT_LIST_KEY].savedTime),
  );
};
