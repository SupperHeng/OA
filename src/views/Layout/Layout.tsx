import React from 'react';
import { Outlet } from 'react-router-dom';
import { Container, View, Text, Link } from 'reshaped';

interface LayoutProps {
  children?: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <Container attributes={{ style: { display: 'flex', minWidth: '100vw', minHeight: '100vh', flexDirection: 'column' } }}>
      <View as="header" attributes={{ style: { background: '#001529', color: '#fff', padding: '0 16px', display: 'flex', alignItems: 'center', height: '64px' } }}>
        <Text attributes={{ style: { flex: 1 } }}>Logo</Text>
        <nav>
          <Link href="/" attributes={{ style: { color: '#fff', margin: '0 16px' } }}>Home</Link>
          <Link href="/login" attributes={{ style: { color: '#fff', margin: '0 16px' } }}>Login</Link>
        </nav>
      </View>
      <View attributes={{ style: { display: 'flex', flex: 1 } }}>
        <View as="aside" attributes={{ style: { width: '200px', background: '#fff', padding: '16px' } }}>
          <ul>
            <li><Link href="/">Home</Link></li>
            <li><Link href="/login">Login</Link></li>
          </ul>
        </View>
        <View as="main" attributes={{ style: { flex: 1, padding: '16px' } }}>
          {children}
          <Outlet /> {/* 渲染子路由 */}
        </View>
      </View>
      <View as="footer" attributes={{ style: { background: '#001529', color: '#fff', textAlign: 'center', padding: '16px' } }}>
        <Text>Reshaped Layout ©2023 Created by Your Name</Text>
      </View>
    </Container>
  );
};

export default Layout;