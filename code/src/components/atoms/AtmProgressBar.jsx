import styled from 'styled-components';

const BarContainer = styled.div`
  width: 100%;
  height: ${props => props.theme.spacing.xl};
  margin-top: ${props => props.theme.spacing.small};
  border: ${props => props.theme.border.normal} solid ${props => props.theme.colors.primary};
  border-radius: ${props => props.theme.borderRadius.normal};
  position: relative;
  overflow: hidden;
`;

const BarFill = styled.div`
  height: 100%;
  background-color: ${props => props.theme.colors.primary};
  width: ${props => props.width || '0%'};
  transition: width 1s ease;
  transform: translate(-1px, -2px);
  border-bottom-right-radius: ${props => props.theme.borderRadius.normal};
`;

const AtmProgressBar = ({ progress = 0, ...props }) => {
  return (
    <BarContainer {...props}>
      <BarFill width={`${progress}%`} />
    </BarContainer>
  );
};

export default AtmProgressBar;