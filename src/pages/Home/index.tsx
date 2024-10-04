// src/pages/Home/index.tsx

import React from "react";
import { Button, useToast } from "reshaped";
import type { ToastProps } from "reshaped";
import { Check } from 'react-feather';


const Home: React.FC = () => {
  const { show } = useToast();
  const st = () => {
    show({
      text: '天下无敌',
      icon: Check,
      position: 'top'
    }) as ToastProps;
  }
  return (
    <>
      <Button onClick={ st }>Good Night! World!!!</Button>
    </>
  );
};

export default Home;
