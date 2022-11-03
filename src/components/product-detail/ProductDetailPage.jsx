import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';

import { DEVICE_MOBILE_WIDTH, DEVICE_TABLET_WIDTH, DEVICE_DESKTOP_WIDTH } from 'src/device/devices';
import Table from 'src/components/table/Table';
import PageImage from 'src/components/image/PageImage';
import { itemNamesMapForDetail, itemNamesMapForList } from 'src/models/itemNamesMap';
import { ProductDetailType } from 'src/models/ProductDetail';

const ProductDetailPageWrapper = styled.div``;

const ProductDetailPageBox = styled.section`
  padding-top: 4rem;
  display: flex;
  flex-direction: row;
  gap: 2rem;
  width: 100%;

  // tablet
  @media screen and (max-width: ${DEVICE_DESKTOP_WIDTH}px) {
    gap: 1.5rem;
    padding-top: 3rem;
  }

  // tablet
  @media screen and (max-width: ${DEVICE_TABLET_WIDTH}px) {
    gap: 1rem;
    padding-top: 2rem;
  }

  // mobile
  @media screen and (max-width: ${DEVICE_MOBILE_WIDTH}px) {
    flex-direction: column;
    padding-top: 1rem;
  }
`;

const ProductDetailLeftSection = styled.div``;

const ProductDetailRightSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const ProductDetailTableSection = styled.div`
  background: #faf7f0;
`;

const ProductDetailActionSection = styled.div`
  background: #eef1ff;
`;

const ProductDetailPage = ({ product }) => {
  const productInfo = Object.entries(product)
    .filter(([key, value]) => value && itemNamesMapForDetail[key] !== undefined)
    .map(([key, value]) => {
      if (typeof value === 'object') {
        return [itemNamesMapForDetail[key], JSON.stringify(value).replace(/(\[|\])|"/g, '')];
      }
      return [itemNamesMapForDetail[key], value];
    });

  return (
    <ProductDetailPageWrapper className="layout-space">
      <ProductDetailPageBox>
        <ProductDetailLeftSection>
          <PageImage src={product.imgUrl} alt={product.id} />
        </ProductDetailLeftSection>
        <ProductDetailRightSection>
          <ProductDetailTableSection>
            <Table col={2} id={product.id} row={1} items={productInfo} />
          </ProductDetailTableSection>
          <ProductDetailActionSection>actions</ProductDetailActionSection>
        </ProductDetailRightSection>
      </ProductDetailPageBox>
    </ProductDetailPageWrapper>
  );
};

ProductDetailPage.propTypes = {
  product: ProductDetailType,
};

export default ProductDetailPage;
