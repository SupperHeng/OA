// src/pages/Home/index.tsx

import React from "react";
import { useNavigate } from "react-router-dom";
import { Button, useToast } from "reshaped";
import type { ToastProps } from "reshaped";
import { Check } from 'react-feather';


const Home: React.FC = () => {
  const navigate = useNavigate();
  const { show } = useToast();
  const st = () => {
    show({
      text: '天下无敌',
      icon: Check,
      position: 'top'
    }) as ToastProps;
  }
  const jumpToLogin = () => {
    navigate("/login");
  }
  return (
    <>
      <Button onClick={ st }>Good Night! World!!!</Button>
      <Button onClick={ jumpToLogin }>Click this to login path.</Button>
    </>
  );
};

export default Home;
