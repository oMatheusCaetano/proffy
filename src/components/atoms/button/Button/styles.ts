import { Link } from 'react-router-dom';
import { css } from 'styled-components';
import { styled, ThemeColors } from '@/styles/theme';
import { darken } from 'polished';

import Icon from '@/components/atoms/img/Icon';

export interface ContainerProps { background: ThemeColors, bigger: boolean }

export const Container = styled(Link)<ContainerProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  line-height: 26px;
  color: white;
  font-weight: bold;
  background: ${({ background }) => background};
  border: none;
  border-radius: ${({ theme }) => theme.borderRadius};
  height: 56px;
  padding: 0 40px;
  font-family: Archivo, Poppins, sans-serif;
  text-decoration: none;
  transition: .3s;

  &:hover {
    background: ${({ background }) => darken(0.1, background)};
  }

  span {
    font-family: Archivo, Poppins, sans-serif;
  }

  ${({ bigger }) => bigger && css`
    span {
      font-size: 24px;
    }
    
    height: 104px;
  `}
`;

export const StyledIcon = styled(Icon)`
  margin-right: 20px;
`;
