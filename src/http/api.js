import axios from 'axios';

import * as restApiURL from 'src/http/restApiURL';

export const restApiProductList = async () => {
  const response = await axios.get(restApiURL.REST_API_URL__PRODUCTS);
  return response.data;
};

export const restApiProductDetail = async productId => {
  const response = await axios.get(`${restApiURL.REST_API_URL__PRODUCTS}/${productId}`);
  return response.data;
};

export const restApiAddToCart = async ({ id, colorCode, storageCode }) => {
  const response = await axios.post(restApiURL.REST_API_URL__ADD_TO_CART, { id, colorCode, storageCode });
  return response.data;
};
