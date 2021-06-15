import styled from 'styled-components';

export const Container = styled.input`
  height: 56px;
  border: 3px solid #323238;
  background: #202024;
  color: #fff;
  border-radius: 12px;
  padding: 0 16px;

  & + input {
    margin-top: 16px;
  }

  &::placeholder {
    color: #c7c7ca;
  }
`;
