import { css } from 'styled-components';
import { styled } from '@/styles/theme';

export interface ContainerProps { lighten?: boolean }

export const Container = styled.p<ContainerProps>`
  line-height: 26px;
  color: ${({ theme }) => theme.colors.text};

  ${({ lighten }) => lighten && css`
  color: ${({ theme }) => theme.colors.textLighten};
  `}

`;
