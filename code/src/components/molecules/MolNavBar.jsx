import React from 'react';
import styled from 'styled-components';

const NavList = styled.ul`
  display: flex;
  list-style-type: none;
  flex-wrap: wrap;
  gap: ${props => props.theme.spacing.medium};
  font-family: ${props => props.theme.fontFamily};
`;

const MolNavBar = ({ children, ...props }) => {
  const navItems = React.Children.map(children, (child, index) => (
    <li key={index}>{child}</li>
  ));

  return (
    <NavList {...props}>
      {navItems}
    </NavList>
  );
};

export default MolNavBar;