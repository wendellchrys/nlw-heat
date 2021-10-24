import { useContext } from 'react';
import { ThemeProvider, DefaultTheme } from 'styled-components';
import dark from './styles/themes/dark';
import light from './styles/themes/light';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import * as S from './App.styles';
import { LoginBox } from './components/LoginBox';
import { MessageList } from './components/MessageList';
import { SendMessageForm } from './components/SendMessageForm';
import { AuthContext } from './contexts/auth';

import { GlobalStyles } from './styles/global';
import { usePersistedState } from './utils/usePersistedState';

import './locales';

export function App() {
  const { user } = useContext(AuthContext);

  const [theme, setTheme] = usePersistedState<DefaultTheme>('@dowhile2021:theme', dark);

  function toggleTheme() {
    setTheme(theme.title === 'dark' ? light : dark);
  }

  return (
    <ThemeProvider theme={ theme }>
      <S.ContentWrapper className={`${!!user ? 'contentSigned' : ''}`}>
        <MessageList toggleTheme={toggleTheme} />
        { !!user ? <SendMessageForm /> : <LoginBox />}
        <ToastContainer />
        <GlobalStyles />
      </S.ContentWrapper>
    </ThemeProvider>
  )
}
