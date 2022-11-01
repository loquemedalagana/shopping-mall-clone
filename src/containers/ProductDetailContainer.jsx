import React from 'react';
import { useParams } from 'react-router-dom';

const ProductDetailContainer = () => {
  const params = useParams();

  return <>Product Detail for ID {params?.productId}</>;
};

export default ProductDetailContainer;
