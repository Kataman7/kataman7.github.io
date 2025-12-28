import styled from 'styled-components';

const StyledButton = styled.button`
  padding: ${props => props.theme.spacing.small};
  background-color: ${props => props.theme.colors.background};
  color: ${props => props.theme.colors.primary};
  border-radius: ${props => props.theme.borderRadius.normal};
  transition: box-shadow 0.22s cubic-bezier(.2,.8,.2,1), transform 0.22s cubic-bezier(.2,.8,.2,1);
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${props => props.theme.spacing.xs};
  border: ${props => props.theme.border.normal} solid ${props => props.theme.colors.primary};
  box-shadow: ${props => props.theme.boxShadow.button};
  font-family: ${props => props.theme.fontFamily};
  font-size: ${props => props.theme.fontSize.small};
  text-decoration: none;
  cursor: pointer;
  overflow: hidden;
  position: relative;

  &:hover {
    box-shadow: ${props => props.theme.boxShadow.buttonHover};
    transform: translate(3px, 3px);
    text-decoration: none;
  }

  &:active {
    /* Immediate pressed feedback while clicking (smoother) */
    transform: translate(6px, 6px);
    box-shadow: inset 0 3px 6px rgba(0,0,0,0.12);
    transition: transform 0.18s cubic-bezier(.2,.8,.2,1), box-shadow 0.18s ease;
  }

  /* Permanent pressed state via aria-pressed (smooth transition back and forth) */
  &[aria-pressed="true"] {
    transform: translate(4px, 4px);
    box-shadow: inset 0 2px 6px rgba(0,0,0,0.10);
    transition: transform 0.18s cubic-bezier(.2,.8,.2,1), box-shadow 0.18s ease;
  }

  img {
    width: ${props => props.theme.spacing.xl};
    height: ${props => props.theme.spacing.xl};
  }

  ${props => props.disabled && `
    opacity: 0.6;
    cursor: not-allowed;
    filter: grayscale(0.8);
    border-color: ${props.theme.colors.secondary || '#ccc'};
    color: ${props.theme.colors.secondary || '#888'};
    box-shadow: none;
    pointer-events: none;
    
    &:hover, &:active {
      transform: none;
      box-shadow: none;
    }
  `}
`;

const AtmButton = ({ children, onClick, href, disabled, ...props }) => {
  if (href) {
    return (
      <StyledButton as="a" href={href} disabled={disabled} {...props}>
        {children}
      </StyledButton>
    );
  }
  return (
    <StyledButton onClick={onClick} disabled={disabled} {...props}>
      {children}
    </StyledButton>
  );
};

export default AtmButton;