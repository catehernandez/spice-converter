import styled from 'styled-components';

const NumericalInput = styled.input`
  appearance: none;
  border: none;
  border-bottom: solid 1.5px #222;
  font: inherit;
  padding-bottom: 2px;
  text-align: center;

  &::-webkit-inner-spin-button,
  &::-webkit-outer-spin-button {
    appearance: none;
    margin: 0;
  }

  -moz-appearance: textfield;
`;

export { NumericalInput };
