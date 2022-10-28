import React from 'react';
import { useParams } from 'react-router-dom';

const ProductDetailPage = () => {
  const params = useParams();

  return <>Product Detail for ID {params?.productId}</>;
};

export default ProductDetailPage;
