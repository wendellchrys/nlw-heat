import styled from 'styled-components';

export const MessageListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  
  justify-content: space-between;
  align-items: flex-start;

  > div {
    width: 100%;
    display: grid;
    grid-template-columns: 4fr 2fr 1.3fr;

    > img {
      height: 28px;
      margin: 32px 0;
    }

    > div {
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;

      > span {
        padding-right: 5px;
      }

      > img {
        height: 30px;
        cursor: pointer;
        padding-right: 10px;
    }
    }

  }
`;

export const MessageList = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 40px;
  flex: 1;

  .message {
    max-width: 440px;

    &:nth-child(2) {
      margin-left: 80px;
    }

    .messageContent {
      font-size: 20px;
      line-height: 28px;
    }

    .messageUser {
      margin-top: 16px;
      display: flex;
      align-items: center;

      .userImage {
        padding: 2px;
        background: linear-gradient(100deg, ${props => props.theme.colors.pink} 0%, ${props => props.theme.colors.yellow} 100%);
        border-radius: 50%;
        line-height: 0;
        
        img {
          width: 30px;
          height: 30px;
          border-radius: 50%;
          border: 4px solid ${props => props.theme.colors.primary};
        }
      }

      span {
        font-size: 16px;
        margin-left: 12px;
      }
    }
  }
  button {
    background: ${props => props.theme.colors.yellow};
    border: 0;
    width: 100%;
    height: 50px;
    color: ${props => props.theme.colors.black};
    cursor: pointer;

    &:hover {
      filter: brightness(0.9);
    }
  }
`;

export const MessageListAll= styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 40px;
  flex: 1;

  .message {
    max-width: 100%;
    margin-bottom: 30px;;

    .messageContent {
      font-size: 20px;
      line-height: 28px;
    }

    .messageUser {
      margin-top: 16px;
      display: flex;
      align-items: center;

      .userImage {
        padding: 2px;
        background: linear-gradient(100deg, ${props => props.theme.colors.pink} 0%, ${props => props.theme.colors.yellow} 100%);
        border-radius: 50%;
        line-height: 0;
        
        img {
          width: 30px;
          height: 30px;
          border-radius: 50%;
          border: 4px solid ${props => props.theme.colors.primary};
        }
      }

      span {
        font-size: 16px;
        margin-left: 12px;
      }
    }
  }
`;