import { styled, ThemeColors } from '@/styles/theme';

export interface ContainerProps { color?: ThemeColors }

export const Container = styled.p<ContainerProps>`
  line-height: 26px;
  color: ${({ color }) => color};
`;
