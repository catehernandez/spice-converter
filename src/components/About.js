import React, { useState } from 'react';
import styled from 'styled-components';

const AboutButton = styled.button`
  background-color: transparent;
  color: #222;
  cursor: pointer;
  border: none;
  border-bottom: 2px solid hsl(101.2, 20%, 50%);
  font: 500 1.1rem 'Lora', serif;
  padding: 0;
  text-align: left;
`;

const AboutContent = styled.div`
  height: 0;
  padding-top: 1.1rem;
  visibility: hidden;
  width: 0;

  ${(props) =>
    props.show &&
    `
  visibility: visible;
  height: auto;
  width: auto;
  `}
`;

const About = () => {
  const [showAbout, toggleAbout] = useState(false);

  return (
    <React.Fragment>
      <AboutButton onClick={() => toggleAbout(!showAbout)}>ABOUT</AboutButton>
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
    </React.Fragment>
  );
};

export default About;
