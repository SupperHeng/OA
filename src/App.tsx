import React from 'react';
import AppRouter from './router';
import { Reshaped } from 'reshaped';

const App: React.FC = () => {
  return (
    <Reshaped theme="reshaped">
      <AppRouter />
    </Reshaped>
  );
}

export default App;