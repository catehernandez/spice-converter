import styled from 'styled-components';

const Container = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  padding-bottom: 12%;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

export default Container;
