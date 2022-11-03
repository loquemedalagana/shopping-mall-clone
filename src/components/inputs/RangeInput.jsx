import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';

const HelperTextBox = styled.div`
  color: inherit;
  font-style: normal;
  font-weight: 500;
  font-size: 11px;
  line-height: 1em;
  transition: color 0.5s ease-in-out;
`;

const HelperTextGroupBox = styled.div`
  width: inherit;
  display: flex;
  justify-content: space-between;
`;

const ScaleInput = styled.input`
  &[type='range'] {
    -webkit-appearance: none;
    width: ${312 / 16}rem;
    height: 0.25rem;
    background: #98a8f8;
    cursor: pointer;
    border-radius: 0.5rem;
    transition: background 450ms ease-in;
  }

  &[type='range']:focus {
    outline: none;
  }

  &[type='range']::-webkit-slider-thumb {
    -webkit-appearance: none;
    width: ${24 / 16}rem;
    height: ${24 / 16}rem;
    background: white;
    border: 1px solid #98a8f8;
    border-radius: 50%;
    cursor: pointer;

    box-sizing: border-box;
    box-shadow: 0 0.25rem 1rem rgba(0, 0, 0, 0.08);
  }

  &[type='range']::-moz-range-thumb {
    -webkit-appearance: none;
    width: ${24 / 16}rem;
    height: ${24 / 16}rem;
    background: white;
    border: 1px solid #98a8f8;
    border-radius: 50%;
    cursor: pointer;

    box-sizing: border-box;
    box-shadow: 0 0.25rem 1rem rgba(0, 0, 0, 0.08);
  }
`;

const RangeInput = ({ helperText, value, name, onChange, error, ...props }) => {
  return (
    <>
      <HelperTextGroupBox className={error ? 'error_text' : ''}>
        <HelperTextBox>{helperText}</HelperTextBox>
        <HelperTextBox>{value} €</HelperTextBox>
      </HelperTextGroupBox>
      <ScaleInput
        className={error ? 'error_background__dark' : ''}
        type="range"
        min="0"
        max="1000"
        step="5"
        value={value}
        onChange={onChange}
        {...props}
      />
    </>
  );
};

RangeInput.propTypes = {
  name: PropTypes.string,
  helperText: PropTypes.string,
  value: PropTypes.number,
  onChange: PropTypes.func,
  error: PropTypes.bool,
};

export default RangeInput;
