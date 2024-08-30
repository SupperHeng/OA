// /src/views/Home/Home.tsx

import React from 'react';
import { useNavigate } from 'react-router-dom';

const Home: React.FC = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // 这里可以添加登出逻辑
    navigate('/login');
  };

  return (
    <div>
      <h1>Home Page</h1>
      <button onClick={handleLogout}>Go to Login</button>
    </div>
  );
}

export default Home;