import React from 'react';
import styled from 'styled-components';

import Contact from './Contact';

const FooterWrapper = styled.footer`
  margin: 1.5rem;
  font-size: 0.75rem;
`;

const Footer = () => {
  return (
    <FooterWrapper>
      Data from{' '}
      <a href="https://food52.com/blog/15413-how-to-convert-whole-spices-to-ground-measurements">
        Food52
      </a>{' '}
      and{' '}
      <a href="https://www.177milkstreet.com/2018/04/taking-the-measure">
        Milk Street Magazine
      </a>
      . <br /> Icons made by{' '}
      <a href="https://www.flaticon.com/authors/good-ware" title="Good Ware">
        Good Ware
      </a>{' '}
      from{' '}
      <a href="https://www.flaticon.com/" title="Flaticon">
        {' '}
        www.flaticon.com
      </a>
      .
      <Contact />
    </FooterWrapper>
  );
};

export default Footer;
