import React from 'react';
import AppRouter from './routes';
import { Reshaped } from 'reshaped';
import 'reshaped/themes/figma/theme.css';
import 'reshaped/themes/fragments/twitter/theme.css';
import 'reshaped/themes/reshaped/theme.css';
import 'reshaped/themes/slate/theme.css';

const App: React.FC = () => {
  return (
    <Reshaped theme="reshaped">
      <AppRouter />
    </Reshaped>
  );
}

export default App;