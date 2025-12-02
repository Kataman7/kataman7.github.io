import styled from 'styled-components';

const TwoColumnContainer = styled.div`
  display: flex;
  width: 100%;
  gap: 0;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const LeftColumn = styled.div`
  flex: 0 0 ${props => props.$leftWidth || props.theme.layout?.leftWidth || '20%'};
  padding-right: ${props => props.theme.spacing.medium};

  @media (max-width: 768px) {
    flex: 1;
    width: 100%;
    margin-bottom: ${props => props.theme.spacing.medium};
  }
`;

const RightColumn = styled.div`
  flex: 1;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const MolTwoColumn = ({ left, right, leftWidth }) => {
  return (
    <TwoColumnContainer>
      <LeftColumn $leftWidth={leftWidth}>{left}</LeftColumn>
      <RightColumn>{right}</RightColumn>
    </TwoColumnContainer>
  );
};

export default MolTwoColumn;