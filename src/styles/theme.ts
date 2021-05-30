import baseStyled, { ThemedStyledInterface } from 'styled-components';

export enum ThemeBreakpoints {
  defaultMin = '1px',
  defaultMax = '499px',

  extraSmallMin = '500px',
  extraSmallMax = '639px',

  smallMin = '640px',
  smallMax = '767px',

  mediumMin = '768px',
  mediumMax = '1023px',

  largeMin = '1024px',
  largeMax = '1279px',

  extraLargeMin = '1280px',
  extraLargeMax = '1535px',

  xExtraLargeMin = '1536px',
  xExtraLargeMax = '',
}

export enum ThemeColors {
  text = '#6a6180',
  textLighten = '#d4c2ff',

  primary = '#8257E5',
  primaryLighten = '#9871F5',
  success = '#04BF58',
}

export enum Params {
  borderRadius = '8px',
}

export const theme = {
  breakpoints: ThemeBreakpoints,
  colors: ThemeColors,
  ...Params,
};

export type Theme = typeof theme;
export const styled = baseStyled as ThemedStyledInterface<Theme>;
