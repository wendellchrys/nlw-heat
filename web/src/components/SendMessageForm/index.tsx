import { useContext, useState, FormEvent } from 'react';
import { toast } from 'react-toastify';
import { VscGithubInverted, VscSignOut } from 'react-icons/vsc';
import { FaCheckCircle } from 'react-icons/fa';
import { AuthContext } from '../../contexts/auth';
import { api } from '../../services/api';

import * as S from './styles';
import { useTranslation } from 'react-i18next';

export function SendMessageForm() {
  const { user, signOut } = useContext(AuthContext);
  const [message, setMessage] = useState('');
  const { t } = useTranslation();

async function handleSendMessage(event: FormEvent) {
  event.preventDefault();

  if(!message.trim()) {
    return;
  }

  try {
    await api.post('messages', { message });

    toast.success('Mensagem enviada!', {
      position: "top-right",
      autoClose: 4000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      icon: <FaCheckCircle />
    });

    setMessage('');
  }catch(err: any) {
    toast.error(`A mensagem não pode ser enviada. Erro: ${err.message}`, {
      position: "top-right",
      autoClose: 4000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      icon: <FaCheckCircle />
    });

    console.log(err);

    setMessage(message);
  }

  
}

  return (
    <S.SendMessageFormWrapper>
      <S.SignOutButton onClick={signOut}>
        <VscSignOut size="32" />
      </S.SignOutButton>

      <S.UserInformation>
        <div className="userImage">
          <img src={user?.avatar_url} alt={t('Foto do perfil do Github do usuário que fez o comentário')} />
        </div>
        <strong className="userName">{user?.name}</strong>
        <span className="userGithub">
          <VscGithubInverted size="16" />
          {user?.login}
        </span>
      </S.UserInformation>

      <S.SendMessageForm onSubmit={handleSendMessage} >
        <label htmlFor="message">{t('Mensagem')}</label>
        <textarea
          name="message"
          id="message"
          placeholder={t('Qual sua expectativa para o evento?')}
          onChange={event => setMessage(event.target.value)}
          value={message}
        />

        <button type="submit">{t('Enviar mensagem')}</button>
      </S.SendMessageForm>
    </S.SendMessageFormWrapper>
  );
}