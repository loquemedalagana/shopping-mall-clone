import React from 'react';
import styled from '@emotion/styled';

import { useSelector } from 'react-redux';
import { selectCartState } from 'src/stores/cartStore';
import MiniSpinner from 'src/components/loading/MiniSpinner';

const CartCountBox = styled.div`
  display: flex;
  gap: 0.25em;
  align-items: center;

  p {
    margin: 0;
  }
`;

const CartCount = () => {
  const cartState = useSelector(selectCartState);

  const errorMessage = 'error';

  return (
    <CartCountBox id="total-count-of-products__in-the-cart">
      <p>el número de productos:</p>
      {cartState.loading && <MiniSpinner />}
      {!cartState.loading && (cartState.error ? <p>{errorMessage}</p> : <p className="total-count-of-products">{cartState.count}</p>)}
    </CartCountBox>
  );
};

export default CartCount;
