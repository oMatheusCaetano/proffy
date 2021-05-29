import { ThemeColors } from '@/styles/theme';
import React from 'react';

import { Container } from './styles';

type Props = { color?: ThemeColors }

const Icon: React.FC<Props> = ({ children, color = ThemeColors.text }) => (
  <Container color={color}>{children}</Container>
);

export default Icon;
