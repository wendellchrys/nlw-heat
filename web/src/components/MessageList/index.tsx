import { useContext, useEffect, useState } from 'react';
import io from 'socket.io-client';
import Switch from 'react-switch';
import Modal from 'react-modal';

import { ThemeContext } from 'styled-components';
import { useTranslation } from 'react-i18next';
import { api } from '../../services/api';

import * as S from './styles';

import iconBrazil from '../../assets/brazil.svg';
import iconEua from '../../assets/eua.svg';

interface MessageListProps {
  toggleTheme: () => void;
}

type Message = {
  id: string;
  text: string;
  user: {
    name: string;
    // eslint-disable-next-line camelcase
    avatar_url: string;
  };
};

const messagesQueue: Message[] = [];

const socket = io('http://localhost:4000');

socket.on('new_message', (newMessage: Message) => {
  messagesQueue.push(newMessage);
});

export function MessageList({ toggleTheme }: MessageListProps) {
  const [messages, setMessages] = useState<Message[]>([]);
  const [messagesAll, setMessagesAll] = useState<Message[]>([]);
  const [textMessages, setTextMessages] = useState('Exibir todas mensagens');
  const [displayAllMessages, setDisplayAllMessages] = useState(false);
  const { title, logo, colors } = useContext(ThemeContext);

  const { t, i18n } = useTranslation();

  const customStylesModal = {
  content: {
    background: `${colors.primary}`,
    width: "80%",
    maxWidth: "900px",
    margin: "0 auto"
  },
};

  function changeLanguage(language: any) {
    i18n.changeLanguage(language);
    console.log('alterei');
  };

  function getAllMessages() {
    setDisplayAllMessages(true);
  }
  function closeGetAllMessages() {
    setDisplayAllMessages(false);
  }

  useEffect(() => {
    if(displayAllMessages) {
      setTextMessages('Exibir últimas mensagens');
      console.log(textMessages);
    }
    else {
      setTextMessages('Exibir todas mensagens');
      console.log(textMessages);
    }
  }, [displayAllMessages]);

  useEffect(() => {
    const timer = setInterval(() => {
      if (messagesQueue.length > 0) {
        setMessages((prevState) => [messagesQueue[0], prevState[0], prevState[1]].filter(Boolean));

        messagesQueue.shift();
      }
    }, 3000);
  }, []);

  useEffect(() => {
    api.get<Message[]>('messages/last3').then((response) => {
      setMessages(response.data);
    });
    api.get<Message[]>('messages/all').then((response) => {
      setMessagesAll(response.data);
    });
  }, []);

  return (
    <S.MessageListWrapper>
      <div>
        <img
          src={logo}
          alt={t('Imagem de uma logo representando o evento de programação DoWhile 2021')}
        />
        <div>
          <span>{t('Tema Dark')}: </span>
          <Switch
            onChange={toggleTheme}
            checked={title === 'dark'}
            checkedIcon={false}
            uncheckedIcon={false}
            height={10}
            width={40}
            handleDiameter={20}
            onColor={colors.yellow}
            offColor={colors.text2}
            offHandleColor={colors.gray}
          />
        </div>
        <div>
          <img
            onClick={() => changeLanguage('pt-BR')}
            src={iconBrazil}
            alt={t(
              'Ícone representando a bandeira do Brasil para que ao clicar seja trocado o idioma da aplicação para Português',
            )}
          />
          <img
            onClick={() => changeLanguage('en-US')}
            src={iconEua}
            alt={t(
              'Ícone representando a bandeira dos Estados Unidos para que ao clicar seja trocado o idioma da aplicação para o Inglês',
            )}
          />
        </div>
      </div>
      <S.MessageList>
        {messages.map((message) => (
          <li key={message.id} className="message">
            <p className="messageContent">{message.text}</p>
            <div className="messageUser">
              <div className="userImage">
                <img
                  src={message.user.avatar_url}
                  alt={t('Foto do perfil do Github do usuário que fez o comentário')}
                />
              </div>
              <span>{message.user.name}</span>
            </div>
          </li>
        ))}
        <button onClick={getAllMessages}>
          {t('Exibir todas mensagens')}
        </button>
      </S.MessageList>
        
      <Modal
          isOpen={displayAllMessages}
          onRequestClose={closeGetAllMessages}
          style={customStylesModal}
          contentLabel="Example Modal"
        >
          <S.MessageListAll>
            {messagesAll.map((message) => (
              <li key={message.id} className="message">
                <p className="messageContent">{message.text}</p>
                <div className="messageUser">
                  <div className="userImage">
                    <img
                      src={message.user.avatar_url}
                      alt="Foto do perfil do Github do usuário que fez o comentário"
                    />
                  </div>
                  <span>{message.user.name}</span>
                </div>
              </li>
            ))}
          </S.MessageListAll>
        </Modal>
    </S.MessageListWrapper>
  );
}
