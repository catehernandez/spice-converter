import React from 'react';
import styled from 'styled-components';

import About from './About';

const NavWrapper = styled.nav`
  position: absolute;
  margin: 1.5rem;
`;

const Navbar = () => {
  return (
    <NavWrapper>
      <About />
    </NavWrapper>
  );
};

export default Navbar;
