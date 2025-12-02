import styled from 'styled-components';

const NavList = styled.ul`
  display: flex;
  list-style-type: none;
  flex-wrap: wrap;
  gap: ${props => props.theme.spacing.medium};
  font-family: ${props => props.theme.fontFamily};
`;

const NavItem = styled.li`
  font-size: ${props => props.theme.fontSize.medium};
  font-family: ${props => props.theme.fontFamily};
`;

const AtmNavBar = ({ children, ...props }) => {
  return (
    <NavList {...props}>
      {children}
    </NavList>
  );
};

AtmNavBar.Item = NavItem;

export default AtmNavBar;