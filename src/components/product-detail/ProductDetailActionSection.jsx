import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';

import SelectInput from 'src/components/inputs/SelectInput';
import useAddProductController from 'src/hooks/useAddProductController';
import { OptionItemType } from 'src/models/ProductDetail';

const ProductDetailOptionsBox = styled.form`
  width: inherit;
  display: flex;
  justify-content: space-between;
`;

const ProductDetailActionSection = ({ options }) => {
  const addProductController = useAddProductController();

  return (
    <ProductDetailOptionsBox>
      <SelectInput
        onChange={addProductController.handleColorChange}
        options={options.colors}
        label="Color"
        value={addProductController.color}
      />
      <SelectInput
        onChange={addProductController.handleStorageChange}
        options={options.storages}
        label="Storage"
        value={addProductController.storage}
      />
    </ProductDetailOptionsBox>
  );
};

ProductDetailActionSection.propTypes = {
  options: PropTypes.shape({
    colors: PropTypes.arrayOf(OptionItemType),
    storages: PropTypes.arrayOf(OptionItemType),
  }).isRequired,
};

export default ProductDetailActionSection;
