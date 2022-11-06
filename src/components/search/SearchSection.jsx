import React, { useEffect, useState } from 'react';
import { throttle } from 'lodash';
import styled from '@emotion/styled';

import * as constants from 'src/components/search/constants';
import CircleSpinner from 'src/components/loading/CircleSpinner';
import SearchInput from 'src/components/inputs/SearchInput';
import RangeInput from 'src/components/inputs/RangeInput';
import useSearchController from 'src/hooks/useSearchController';

const SearchSectionBackground = styled.section`
  display: flex;
  min-height: 3rem;
  width: inherit;
  background: #fff8ea;

  position: sticky;
  z-index: 30;
  transition: all 0.5s ease-in-out;

  justify-content: center;
  align-items: center;
`;

const SearchSectionBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 1rem;
`;

const SearchInputGroupBox = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const SearchSection = () => {
  const [searchSectionClassName, setSearchSectionClassName] = useState('');
  const onScroll = throttle(() => {
    if (window.scrollY > 200) {
      setSearchSectionClassName('fix-position slideDown');
    } else {
      setSearchSectionClassName('slideUp');
    }
  }, 1000);
  const searchController = useSearchController();

  useEffect(() => {
    window.addEventListener('scroll', onScroll);

    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  if (searchController.searchOptions === undefined) {
    return <CircleSpinner />;
  }

  return (
    <SearchSectionBackground className={searchSectionClassName}>
      <SearchSectionBox className="layout-space">
        <SearchInputGroupBox>
          <SearchInput
            label="Marca..."
            name={constants.NAME__SEARCH_INPUT__BRAND}
            value={searchController.brand}
            onChange={searchController.handleChangeBrand}
            inputValue={searchController.brandInput}
            onInputChange={searchController.handleChangeBrandInput}
            options={searchController?.searchOptions?.brand}
            error={searchController.isBrandError}
            setError={searchController.setIsBrandError}
            autoSelect
            autoComplete
          />
          <SearchInput
            label="Modelo..."
            name={constants.NAME__SEARCH_INPUT__MODEL}
            value={searchController.model}
            onChange={searchController.handleChangeModel}
            inputValue={searchController.modelInput}
            onInputChange={searchController.handleChangeModelInput}
            options={searchController?.searchOptions?.model}
            error={searchController.isModelError}
            setError={searchController.setIsModelError}
            freeSolo
          />
          <RangeInput
            name={constants.NAME__SEARCH_INPUT__MIN_PRICE}
            value={searchController.minPrice}
            onChange={searchController.handleChangeMinPrice}
            helperText="Precio Mínimo"
            error={searchController.isPriceInputError}
          />
          <RangeInput
            name={constants.NAME__SEARCH_INPUT__MAX_PRICE}
            value={searchController.maxPrice}
            onChange={searchController.handleChangeMaxPrice}
            helperText="Precio Máximo"
            error={searchController.isPriceInputError}
          />
        </SearchInputGroupBox>
      </SearchSectionBox>
    </SearchSectionBackground>
  );
};

export default SearchSection;
