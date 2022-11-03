import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';

import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

const SearchInputBox = styled.div`
  min-width: 200px;
`;

const SearchInput = ({ name, label, value, options, onChange }) => {
  const sampleOptions = ['Acer', 'ssss', 'sss'];

  return (
    <SearchInputBox>
      <Autocomplete
        value={value}
        freeSolo
        id={name}
        disableClearable
        options={options}
        renderInput={params => {
          return (
            <TextField
              {...params}
              label={label}
              InputProps={{
                ...params.InputProps,
                type: 'search',
              }}
            />
          );
        }}
      />
    </SearchInputBox>
  );
};

SearchInput.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string),
  value: PropTypes.string,
  name: PropTypes.string,
  onChange: PropTypes.func,
  label: PropTypes.string,
};

export default SearchInput;
