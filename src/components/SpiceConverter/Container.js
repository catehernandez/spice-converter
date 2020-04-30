import styled from 'styled-components';

const Container = styled.div`
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

export default Container;
