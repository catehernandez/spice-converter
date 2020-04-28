import React, { useState } from 'react';
import styled from 'styled-components';

const AboutButton = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  font: inherit;
  text-align: left;
`;

const AboutContent = styled.div`
  background-color: #efefef;
  height: 0;
  visibility: hidden;

  ${(props) =>
    props.show &&
    `
  visibility: visible;
  height: auto;
  `}
`;

const About = () => {
  const [showAbout, toggleAbout] = useState(false);

  return (
    <AboutButton onClick={() => toggleAbout(!showAbout)}>
      About
      <AboutContent show={showAbout ? true : false}>
        Spice data from{' '}
        <a href="https://food52.com/blog/15413-how-to-convert-whole-spices-to-ground-measurements">
          Food52
        </a>{' '}
        and{' '}
        <a href="https://www.177milkstreet.com/2018/04/taking-the-measure">
          Milk Street Magazine
        </a>
        . Icons made by{' '}
        <a href="https://www.flaticon.com/authors/good-ware" title="Good Ware">
          Good Ware
        </a>{' '}
        from{' '}
        <a href="https://www.flaticon.com/" title="Flaticon">
          {' '}
          flaticon.com
        </a>
        .
      </AboutContent>
    </AboutButton>
  );
};

export default About;
