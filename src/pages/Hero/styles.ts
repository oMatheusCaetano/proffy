import { styled } from '@/styles/theme';

import Icon from '@/components/atoms/img/Icon';
import Button from '@/components/atoms/button/Button';
import Text from '@/components/atoms/text/Text';

export const Container = styled.div`
  display: grid;
  place-content: center;
  min-height: 100vh;
  padding: 20px;
  background: ${({ theme }) => theme.colors.primary};
`;

export const HeroContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: ${({ theme }) => theme.breakpoints.largeMin}) {
    flex-direction: row;
  }
`;

export const Img = styled(Icon)`
  width: 100%;
`;

export const LogoImg = styled(Img)`
  @media (min-width: ${({ theme }) => theme.breakpoints.largeMin}) {
    width: 30vw;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.largeMin}) {
    width: 25vw;
    margin-right: 10vw;
    max-width: 600px;
  }
`;

export const StyledSlogan = styled(Text)`
  font-size: 16px;
  text-align: center;
  margin: 10px 0 40px 0;

  @media (min-width: ${({ theme }) => theme.breakpoints.smallMin}) {
    font-size: 26px;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.largeMin}) {
    margin: 0;
    font-size: 30px;
    max-width: 350px;
    text-align: left;
  }
`;

export const HeroImg = styled(Img)`
  margin-bottom: 40px;
  width: 80%;

  @media (min-width: ${({ theme }) => theme.breakpoints.smallMin}) {
    margin-bottom: 60px;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.largeMin}) {
    width: 45vw;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.largeMin}) {
    width: 40vw;
    max-width: 800px;
  }
`;

export const ButtonContainer = styled.section`
  padding: 0 20px;

  @media (min-width: ${({ theme }) => theme.breakpoints.extraSmallMin}) {
    & div:first-of-type {
      display: flex;
      justify-content: space-evenly;
    }
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.smallMin}) {
    padding: 0;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.largeMin}) {
    display: flex;
    align-items: center;
    justify-content: space-around;
    margin-top: 35px;
  }
`;

export const StyledButton = styled(Button)`
  width: 100%;
  margin-bottom: 15px;

  @media (min-width: ${({ theme }) => theme.breakpoints.extraSmallMin}) {
    max-width: 40%;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.smallMin}) {
    max-width: 45%;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.mediumMin}) {
    max-width: 47%;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.largeMin}) {
    max-width: none;
    min-width: 300px;
    margin: 0 15px;
  }
`;

export const StyledText = styled(Text)`
  display: flex;
  justify-content: center;
`;

export const StyledHeartIcon = styled(Icon)`
  margin-left: 10px;
  align-items: center;

  @media (min-width: ${({ theme }) => theme.breakpoints.largeMin}) {
    height: 15px;
  }
`;
