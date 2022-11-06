import { FC } from 'react';

import { StyleErrorContainer } from './Error.styled';

export interface IErrorProps {
  error?: string,
}

const Error: FC<IErrorProps> = ({ error }) => (
  <StyleErrorContainer>
    {error}
  </StyleErrorContainer>
);

export default Error;
