import styled from 'styled-components';

const Container = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  text-align: center;
  margin-top: 33%;
  width: fit-content;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

export default Container;
