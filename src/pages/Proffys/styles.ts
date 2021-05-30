import { css } from 'styled-components';
import { styled } from '@/styles/theme';
import Text from '@/components/atoms/text/Text';

export const Container = styled.div`
  min-height: 100vh;
`;

export const Header = styled.header`
  height: 272px;
  background: ${({ theme }) => theme.colors.primary};
`;

export const HeaderContent = css`
  width: 100%;
  margin: 0 auto;
`;

export const Navbar = styled.nav`
  ${HeaderContent}
  height: 50px;
  max-width: ${({ theme }) => theme.breakpoints.largeMin};

  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 15px;

  .arrow-left {
    transition: all.3s;

    &:hover {
      opacity: .7;
    }
  }
`;

export const HeaderTextContainer = styled.div`
  ${HeaderContent}
  max-width: ${({ theme }) => theme.breakpoints.mediumMin};
  height: calc(100% - 80px);

  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const Main = styled.main`
  position: relative;
  background: ${({ theme }) => theme.colors.background};
  min-height: calc(100vh - 272px);
  padding-top: 60px;
`;

export const MainContent = css`
  width: 100%;
  max-width: ${({ theme }) => theme.breakpoints.mediumMin};
  margin: 0 auto;
`;

export const Form = styled.form`
  ${MainContent}
  position: absolute;
  top: -30px;
  left: 50%;
  transform: translateX(-50%);
  background: green;
  height: 60px;
`;

export const ProffysList = styled.ul`
  ${MainContent}

  li {
    position: relative;
    padding: 32px;
    padding-bottom: 145px;
    background: ${({ theme }) => theme.colors.background3};
    border-radius: ${({ theme }) => theme.borderRadius};
    border: 1px solid ${({ theme }) => theme.colors.border};
    margin-bottom: 18px;
  }

  .no-proffys {
    margin: 50px;
    text-align: center;
  }
`;

export const ProffysListItemHeader = styled.header`
  display: flex;
  align-items: center;
  margin-bottom: 26px;

  img:first-of-type {
    width: 70px;
    height: 70px;
    border-radius: 50%;
  }

  div:first-of-type {
    margin-left: 20px;

    h5 {
      color: ${({ theme }) => theme.colors.title}
    }
  }

`;

export const ProffysListItemText = styled(Text)`
  font-size: 16px;
  padding-right: 50px;
`;

export const ProffysListItemFooter = styled.footer`
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  background: ${({ theme }) => theme.colors.background2};
  height: 120px;
  border-top: 1px solid ${({ theme }) => theme.colors.border};
  border-bottom-left-radius:${({ theme }) => theme.borderRadius};
  border-bottom-right-radius:${({ theme }) => theme.borderRadius};

  padding: 32px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  div:first-of-type {
    display: flex;
    align-items: center;

    h5 {
      margin-left: 10px;
      color: ${({ theme }) => theme.colors.primary}
    }
  }
`;
