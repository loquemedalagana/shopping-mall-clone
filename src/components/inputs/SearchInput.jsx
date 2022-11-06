import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';

import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

const SearchInputBox = styled.div`
  min-width: 200px;
`;

const SearchInput = ({
  name,
  label,
  value,
  options,
  onChange,
  inputValue,
  onInputChange,
  error,
  setError,
  ...rest
}) => {
  useEffect(() => {
    const $optionsElement = document.getElementById(`${name}-listbox`);
    const $optionsElementsPresentation = document.querySelectorAll('[role="presentation"]');

    if (!$optionsElement && $optionsElementsPresentation.length > 0) {
      setError(true);
    } else {
      setError(false);
    }

    return () => {
      setError(false);
    };
  }, [inputValue]);

  return (
    <SearchInputBox>
      <Autocomplete
        value={value}
        id={name}
        disableClearable
        onChange={onChange}
        inputValue={inputValue}
        onInputChange={onInputChange}
        options={[''].concat(options)}
        renderInput={params => {
          return (
            <TextField
              {...params}
              error={error}
              label={label}
              InputProps={{
                ...params.InputProps,
                type: 'search',
              }}
            />
          );
        }}
        {...rest}
      />
    </SearchInputBox>
  );
};

SearchInput.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string),
  value: PropTypes.string,
  inputValue: PropTypes.string,
  name: PropTypes.string,
  onChange: PropTypes.func,
  onInputChange: PropTypes.func,
  label: PropTypes.string,
  freeSolo: PropTypes.bool,
  autoSelect: PropTypes.bool,
  autoComplete: PropTypes.bool,
  error: PropTypes.bool,
  setError: PropTypes.func,
};

export default SearchInput;
