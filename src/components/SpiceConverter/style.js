import styled from 'styled-components';

export const SpiceConverterContainer = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  position: relative;
  text-align: center;
  width: fit-content;

  @media (min-width: 576px) {
    flex-direction: row;
  }

  /* Position slightly off horizontal center on larger screens */
  @media (min-width: 767px) {
    margin-bottom: 10%;
  }
`;

export const EqualWrapper = styled.div`
  font-size: 2rem;
  margin: 1rem;
`;
