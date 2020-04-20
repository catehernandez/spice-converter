import styled from 'styled-components';
import downArrow from '../assets/down-arrow.svg';

const StyledSelect = styled.select`
  appearance: none;
  background: url(${downArrow}) no-repeat right transparent;
  background-size: auto 14px;
  border: none;
  font: inherit;
  width: min-content;

  &:hover {
    cursor: pointer;
  }
`;

export default StyledSelect;
