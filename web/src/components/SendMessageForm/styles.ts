import styled from 'styled-components';
import bannerGirl from '../../assets/banner-girl.png';

export const SendMessageFormWrapper = styled.div`
  background: #1b1b1f;
  padding: 24px;
  align-self: center;

  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  position: relative;
`;

export const SignOutButton = styled.button`
  background: transparent;
  border: 0;
  color: ${props => props.theme.colors.text2};

  position: absolute;
  left: 24px;
  top: 24px;
  cursor: pointer;

  &:hover {
    filter: brightness(0.9);
  }
`;

export const UserInformation = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;

  .userImage {
    padding: 3px;
    background: linear-gradient(100deg, ${props => props.theme.colors.pink} 0%, ${props => props.theme.colors.yellow} 100%);
    border-radius: 50%;
    line-height: 0;
    
    img {
      width: 94px;
      height: 94px;
      border-radius: 50%;
      border: 6px solid ${props => props.theme.colors.primary};
    }

  }

  .userName {
    font-size: 24px;
    line-height:30px;
    margin-top: 16px;
    color: ${props => props.theme.colors.text2};
  }

  .userGithub {
    display: flex;
    align-items: center;

    margin-top: 8px;
    color: ${props => props.theme.colors.text2};

    svg {
      margin-right: 8px;
    }
  }
  
`;

export const SendMessageForm = styled.form`
  display: flex;
  flex-direction: column;
  align-self: stretch;
  margin-top: 48px;

  background: ${props => props.theme.colors.tertiary};

  label {
    padding: 18px 24px;
    font-size: 20px;
    background: ${props => props.theme.colors.quaternary};
    font-weight: bold;
    text-align: left;
  }

  textarea {
    background: transparent;
    border: 0;
    padding: 24px;
    resize: none;
    height: 160px;
    color: ${props => props.theme.colors.text};
    font-size: 16px;
    line-height: 24px;

    &:focus {
      outline: 0;
    }

    &::placeholder {
      color: ${props => props.theme.colors.gray};
    }
  }

  button {
    align-self: flex-end;
    border: 0;
    background: ${props => props.theme.colors.pink};
    margin: 32px;
    cursor: pointer;
    padding: 0 32px;
    height: 40px;
    color: ${props => props.theme.colors.white};
    font-size: 14px;
    font-weight: bold;
    text-transform: uppercase;
    text-decoration: none;

    display: flex;
    align-items: center;
    justify-content: center;

    &:hover {
      filter: brightness(0.9);
    }
  }
`;