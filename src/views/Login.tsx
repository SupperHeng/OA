import React from 'react';
import { useNavigate } from 'react-router-dom';

const Login: React.FC = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    // 这里可以添加登录逻辑
    navigate('/');
  };

  return (
    <div>
      <h1>Login Page</h1>
      <button onClick={handleLogin}>Go to Home</button>
    </div>
  );
}

export default Login;