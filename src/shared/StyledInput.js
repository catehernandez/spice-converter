import styled from 'styled-components';

const NumericalInput = styled.input`
  appearance: none;
  background-color: transparent;
  border: none;
  border-bottom: solid 1.5px #222;
  font: inherit;
  margin: 1rem;
  text-align: center;
  width: 3em;

  /* Remove numerical spinner */
  &::-webkit-inner-spin-button,
  &::-webkit-outer-spin-button {
    appearance: none;
    margin: 0;
  }

  -moz-appearance: textfield;
`;

export { NumericalInput };
