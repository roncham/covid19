import React from 'react';
import { Link } from 'gatsby';

import Container from 'components/Container';

const Header = () => {
  return (
    <header>
      <Container type="content">
        <Link className="navbar-brand" to="/">
          Covid-19 World Map
        </Link>
        <ul>
          <li>
            <Link className="nav-link" to="/">
              Home
            </Link>
          </li>
          <li>
            <Link className="nav-link" to="/about">
              Read Me
            </Link>
          </li>
          {/*<li>
            <Link className="nav-link" to="/us-states">
              US States
            </Link>
          </li>*/}
          <li>
            <Link className="nav-link" to="/nevada/">
              Nevada
            </Link>
          </li>
        </ul>
      </Container>
    </header>
  );
};

export default Header;
