// /src/router/index.tsx

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from '../views/Home';
import Login from '../views/Login';

const AppRouter: React.FC = () => {
  return (
    <Router>
      <Routes>
        {/* 留给自定义layout用的 */}
        {/* <Route path="/" element={<Layout />}> */}
          <Route index element={<Login />} />
          <Route path='login' element={<Login />} />
          <Route path="home" element={<Home />} />
        {/* </Route> */}
      </Routes>
    </Router>
  );
}

export default AppRouter;