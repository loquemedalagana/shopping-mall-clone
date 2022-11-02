import { ONE_HOUR } from 'src/models/constants';
import ProductCore from 'src/models/ProductCore';
import { APP__PRODUCT_LIST_KEY, APP_KEY } from 'src/env';

class ProductListData {
  constructor(args, savedTime) {
    this.data = args.map(data => new ProductCore(data));
    this.savedTime = savedTime;
  }

  isExpired() {
    return this.savedTime - new Date() > ONE_HOUR;
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
