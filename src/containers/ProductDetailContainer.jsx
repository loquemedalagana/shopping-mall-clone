import React, { useEffect } from 'react';
import { Navigate, useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import * as actions from 'src/actions/productDetailActions';
import ProductDetailPage from 'src/components/product-detail/ProductDetailPage';
import TextSpinner from 'src/components/loading/TextSpinner';
import { selectProductDetailState } from 'src/stores/productDetailStore';
import { URL_ROOT, URL_NOT_FOUND } from 'src/routes/routeURL';

const ProductDetailContainer = () => {
  const dispatch = useDispatch();
  const productDetailState = useSelector(selectProductDetailState);
  const params = useParams();

  useEffect(() => {
    if (params?.productId) {
      dispatch(actions.loadProductDetail(params?.productId));
    }
  }, []);

  if (productDetailState.error) {
    return <Navigate to={URL_ROOT + URL_NOT_FOUND} />;
  }

  if (productDetailState.data && !productDetailState.loading) {
    return <ProductDetailPage product={productDetailState.data} />;
  }

  return <TextSpinner />;
};

export default ProductDetailContainer;
