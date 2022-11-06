import { debounce } from 'lodash';
import ProductCore from 'src/models/ProductCore';
import { mockedItemList } from 'src/tests/__mocks__/mockedFetchedData';

export const definedMockedItemList = mockedItemList.map(data => new ProductCore(data));
export const fakeFetchProductList = debounce(() => mockedItemList, 3000);

export const mockedListOptions = definedMockedItemList.reduce(
  (previousValue, currentValue) => {
    const accumulatedOptions = previousValue;
    const { brand, model, price } = currentValue;

    if (!accumulatedOptions.brand.includes(brand)) {
      accumulatedOptions.brand.push(brand);
    }

    if (!accumulatedOptions.model.includes(model)) {
      accumulatedOptions.model.push(model);
    }

    if (!price) return accumulatedOptions;

    accumulatedOptions.price.max = Math.max(accumulatedOptions.price.max, Number(price));
    accumulatedOptions.price.min = Math.min(accumulatedOptions.price.min, Number(price));

    return accumulatedOptions;
  },
  {
    brand: [],
    model: [],
    price: {
      max: -1,
      min: 1e9,
    },
  },
);
