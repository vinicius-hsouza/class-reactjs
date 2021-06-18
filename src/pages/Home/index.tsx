import { CircularProgressbar } from 'react-circular-progressbar';
import { MdMoreHoriz } from 'react-icons/md';

import Button from '../../components/Button';

import 'react-circular-progressbar/dist/styles.css';
import {
  Container,
  Menu,
  Content,
  Title,
  ListProjects,
  ProjectItem,
} from './styles';

export default function Home(): JSX.Element {
  return (
    <Container>
      <Menu />
      <Content>
        <Title>Projects</Title>
        <ListProjects>
          <ProjectItem>
            <div>
              <CircularProgressbar
                styles={{
                  root: { width: 64 },
                  path: {
                    stroke: '#7159c1',
                    transition: 'stroke-dashoffset 0.5s ease 0s',
                  },
                  trail: { stroke: '#323238' },
                  text: { fill: '#fff' },
                }}
                strokeWidth={10}
                value={60}
                text="60%"
              />
            </div>
            <div>
              <h1>Projeto 1</h1>
              <p>15 tarefas</p>
            </div>
            <div>
              <MdMoreHoriz />
            </div>
          </ProjectItem>
          <ProjectItem>
            <div>
              <CircularProgressbar
                styles={{
                  root: { width: 64 },
                  path: {
                    stroke: 'blue',
                    transition: 'stroke-dashoffset 0.5s ease 0s',
                  },
                  trail: { stroke: '#323238' },
                  text: { fill: '#fff' },
                }}
                strokeWidth={10}
                value={30}
                text="30%"
              />
            </div>
            <div>
              <h1>Projeto 1</h1>
              <p>15 tarefas</p>
            </div>
            <div>
              <MdMoreHoriz />
            </div>
          </ProjectItem>
          <ProjectItem>
            <div>
              <CircularProgressbar
                styles={{
                  root: { width: 64 },
                  path: {
                    stroke: '#d4f807',
                    transition: 'stroke-dashoffset 0.5s ease 0s',
                  },
                  trail: { stroke: '#323238' },
                  text: { fill: '#fff' },
                }}
                strokeWidth={10}
                value={90}
                text="90%"
              />
            </div>
            <div>
              <h1>Projeto 1</h1>
              <p>15 tarefas</p>
            </div>
            <div>
              <MdMoreHoriz />
            </div>
          </ProjectItem>

          <Button> + Add project</Button>
        </ListProjects>
      </Content>
    </Container>
  );
}
