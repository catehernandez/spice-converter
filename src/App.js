import React from 'react';
import styled from 'styled-components';

import Navbar from './components/Navbar';
import SpiceConverter from './components/SpiceConverter';

const Main = styled.main`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const AppHeader = styled.div`
  text-align: center;
  width: 100%;
`;

const Tagline = styled.div`
  font-size: 0.85rem;
`;

const App = () => {
  return (
    <React.Fragment>
      <AppHeader>
        <h1>Spice Converter</h1>
        <Tagline>
          I'll help you convert whole spices to ground and vice versa
        </Tagline>
      </AppHeader>
      <Main>
        <SpiceConverter />
      </Main>
    </React.Fragment>
  );
};

export default App;
