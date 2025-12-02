import styled from 'styled-components';

const StyledButton = styled.button`
  padding: ${props => props.theme.spacing.small};
  background-color: ${props => props.theme.colors.background};
  color: ${props => props.theme.colors.primary};
  border-radius: ${props => props.theme.borderRadius.normal};
  transition: box-shadow 0.3s ease, transform 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${props => props.theme.spacing.xs};
  border: ${props => props.theme.border.normal} solid ${props => props.theme.colors.primary};
  box-shadow: ${props => props.theme.boxShadow.button};
  font-family: ${props => props.theme.fontFamily};
  text-decoration: none;
  cursor: pointer;
  overflow: hidden;
  position: relative;

  &:hover {
    box-shadow: ${props => props.theme.boxShadow.buttonHover};
    transform: translate(4px, 4px);
    text-decoration: none;
  }

  img {
    width: ${props => props.theme.spacing.xl};
    height: ${props => props.theme.spacing.xl};
  }
`;

const AtmButton = ({ children, onClick, href, ...props }) => {
  if (href) {
    return (
      <StyledButton as="a" href={href} onClick={onClick} {...props}>
        {children}
      </StyledButton>
    );
  }
  return (
    <StyledButton onClick={onClick} {...props}>
      {children}
    </StyledButton>
  );
};

export default AtmButton;