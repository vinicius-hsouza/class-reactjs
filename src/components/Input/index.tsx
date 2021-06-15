import { InputHTMLAttributes } from 'react';

import { Container } from './styles';

function Input({
  ...rest
}: InputHTMLAttributes<HTMLInputElement>): JSX.Element {
  return <Container {...rest} />;
}

export default Input;
