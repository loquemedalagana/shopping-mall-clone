import { useState, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import * as actions from 'src/actions/cartActions';
import { selectProductDetailState } from 'src/stores/productDetailStore';
import { selectCartState } from 'src/stores/cartStore';

const useAddProductController = () => {
  const dispatch = useDispatch();
  const productDetailState = useSelector(selectProductDetailState);
  const cartState = useSelector(selectCartState);

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
    isLoading: cartState.isLoading,
    handleStorageChange,
    handleColorChange,
    handleSubmit,
  };
};

export default useAddProductController;
