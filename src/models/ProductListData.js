/* eslint-disable no-plusplus */
/* eslint-disable no-continue */
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

  getOptionsList() {
    if (!this.data) {
      throw new Error('Data does not exist!');
    }
    const brandOptions = [];
    const modelOptions = [];
    const priceOptions = {
      max: -1,
      min: 1e9,
    };

    for (let i = 0; i < this.data.length; i++) {
      const { brand, model, price } = this.data[i];
      if (!brandOptions.includes(brand)) {
        brandOptions.push(brand);
      }
      if (!modelOptions.includes(model)) {
        modelOptions.push(model);
      }

      if (!price) continue;

      priceOptions.max = Math.max(priceOptions.max, Number(price));
      priceOptions.min = Math.min(priceOptions.min, Number(price));
    }

    return {
      brand: brandOptions,
      model: modelOptions,
      price: priceOptions,
    };
  }
}

export default ProductListData;

export const saveFetchedProductListData = data => {
  const currentTime = new Date();
  const expiredTimeForTest = new Date(new Date().getTime() - (ONE_HOUR + 10));
  sessionStorage.setItem(
    APP__PRODUCT_LIST_KEY,
    JSON.stringify({
      data,
      savedTime: isTest() ? expiredTimeForTest : currentTime,
    }),
  );
};

export const getProductListDataFromStorage = () => {
  const stringifyData = sessionStorage.getItem(APP__PRODUCT_LIST_KEY);

  if (!stringifyData) return undefined;

  const storageItems = JSON.parse(stringifyData);

  return new ProductListData(storageItems.data, new Date(storageItems.savedTime));
};
