import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';

import InputLabel from '@mui/material/InputLabel';

import { OptionItemType } from 'src/models/ProductDetail';

const SelectWrapper = styled.div`
  display: flex;
  gap: 2rem;
  align-items: center;
  padding: 1rem;
`;

const SelectBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: fit-content;
  padding: 0.5rem 0.5rem 0.5rem 0.25rem;
  position: relative;
  background: #EEF1FF;
  border-radius: 1rem;
  border: 1px solid #B1B2FF;

  & > input {
    display: none;
  }
`;

const StyledSelectOptions = styled.select`
  background: transparent;
  display: flex;
  flex-direction: column;
  position: relative;
  padding: 0;
  font-style: normal;
  font-weight: 600;
  font-size: 0.75rem;
  line-height: 1em;
  border: none;

  &:hover,
  &:focus {
    border: none;
    outline: none;
  }

  & > option:focus {
    border: none;
    outline: none;
  }
`;

const StyledOption = styled.option`
  padding: 0;
`;

const SelectInput = ({ value, onChange, label, options, ...rest }) => {
  return (
    <SelectWrapper>
      <InputLabel>{label}</InputLabel>
      <SelectBox>
        <StyledSelectOptions value={value} label={label} onChange={onChange} {...rest}>
          {options.map(({ code, name }, index) => {
            return (
              <StyledOption key={`${label}-options-${index}`} value={code}>
                {name}
              </StyledOption>
            );
          })}
        </StyledSelectOptions>
      </SelectBox>
    </SelectWrapper>
  );
};

SelectInput.propTypes = {
  value: PropTypes.oneOf([PropTypes.number, PropTypes.string]),
  label: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(OptionItemType).isRequired,
};

export default SelectInput;
