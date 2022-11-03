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

    // eslint-disable-next-line no-plusplus
    for (let i = 0; i < this.data.length; i++) {
      const { brand, model, price } = this.data[i];
      if (!brandOptions.includes(brand)) {
        brandOptions.push(brand);
      }
      if (!modelOptions.includes(model)) {
        modelOptions.push(model);
      }

      // eslint-disable-next-line no-continue
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
