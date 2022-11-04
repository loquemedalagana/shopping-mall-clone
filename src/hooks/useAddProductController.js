/* eslint-disable no-console */
import { useEffect, useState, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import * as actions from 'src/actions/cartActions';
import { selectProductDetailState } from 'src/stores/productDetailStore';

const useAddProductController = () => {
  const dispatch = useDispatch();
  const productDetailState = useSelector(selectProductDetailState);

  const [color, _setColor] = useState(productDetailState?.data?.options?.colors[0].code);
  const [storage, _setStorage] = useState(productDetailState?.data?.options?.storages[0].code);

  const handleColorChange = e => {
    _setColor(e.target.value);
  };

  const handleStorageChange = e => {
    _setStorage(e.target.value);
  };

  const handleSubmit = useCallback(() => {
    dispatch(actions.addCartRequest({ id: productDetailState.productId, colorCode: color, storageCode: storage }));
  }, [productDetailState.productId]);

  return {
    color,
    storage,
    handleStorageChange,
    handleColorChange,
    handleSubmit,
  };
};

export default useAddProductController;
