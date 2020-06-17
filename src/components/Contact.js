import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  & a {
    font-weight: 700;
  }

  @media (min-width: 576px) {
    float: right;
  }
`;

const Contact = () => {
  return (
    <Wrapper>
      Made by <a href="https://github.com/zenon21/">C.H.</a>
    </Wrapper>
  );
};

export default Contact;
