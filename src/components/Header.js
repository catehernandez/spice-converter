import React from 'react';
import styled from 'styled-components';

const HeaderWrapper = styled.header`
  flex: 0 1 auto;
  margin: 1.5rem auto 0;
  text-align: center;
  max-width: 75%;
`;

const Heading = styled.h1`
  margin-bottom: 1rem;
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
