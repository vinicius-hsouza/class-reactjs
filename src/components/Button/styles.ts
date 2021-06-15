import styled, { css } from 'styled-components';

interface ContainerProps {
  gradient: boolean;
}

export const Container = styled.button<ContainerProps>`
  height: 56px;
  border: none;
  background: #202024;
  border-radius: 12px;

  color: #fff;

  cursor: pointer;

  ${props =>
    props.gradient &&
    css`
      background: linear-gradient(to right, #4c2ffc, #952ffc, #fc2ff5);
    `}
`;
