import React from 'react';

import { Container } from './styles';

type Props = {
  lighten?: boolean
}

const Icon: React.FC<Props> = ({ children, lighten }) => (
  <Container lighten={lighten}>{children}</Container>
);

export default Icon;
