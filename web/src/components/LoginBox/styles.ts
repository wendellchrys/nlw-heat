import styled from 'styled-components';
import bannerGirl from '../../assets/banner-girl.png';

export const LoginBoxWrapper = styled.div`
  height: 100vh;
  width: 100%;
  background: ${props => props.theme.colors.black} url(${bannerGirl}) no-repeat center top;

  padding: 440px 80px 0;
  text-align: center;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  strong {
    font-size: 32px;
    line-height: 36px;
    color: ${props => props.theme.colors.text2};
  }

  .signInWithGithub {
    background: ${props => props.theme.colors.yellow};
    margin-top: 32px;
    padding: 0 40px;
    height: 56px;
    color: ${props => props.theme.colors.secondary};
    font-size: 14px;
    font-weight: bold;
    text-transform: uppercase;
    text-decoration: none;

    display: flex;
    align-items: center;
    justify-content: center;

    svg {
      margin-right: 16px;
    }

    &:hover {
      filter: brightness(0.9);
    }
  }

`;