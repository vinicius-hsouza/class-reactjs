import styled from 'styled-components';

export const Container = styled.div`
  flex: 1;
  background: tomato;
  display: flex;
  justify-content: center;
  align-items: center;

  div {
    width: 384px;
    background: red;

    display: flex;
    flex-direction: column;
    text-align: center;
  }
`;
