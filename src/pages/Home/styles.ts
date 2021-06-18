import styled from 'styled-components';

export const Container = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Menu = styled.div`
  height: 56px;
  width: 100%;
  top: 0;
  background: #202024;
`;

export const Content = styled.div`
  flex: 1;
  width: 100%;
  max-width: 996px;

  display: flex;
  flex-direction: column;
`;

export const Title = styled.h3`
  font-size: 32px;
  font-weight: bold;
  color: #fff;

  margin-top: 64px;
`;

export const ListProjects = styled.div`
  margin-top: 48px;

  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 16px;
`;

export const ProjectItem = styled.div`
  background: #202024;

  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 16px 8px;
  border-radius: 12px;

  > div {
    display: flex;
    align-items: center;
    padding: 0 8px;
  }

  > div:nth-child(2) {
    flex: 1;
    flex-direction: column;
    align-items: flex-start;

    > h1 {
      font-size: 18px;
      font-weight: bold;
      color: #fff;
      margin-bottom: 8px;
    }

    > p {
      font-size: 16px;
      font-weight: normal;
      color: #c7c7ca;
    }
  }

  > div:last-child {
    align-items: flex-start;
    height: 100%;

    > svg {
      height: 16px;
      width: 16px;
      color: #fff;
    }
  }
`;
