/* eslint-disable no-plusplus */
/* eslint-disable no-continue */
import { ONE_HOUR } from 'src/models/constants';
import ProductCore from 'src/models/ProductCore';

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
