// /src/router/index.tsx

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import Login from '../pages/Login';

const AppRouter: React.FC = () => {
  return (
    <Router>
      <Routes>
          <Route index element={<Login />} />
          <Route path='login' element={<Login />} />
          <Route path="home" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default AppRouter;