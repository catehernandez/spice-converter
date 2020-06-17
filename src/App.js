import React from 'react';
import styled from 'styled-components';

import Footer from './components/Footer';
import Header from './components/Header';
import SpiceConverter from './components/SpiceConverter';

const AppWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  overflow: hidden;
`;

const Main = styled.main`
  display: flex;
  flex: 1;
`;

const App = () => {
  return (
    <AppWrapper>
      <Header />
      <Main>
        <SpiceConverter />
      </Main>
      <Footer />
    </AppWrapper>
  );
};

export default App;
