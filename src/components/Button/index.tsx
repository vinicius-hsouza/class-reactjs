import { ButtonHTMLAttributes } from 'react';

import { Container } from './styles';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  gradient?: boolean;
}

function Button({ gradient = false, ...rest }: ButtonProps): JSX.Element {
  return <Container gradient={gradient} type="button" {...rest} />;
}

export default Button;
