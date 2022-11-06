import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import * as actions from 'src/actions/productListActions';
import { selectProductListState } from 'src/stores/productListStore';

const useSearchController = () => {
  const dispatch = useDispatch();
  const { searchKeyword, searchOptions } = useSelector(selectProductListState);

  const [brand, _setBrand] = useState(searchKeyword?.brand || '');
  const [brandInput, _setBrandInput] = useState(searchKeyword?.brand || '');

  const [model, _setModel] = useState(searchKeyword?.model || '');
  const [modelInput, _setModelInput] = useState(searchKeyword?.model || '');

  const [maxPrice, _setMaxPrice] = useState(searchKeyword?.price?.max || searchOptions?.price?.max || 1000);
  const [minPrice, _setMinPrice] = useState(searchKeyword?.price?.min || searchOptions?.price?.min || 0);

  const [isBrandError, setIsBrandError] = useState(false);
  const [isModelError, setIsModelError] = useState(false);
  const [isPriceInputError, _setIsPriceInputError] = useState(false);

  const [isInputValuesChanged, _setIsInputValuesChanged] = useState(false);

  const handleChangeBrand = (e, nextValue) => {
    _setBrand(nextValue);
  };

  const handleChangeBrandInput = (e, nextValue) => {
    _setIsInputValuesChanged(true);
    _setBrandInput(nextValue);
  };

  const handleChangeModel = (e, nextValue) => {
    _setModel(nextValue);
  };

  const handleChangeModelInput = (e, nextValue) => {
    _setIsInputValuesChanged(true);
    _setModelInput(nextValue);
  };

  const handleChangeMinPrice = e => {
    const newPrice = parseInt(e.target.value, 10);
    _setIsInputValuesChanged(true);
    _setMinPrice(newPrice);
  };

  const handleChangeMaxPrice = e => {
    const newPrice = parseInt(e.target.value, 10);
    _setIsInputValuesChanged(true);
    _setMaxPrice(newPrice);
  };

  useEffect(() => {
    if (!searchOptions || isPriceInputError) {
      return;
    }

    if (!isInputValuesChanged) {
      return;
    }

    dispatch({
      type: actions.UPDATE__PRODUCT_LIST,
    });
  }, [searchKeyword, searchOptions]);

  useEffect(() => {
    if (minPrice > maxPrice) {
      _setIsPriceInputError(true);
    } else {
      _setIsPriceInputError(false);
      dispatch(actions.searchPriceRange({ max: maxPrice, min: minPrice }));
    }
  }, [minPrice, maxPrice]);

  useEffect(() => {
    dispatch(actions.searchProductBrand(brandInput));
  }, [brandInput]);

  useEffect(() => {
    dispatch(actions.searchProductModel(modelInput));
  }, [modelInput]);

  useEffect(() => {
    if (!isBrandError || !isModelError) {
      dispatch(actions.setSearchInputError(true));
    } else {
      dispatch(actions.setSearchInputError(false));
    }
  }, [isBrandError, isModelError]);

  return {
    brand,
    model,
    brandInput,
    modelInput,
    minPrice,
    maxPrice,
    searchOptions,
    handleChangeBrand,
    handleChangeBrandInput,
    handleChangeModel,
    handleChangeModelInput,
    handleChangeMaxPrice,
    handleChangeMinPrice,
    isPriceInputError,
    isBrandError,
    isModelError,
    setIsBrandError,
    setIsModelError,
  };
};

export default useSearchController;
