import React, { useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import * as actions from 'src/actions/productListActions';
import { URL_PRODUCTS, URL_ROOT } from 'src/routes/routeURL';

const LandingContainer = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(actions.searchProductBrand(''));
    dispatch(actions.searchProductModel(''));
    dispatch(actions.setSearchInputError(false));
    dispatch(actions.updateProductList());
  }, []);

  return <Navigate to={URL_ROOT + URL_PRODUCTS} replace />;
};

export default LandingContainer;
