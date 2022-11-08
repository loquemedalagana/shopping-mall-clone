import React from 'react';
import { Link } from 'react-router-dom';
import styled from '@emotion/styled';
import MuiCard from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { CardActionArea } from '@mui/material';

import Table from 'src/components/table/Table';
import CardImage from 'src/components/images/CardImage';
import { DEVICE_MOBILE_WIDTH } from 'src/device/devices';
import { itemNamesMapForList } from 'src/models/itemNamesMap';
import { ProductCoreType } from 'src/models/ProductCore';
import { URL_ROOT, URL_PRODUCTS } from 'src/routes/routeURL';

const CardBox = styled(MuiCard)`
  display: flex;
  background: #d7e9f7;
  flex-direction: column;
  width: 100%;
`;

const CardButtonBox = styled(CardActionArea)`
  display: flex;
  flex-direction: column;
  padding-top: 1rem;

  @media screen and (max-width: ${DEVICE_MOBILE_WIDTH + 1}px) {
    padding: 2rem;
  }
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;

  &:hover {
    text-decoration: none;
  }
`;

const ListPageCardBox = styled(CardBox)``;

const ProductInfo = styled(CardContent)`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  @media screen and (min-width: ${DEVICE_MOBILE_WIDTH + 1}px) {
    width: 100%;
  }
`;

const ProductListItem = ({ product }) => {
  const productInfo = Object.entries(product)
    .filter(([key, value]) => value && itemNamesMapForList[key] !== undefined)
    .map(([key, value]) => [itemNamesMapForList[key], value]);

  return (
    <ListPageCardBox id={`product-list-item-${product.id}`}>
      <StyledLink to={`${URL_ROOT + URL_PRODUCTS}/${product.id}`}>
        <CardButtonBox id={`goto-product-detail-${product.id}`}>
          <CardImage src={product.imgUrl} alt={product.id} />
          <ProductInfo>
            <Table col={2} id={product.id} row={1} items={productInfo} />
          </ProductInfo>
        </CardButtonBox>
      </StyledLink>
    </ListPageCardBox>
  );
};

ProductListItem.propTypes = {
  product: ProductCoreType,
};

export default ProductListItem;
