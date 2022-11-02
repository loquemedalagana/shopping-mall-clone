import { ONE_HOUR } from 'src/models/constants';
import ProductCore from 'src/models/ProductCore';
import { APP__PRODUCT_LIST_KEY, APP_KEY, isTest } from 'src/env';

class ProductListData {
  constructor(args, savedTime) {
    this.data = args.map(data => new ProductCore(data));
    this.savedTime = savedTime;
  }

  isExpired() {
    return new Date().getTime() - this.savedTime.getTime() >= ONE_HOUR;
  }

  changeTimeForTest() {
    if (!isTest()) {
      throw new Error('This method should only be used in the test env.');
    }
    this.savedTime = new Date(new Date().getTime() - (ONE_HOUR + 10));
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
  const storageItems = JSON.parse(sessionStorage.getItem(APP_KEY));
  return new ProductListData(
    storageItems[APP__PRODUCT_LIST_KEY].data,
    new Date(storageItems[APP__PRODUCT_LIST_KEY].savedTime),
  );
};
