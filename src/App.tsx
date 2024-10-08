import React, { useEffect } from 'react';
import AppRouter from './routes';
import { Reshaped, Theme } from 'reshaped';
import { useRecoilState } from 'recoil';
import { themeState } from './store';
import 'reshaped/themes/figma/theme.css';
import 'reshaped/themes/fragments/twitter/theme.css';
import 'reshaped/themes/reshaped/theme.css';
import 'reshaped/themes/slate/theme.css';

const App: React.FC = () => {
  const theme = import.meta.env.VITE_THEME;
  const [themeMode] = useRecoilState(themeState);
  useEffect(() => {
    document.documentElement.setAttribute('data-rs-color-mode', themeMode);
    localStorage.setItem('theme', themeMode);
  }, [themeMode]);
  return (
    <Reshaped theme={theme} defaultColorMode={themeMode}>
      <Theme colorMode={themeMode}>
        <AppRouter />
      </Theme>
    </Reshaped>
  );
}

export default App;