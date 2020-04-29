import React from 'react';
import styled from 'styled-components';

import Navbar from './components/Navbar';
import SpiceConverter from './components/SpiceConverter';

const Main = styled.main`
  display: flex;
  align-items: center;
  height: 100vh;
  justify-content: center;
`;

const AppHeader = ` 
  align-items: center;
`;

const App = () => {
  return (
    <React.Fragment>
      <Navbar />
      <h1>Spice Converter</h1>
      <Main>
        <SpiceConverter />
      </Main>
    </React.Fragment>
  );
};

export default App;
