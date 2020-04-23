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
      <AboutContent show={showAbout ? true : false}>About Content</AboutContent>
    </AboutButton>
  );
};

export default About;
