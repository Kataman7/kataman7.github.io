import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';

const buttonStyles = css`
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

const StyledLink = styled.a`
  ${buttonStyles}
`;

const StyledRouterLink = styled(Link)`
  ${buttonStyles}
`;

const AtmButtonLink = ({ children, to, href, ...props }) => {
  // If 'to' is provided, use React Router Link (internal navigation)
  if (to) {
    return (
      <StyledRouterLink to={to} onClick={() => window.scrollTo(0, 0)} {...props}>
        {children}
      </StyledRouterLink>
    );
  }
  
  // Otherwise use regular <a> tag (external links)
  return (
    <StyledLink href={href} {...props}>
      {children}
    </StyledLink>
  );
};

export default AtmButtonLink;