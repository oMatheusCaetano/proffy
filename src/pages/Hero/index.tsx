import React from 'react';

import { AvailableIcons } from '@/components/atoms/img/Icon';
import { TextSize } from '@/components/atoms/text/Text';

import { ThemeColors } from '@/styles/theme';
import {
  Container,
  HeroContainer,
  LogoImg,
  HeroImg,
  StyledButton,
  ButtonContainer,
  StyledText,
  StyledHeartIcon,
  StyledSlogan,
} from './styles';

const Hero: React.FC = () => (
  <Container>
    <HeroContainer>
      <div>
        <LogoImg iconName={AvailableIcons.logo} />

        <StyledSlogan color={ThemeColors.textLighten}>
          Sua plaforma de estudos online.
        </StyledSlogan>
      </div>

      <HeroImg iconName={AvailableIcons.hero} />
    </HeroContainer>

    <ButtonContainer>
      <div>
        <StyledButton big background={ThemeColors.primaryLighten} iconName={AvailableIcons.study}>
          Estudar
        </StyledButton>
        <StyledButton big iconName={AvailableIcons.tv}>
          Dar aulas
        </StyledButton>
      </div>

      <StyledText size={TextSize.small} color={ThemeColors.textLighten}>
        Total de 285 conexões já realizadas
        <StyledHeartIcon iconName={AvailableIcons.heart} />
      </StyledText>
    </ButtonContainer>
  </Container>
);

export default Hero;
