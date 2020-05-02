import styled from 'styled-components';

export const SpiceConverterContainer = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  position: relative;
  top: 10%;
  text-align: center;
  width: fit-content;

  @media (min-width: 768px) {
    flex-direction: row;
    top: 28%;
  }
`;

export const EqualWrapper = styled.div`
  font-size: 2rem;
  margin: 1rem;
`;
