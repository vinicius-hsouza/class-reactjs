import styled from 'styled-components';

export const Container = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;

  div {
    width: 384px;

    display: flex;
    flex-direction: column;
    text-align: center;
  }
`;

export const Title = styled.h1`
  font-size: 48px;
  font-weight: bold;
  color: #fff;

  margin-bottom: 64px;
`;

export const Text = styled.p`
  font-weight: normal;
  color: #c7c7ca;

  margin: 32px 0;
`;
