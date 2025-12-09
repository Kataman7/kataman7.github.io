import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';

const linkStyles = css`
  color: ${props => props.theme.colors.primary};
  text-decoration: underline;
  font-family: ${props => props.theme.fontFamily};
  cursor: pointer;
  transition: color 0.3s ease;

  &:hover {
    color: ${props => props.theme.colors.secondary};
  }

  &:visited {
    color: ${props => props.theme.colors.primary};
  }
`;

const StyledSimpleLink = styled.a`
  ${linkStyles}
`;

const StyledRouterLink = styled(Link)`
  ${linkStyles}
`;

const AtmSimpleLink = ({ children, href, to, target, ...props }) => {
  // If 'to' is provided, use React Router Link (internal navigation)
  if (to) {
    return (
      <StyledRouterLink to={to} {...props}>
        {children}
      </StyledRouterLink>
    );
  }
  
  // Otherwise use regular <a> tag (external links)
  return (
    <StyledSimpleLink href={href} target={target} {...props}>
      {children}
    </StyledSimpleLink>
  );
};

export default AtmSimpleLink;