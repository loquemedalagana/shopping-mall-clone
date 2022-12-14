import React, { useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { useInView } from 'react-intersection-observer';

import { LOAD__PRODUCT_LIST } from 'src/actions/productListActions';
import ProductListPage from 'src/components/product-list/ProductListPage';
import TextSpinner from 'src/components/loading/TextSpinner';
import { selectProductListState } from 'src/stores/productListStore';
import { URL_ERROR, URL_ROOT } from 'src/routes/routeURL';

const ProductListContainer = () => {
  const dispatch = useDispatch();
  const productListState = useSelector(selectProductListState);
  const [bottomRef, inView] = useInView({});

  useEffect(() => {
    if (inView && !productListState.isReachedEnd) {
      dispatch({
        type: LOAD__PRODUCT_LIST,
      });
    }
  }, [inView, productListState.isReachedEnd, productListState.page]);

  if (productListState.error) {
    return <Navigate to={URL_ROOT + URL_ERROR} />;
  }

  if (!productListState.data) {
    return <TextSpinner />;
  }

  return (
    <ProductListPage bottomRef={bottomRef} isLoading={productListState.loading} productList={productListState.data} />
  );
};

export default ProductListContainer;
