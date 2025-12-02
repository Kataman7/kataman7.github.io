import React from 'react';
import styled from 'styled-components';

const TableContainer = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin: ${props => props.theme.spacing.large} 0;
  font-size: ${props => props.theme.fontSize.small};
  font-family: ${props => props.theme.fontFamily};
  animation: slideUp 1s ease-out forwards;
`;

const TableCell = styled.td`
  padding: ${props => props.theme.spacing.small};
  text-align: left;
  box-shadow: 2px 2px ${props => props.theme.colors.background},
    4px 4px ${props => props.theme.colors.primary};
`;

const TableHeader = styled.th`
  padding: ${props => props.theme.spacing.small};
  text-align: left;
  background-color: ${props => props.theme.colors.primary};
  color: ${props => props.theme.colors.background};
  font-weight: bold;
  box-shadow: 2px 2px ${props => props.theme.colors.background},
    4px 4px ${props => props.theme.colors.primary};
`;

const TableBody = styled.tbody`
  tr:nth-child(even) {
    background-color: ${props => props.theme.colors.background};
    color: ${props => props.theme.colors.primary};
  }

  tr:nth-child(odd) {
    background-color: ${props => props.theme.colors.primary};
    color: ${props => props.theme.colors.background};
  }

  td {
    box-shadow: 2px 2px ${props => props.theme.colors.background},
      4px 4px ${props => props.theme.colors.primary};
  }

  tr td:first-child {
    width: 80px;
    text-align: center;
    font-weight: bold;
  }
`;

const AtmTable = ({ children, ...props }) => {
  return (
    <TableContainer {...props}>
      {children}
    </TableContainer>
  );
};

AtmTable.Th = TableHeader;
AtmTable.Td = TableCell;
AtmTable.Body = TableBody;

export default AtmTable;