// src/views/Login.tsx

import React, { useState } from 'react';
import { Reshaped, FormControl, Card, TextField, Button } from 'reshaped';
import 'reshaped/themes/reshaped/theme.css';
import { useNavigate } from 'react-router-dom';

const Login: React.FC = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  const pageBox = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100vw",
    height: "100vh",
    backgroundColor: "#f0f2f5",
  };

  // 查看密码
  const tabPassword = () => {
    setShowPassword(!showPassword);
  };

  // 路由跳转
  const jumpToLogin = () => {
    navigate('/home');
  };

  return (
    <div style={pageBox}>
      <Reshaped theme="reshaped">
        <Card>
          <FormControl>
            <FormControl.Label>username</FormControl.Label>
            <TextField name="name" placeholder="Enter your name" />
            <FormControl.Helper>这里是状态提示</FormControl.Helper>
            <FormControl.Label>password</FormControl.Label>
            <TextField
              name="password"
              inputAttributes={{ type: showPassword ? "text" : "password" }}
              placeholder="Enter your password"
              // endIcon={}
            />
            <FormControl.Helper>这里是状态提示</FormControl.Helper>
          </FormControl>
          <Button size='small' onClick={jumpToLogin}>Login in</Button>
        </Card>
      </Reshaped>
    </div>
  );
};

export default Login;