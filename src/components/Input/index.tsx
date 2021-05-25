import { InputHTMLAttributes } from 'react';

function Input({
  ...rest
}: InputHTMLAttributes<HTMLInputElement>): JSX.Element {
  return <input {...rest} />;
}

export default Input;
