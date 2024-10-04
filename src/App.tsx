import React from 'react';
import AppRouter from './routes';
import { Reshaped } from 'reshaped';
import 'reshaped/themes/figma/theme.css';
import 'reshaped/themes/fragments/twitter/theme.css';
import 'reshaped/themes/reshaped/theme.css';
import 'reshaped/themes/slate/theme.css';

const App: React.FC = () => {
  const theme = import.meta.env.VITE_THEME;
  return (
    <Reshaped theme={theme}>
      <AppRouter />
    </Reshaped>
  );
}

export default App;