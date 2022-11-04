import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';

import SelectInput from 'src/components/inputs/SelectInput';
import useAddProductController from 'src/hooks/useAddProductController';
import { OptionItemType } from 'src/models/ProductDetail';
import Button from '@mui/material/Button';

const ProductDetailOptionFormsBox = styled.form`
  width: inherit;
  display: flex;
  flex-direction: column;
`;

const ProductDetailOptionsGroup = styled.div`
  width: inherit;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;

const ProductDetailActionSection = ({ options }) => {
  const addProductController = useAddProductController();

  return (
    <ProductDetailOptionFormsBox onSubmit={addProductController.handleSubmit}>
      <ProductDetailOptionsGroup>
        <SelectInput
          onChange={addProductController.handleColorChange}
          options={options.colors}
          defaultValue={options.colors[0].code}
          label="Color"
        />
        <SelectInput
          defaultValue={options.storages[0].code}
          onChange={addProductController.handleStorageChange}
          options={options.storages}
          label="Storage"
        />
      </ProductDetailOptionsGroup>
      <Button variant="contained" onClick={addProductController.handleSubmit}>
        Add
      </Button>
    </ProductDetailOptionFormsBox>
  );
};

ProductDetailActionSection.propTypes = {
  options: PropTypes.shape({
    colors: PropTypes.arrayOf(OptionItemType),
    storages: PropTypes.arrayOf(OptionItemType),
  }).isRequired,
};

export default ProductDetailActionSection;
