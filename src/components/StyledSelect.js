import styled from 'styled-components';
import downArrow from '../assets/down-arrow.svg';

const StyledSelect = styled.select`
  appearance: none;
  background: url(${downArrow}) no-repeat right transparent;
  border: none;
  font: inherit;

  &:hover {
    cursor: pointer;
  }
`;

export default StyledSelect;
