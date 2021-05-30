import { ThemeColors } from '@/styles/theme';
import React from 'react';

import { Container } from './styles';

export enum TextSize {
  default = '26px',
  small = '12px',
  large = '36px',
}

type Props = { color?: ThemeColors, size?: TextSize, className?: string }

const Text: React.FC<Props> = ({
  children, className, color = ThemeColors.text, size = TextSize.default,
}) => (
  <Container className={className} color={color} size={size}>{children}</Container>
);

export default Text;
