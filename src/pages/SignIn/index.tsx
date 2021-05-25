import { useState } from 'react';

import Input from '../../components/Input';
import Button from '../../components/Button';

import { Container } from './styles';

function SignIn(): JSX.Element {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function handleSubmit(): void {
    console.log({ email, password });
  }

  return (
    <Container>
      <div>
        <h1>Sign In</h1>
        <Button type="button">Continue with GitHub</Button>
        <p>or</p>
        <Input type="text" onChange={e => setEmail(e.target.value)} />
        <Input type="password" onChange={e => setPassword(e.target.value)} />
        <Button type="button" onClick={handleSubmit}>
          Sign in
        </Button>
      </div>
    </Container>
  );
}

export default SignIn;
