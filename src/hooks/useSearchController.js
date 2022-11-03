import { useEffect, useState } from 'react';
// import { useSelector, useDispatch } from 'react-redux';

const useSearchController = () => {
  const [brand, _setBrand] = useState('');
  const [model, _setModel] = useState('');
  const [maxPrice, _setMaxPrice] = useState(0);
  const [minPrice, _setMinPrice] = useState(0);
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
    if (minPrice > maxPrice) {
      _setIsPriceInputError(true);
    } else {
      _setIsPriceInputError(false);
    }
  }, [minPrice, maxPrice]);

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
