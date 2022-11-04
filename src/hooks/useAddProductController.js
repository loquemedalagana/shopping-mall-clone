import { useEffect, useState, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { selectProductDetailState } from 'src/stores/productDetailStore';

const useAddProductController = () => {
  const dispatch = useDispatch();
  const productDetailState = useSelector(selectProductDetailState);

  const [color, _setColor] = useState(undefined);
  const [storage, _setStorage] = useState(undefined);

  const handleColorChange = e => {
    _setColor(e.target.value);
  };

  const handleStorageChange = e => {
    _setStorage(e.target.value);
  };

  const handleSubmit = () => {
    console.log(color, storage);
    console.log(productDetailState.productId);
  }

  return {
    color,
    storage,
    handleStorageChange,
    handleColorChange,
    handleSubmit,
  };
};

export default useAddProductController;
