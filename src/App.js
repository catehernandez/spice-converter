import React from 'react';
import styled from 'styled-components';

import Navbar from './components/Navbar';
import SpiceConverter from './components/SpiceConverter';

const AppWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`;

const AppHeader = styled.header`
  flex: 0 1 auto;
  margin-top: 1.5rem;
  text-align: center;
  width: 100%;
`;

const Tagline = styled.div`
  font-size: 0.85rem;
`;

const Main = styled.main`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  text-align: center;
  flex: 1 1 auto;
`;

const App = () => {
  return (
    <AppWrapper>
      <AppHeader>
        <h1>Spice Converter</h1>
        <Tagline>
          I'll help you convert whole spices to ground and vice versa
        </Tagline>
      </AppHeader>
      <Main>
        <SpiceConverter />
      </Main>
    </AppWrapper>
  );
};

export default App;
