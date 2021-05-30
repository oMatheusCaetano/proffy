import { ThemeColors } from '@/styles/theme';
import React from 'react';

import { AvailableIcons } from '@/components/atoms/img/Icon';

import { Container, StyledIcon } from './styles';

type Props = {
  background?: ThemeColors,
  iconName?: AvailableIcons,
  bigger?: boolean,
  className?: string,
  to?: string
}

const Button: React.FC<Props> = ({
  children, iconName, className, to = '', background = ThemeColors.success, bigger = false,
}) => (
  <Container to={to} className={className} background={background} bigger={bigger}>
    {iconName && <StyledIcon iconName={iconName} size={bigger ? 56 : 26} />}
    <span>{children}</span>
  </Container>
);

export default Button;
