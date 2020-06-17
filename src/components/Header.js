import React from 'react';
import styled from 'styled-components';

const HeaderWrapper = styled.header`
  flex: 0 1 auto;
  margin: 1rem auto; /* Horizontally center content */
  text-align: center;
  width: 85%;

  @media (min-width: 767px) {
    margin: 2rem auto; /* Horizontally center content */
  }
`;

const Heading = styled.h1`
  margin: 0.75rem;

  @media (min-width: 767px) {
    margin: 1rem;
  }
`;

const Tagline = styled.div`
  font-size: 0.85rem;
`;

const Header = () => {
  return (
    <HeaderWrapper>
      <Heading>Spice Converter</Heading>
      <Tagline>
        I'll help you convert whole spices to ground and vice versa
      </Tagline>
    </HeaderWrapper>
  );
};

export default Header;
