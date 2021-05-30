import { ThemeColors } from '@/styles/theme';
import React from 'react';

import { AvailableIcons } from '@/components/atoms/img/Icon';

import { Container, StyledIcon } from './styles';

type Props = {
  background?: ThemeColors,
  iconName?: AvailableIcons,
  big?: boolean,
  className?: string,
}

const Button: React.FC<Props> = ({
  children, iconName, className, background = ThemeColors.success, big = false,
}) => (
  <Container className={className} background={background} big={big}>
    {iconName && <StyledIcon iconName={iconName} size={big ? 56 : 36} />}
    <span>{children}</span>
  </Container>
);

export default Button;
