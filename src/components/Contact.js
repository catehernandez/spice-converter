import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  float: right;

  & a {
    font-weight: 700;
  }
`;

const Contact = () => {
  return (
    <Wrapper>
      made by <a href="https://github.com/zenon21/">C.H.</a>
    </Wrapper>
  );
};

export default Contact;
