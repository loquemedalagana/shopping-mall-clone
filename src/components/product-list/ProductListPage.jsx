import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';

import ProductListItem from 'src/components/product-list/ProductListItem';
import { DEVICE_MOBILE_WIDTH, DEVICE_TABLET_WIDTH, DEVICE_DESKTOP_WIDTH } from 'src/device/devices';
import Loading from 'src/components/loading/Loading';
import { ProductCoreType } from 'src/models/ProductCore';

const ProductListPageWrapper = styled.div`
  margin-bottom: 2rem;
`;

const ProductListPageBox = styled.section`
  margin: 2rem 2rem 4rem 2rem;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 1rem;
  gap: 2rem;
  justify-content: center;

  // tablet
  @media screen and (max-width: ${DEVICE_DESKTOP_WIDTH}px) {
    gap: 1.5rem;
    grid-template-columns: repeat(3, 1fr);
  }

  // tablet
  @media screen and (max-width: ${DEVICE_TABLET_WIDTH}px) {
    gap: 1rem;
    grid-template-columns: repeat(2, 1fr);
  }

  // mobile
  @media screen and (max-width: ${DEVICE_MOBILE_WIDTH}px) {
    grid-template-columns: 1fr;
  }
`;

const BottomSection = styled.div`
  width: 100%;
`;

const ProductListPage = ({ bottomRef, isLoading, productList }) => {
  return (
    <ProductListPageWrapper>
      <ProductListPageBox>
        {productList.map((productData, index) => (
          <ProductListItem product={productData} key={`product-list-item-${index}`} />
        ))}
      </ProductListPageBox>
      {isLoading ? <Loading /> : <BottomSection ref={bottomRef} />}
    </ProductListPageWrapper>
  );
};

ProductListPage.propTypes = {
  bottomRef: PropTypes.func.isRequired,
  isLoading: PropTypes.bool.isRequired,
  productList: PropTypes.arrayOf(ProductCoreType).isRequired,
};

export default ProductListPage;
