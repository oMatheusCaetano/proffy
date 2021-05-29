import baseStyled, { ThemedStyledInterface } from 'styled-components';

export const theme = {
  breakpoints: {
    default: { min: '1px', max: '639px' },
    small: { min: '640px', max: '767' },
    medium: { min: '768px', max: '1023px' },
    large: { min: '1024px', max: '1279px' },
    extraLarge: { min: '1280px', max: '1535px' },
    xExtraLarge: { min: '1536px', max: '' },
  },

  colors: {
    text: '#6a6180',
  },
};

export type Theme = typeof theme;
export const styled = baseStyled as ThemedStyledInterface<Theme>;
