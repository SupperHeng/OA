// /src/router/index.tsx

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import Login from '../pages/Login';

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