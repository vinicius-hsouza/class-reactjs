import { ButtonHTMLAttributes } from 'react';

function Button({
  ...rest
}: ButtonHTMLAttributes<HTMLButtonElement>): JSX.Element {
  return <button type="button" {...rest} />;
}

export default Button;
