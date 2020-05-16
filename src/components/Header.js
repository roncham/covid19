import React, { useState } from 'react';

//import Container from 'components/Container';

import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from 'reactstrap';

const Header = props => {
  const [collapsed, setCollapsed] = useState(true);
  const toggleNavbar = () => setCollapsed(!collapsed);
  return (
    <div>
      <Navbar color="light" light expand="lg">
        <NavbarBrand href="/">Covid-19 World Map</NavbarBrand>
        <NavbarToggler onClick={toggleNavbar} className="mr-2" />
        <Collapse isOpen={!collapsed} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <NavLink href="/">Home</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/about">About</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/us-states">US States</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/nevada/">Nevada</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href='https://ko-fi.com/E1E21PXOT' target='_blank' rel='noopener noreferrer'><img height='36' src='https://cdn.ko-fi.com/cdn/kofi2.png?v=2' alt='Buy Me a Coffee at ko-fi.com' /></NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default Header;
