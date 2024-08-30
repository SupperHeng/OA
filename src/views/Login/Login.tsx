// src/views/Login.tsx
import React from 'react';
import { Button, Container, TextField, Reshaped, Card } from 'reshaped';
import 'reshaped/themes/reshaped/theme.css';
import { useNavigate } from 'react-router-dom';
import './Login.css'; // 引入自定义样式

const Login: React.FC = () => {
  const navigate = useNavigate();
  const handleLogin = () => {
    navigate('/home');
  };
  return (
    <Reshaped theme="reshaped">
      <div className="login-wrapper">
        <Card className="login-card">
          <Container padding={32} align="center">
            <h2 className="login-title">Login</h2>
            <div className="login-field">
              <TextField name="username" placeholder="Username" />
            </div>
            <div className="login-field">
              <TextField name="password" inputAttributes={{ type: "password" }} placeholder="Password" />
            </div>
            <Button onClick={handleLogin}>Login</Button>
          </Container>
        </Card>
      </div>
    </Reshaped>
  );
};

export default Login;