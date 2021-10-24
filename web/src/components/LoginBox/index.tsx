import { useContext } from 'react';
import { useTranslation } from 'react-i18next';
import { VscGithubInverted } from 'react-icons/vsc';

import { AuthContext } from '../../contexts/auth';
import * as S from './styles';

export function LoginBox() {
  const { signInUrl } = useContext(AuthContext);
  const { t } = useTranslation();

  return (
    <S.LoginBoxWrapper>
      <strong>{t('Entre e compartilhe sua mensagem')}</strong>
      <a href={signInUrl} className="signInWithGithub">
        <VscGithubInverted size="24" />
        {t('Entrar com Github')}
      </a>
    </S.LoginBoxWrapper>
  );
}
