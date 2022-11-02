import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import MuiTable from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';

import { DEVICE_MOBILE_WIDTH } from 'src/device/devices';

const TableBox = styled(MuiTable)`
  align-self: center;
  @media screen and (min-width: ${DEVICE_MOBILE_WIDTH + 1}px) {
    width: 100%;
  }
`;

const Table = ({ id, size = 'small', col, row, items }) => {
  const getTextAlign = colIndex => {
    if (colIndex === 0) return 'left';
    if (colIndex === col - 1) return 'right';
    return 'center';
  };

  return (
    <TableBox size={size}>
      <TableBody>
        {items.map((rowItems, rowIndex) => (
          <TableRow key={`table-row-${rowIndex}-for-item${id}-${row}X${col}`}>
            {rowItems.map((item, colIndex) => (
              <TableCell
                align={getTextAlign(colIndex)}
                key={`table-col-${colIndex}-for-item${id}-${row}X${col}-${rowIndex}`}
              >
                {item}
              </TableCell>
            ))}
          </TableRow>
        ))}
      </TableBody>
    </TableBox>
  );
};

Table.propTypes = {
  id: PropTypes.string.isRequired,
  col: PropTypes.number.isRequired,
  row: PropTypes.number.isRequired,
  size: PropTypes.oneOf(['small', 'medium']),
  items: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.string)).isRequired,
};

export default Table;
