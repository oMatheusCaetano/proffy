import { styled, ThemeColors } from '@/styles/theme';
import { TextSize } from '.';

export interface ContainerProps { color?: ThemeColors, size: TextSize }

export const Container = styled.p<ContainerProps>`
  font-size: ${({ size }) => size};
  color: ${({ color }) => color};
`;
