import styled from 'styled-components';
import AtmTable from '../atoms/AtmTable';

const SimpleTableContainer = styled(AtmTable)`
  box-shadow: none;
  border: none;
  margin: 0;

  th, td {
    box-shadow: none;
    background-color: transparent;
    color: inherit;
    border: none;
    padding: ${props => props.theme.spacing.small} 12px;
  }

  th {
    font-weight: normal;
    text-align: left;
  }
`;

const MolTable = ({ children, ...props }) => {
  return (
    <SimpleTableContainer {...props}>
      {children}
    </SimpleTableContainer>
  );
};

// Composants pour les colonnes prédéfinies
const SmallColumn = styled(AtmTable.Td)`
  width: ${props => props.theme.layout?.leftWidth || '20%'};
`;

const LargeColumn = styled(AtmTable.Td)`
  width: calc(100% - ${props => props.theme.layout?.leftWidth || '20%'});
`;

const SmallHeader = styled(AtmTable.Th)`
  width: ${props => props.theme.layout?.leftWidth || '20%'};
`;

const LargeHeader = styled(AtmTable.Th)`
  width: calc(100% - ${props => props.theme.layout?.leftWidth || '20%'});
`;

MolTable.SmallTh = SmallHeader;
MolTable.LargeTh = LargeHeader;
MolTable.SmallTd = SmallColumn;
MolTable.LargeTd = LargeColumn;

export default MolTable;