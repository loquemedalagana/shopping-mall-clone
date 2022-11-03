import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import * as actions from 'src/actions/productListActions';
import { selectProductListState } from 'src/stores/productListStore';

const useSearchController = () => {
  const dispatch = useDispatch();
  const { searchKeyword } = useSelector(selectProductListState);

  const [brand, _setBrand] = useState(searchKeyword?.brand || '');
  const [model, _setModel] = useState(searchKeyword?.model || '');
  const [maxPrice, _setMaxPrice] = useState(searchKeyword?.price?.max || 1000);
  const [minPrice, _setMinPrice] = useState(searchKeyword?.price?.min || 0);
  const [isPriceInputError, _setIsPriceInputError] = useState(false);

  const handleChangeBrand = e => {
    _setBrand(e.target.value);
  };

  const handleChangeModel = e => {
    _setModel(e.target.value);
  };

  const handleChangeMinPrice = e => {
    const newPrice = parseInt(e.target.value, 10);
    _setMinPrice(newPrice);
  };

  const handleChangeMaxPrice = e => {
    const newPrice = parseInt(e.target.value, 10);
    _setMaxPrice(newPrice);
  };

  useEffect(() => {
    // TODO: call update state
  }, [searchKeyword]);

  useEffect(() => {
    if (minPrice > maxPrice) {
      _setIsPriceInputError(true);
    } else {
      _setIsPriceInputError(false);
      dispatch(actions.searchPriceRange({ max: maxPrice, min: minPrice }));
    }
  }, [minPrice, maxPrice]);

  useEffect(() => {
    dispatch(actions.searchProductBrand(brand));
  }, [brand]);

  useEffect(() => {
    dispatch(actions.searchProductModel(model));
  }, [model]);

  return {
    brand,
    model,
    minPrice,
    maxPrice,
    handleChangeBrand,
    handleChangeModel,
    handleChangeMaxPrice,
    handleChangeMinPrice,
    isPriceInputError,
  };
};

export default useSearchController;
