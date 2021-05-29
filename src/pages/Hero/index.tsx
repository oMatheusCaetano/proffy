import React from 'react';

import { AvailableIcons } from '@/components/atoms/img/Icon';
import Button from '@/components/atoms/button/Button';

import {
  Container,
} from './styles';

const Hero: React.FC = () => (
  <Container>
    <Button iconName={AvailableIcons.logo}>
      asdasda lkajsdkasd kalsldada alksadalkds adsd
    </Button>
  </Container>
);

export default Hero;
