import React from 'react';
import styled from 'styled-components';

import Footer from './components/Footer';
import SpiceConverter from './components/SpiceConverter';

const AppWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  overflow: hidden;
`;

const AppHeader = styled.header`
  flex: 0 1 auto;
  margin: 1.5rem auto 0;
  text-align: center;
  max-width: 75%;
`;

const AppTitle = styled.h1`
  margin-bottom: 1rem;
`;

const Tagline = styled.div`
  font-size: 0.85rem;
`;

const Main = styled.main`
  flex: 1 1 auto;
  height: 100%;
  margin: 0 auto;
  max-width: 95%;
`;

const App = () => {
  return (
    <AppWrapper>
      <AppHeader>
        <AppTitle>Spice Converter</AppTitle>
        <Tagline>
          I'll help you convert whole spices to ground and vice versa
        </Tagline>
      </AppHeader>
      <Main>
        <SpiceConverter />
      </Main>
      <Footer />
    </AppWrapper>
  );
};

export default App;
