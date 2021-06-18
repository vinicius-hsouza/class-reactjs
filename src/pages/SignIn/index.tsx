import { useState } from 'react';

import Input from '../../components/Input';
import Button from '../../components/Button';

import { Container, Title, Text } from './styles';

function SignIn(): JSX.Element {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function handleSubmit(): void {
    // eslint-disable-next-line no-console
    console.log({ email, password });
  }

  return (
    <Container>
      <div>
        <Title>Sign In</Title>
        <Button type="button">
          Continue with <strong>GitHub</strong>
        </Button>
        <Text>or</Text>
        <Input
          type="text"
          placeholder="E-mail"
          onChange={e => setEmail(e.target.value)}
        />
        <Input
          type="password"
          placeholder="Senha"
          onChange={e => setPassword(e.target.value)}
          autoComplete="new-password"
        />
        <Button
          type="button"
          style={{ marginTop: 32 }}
          gradient
          onClick={handleSubmit}
        >
          Sign in
        </Button>
      </div>
    </Container>
  );
}

export default SignIn;
