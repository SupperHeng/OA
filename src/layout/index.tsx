// src/layout/index.tsx

import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { View, MenuItem, Button } from 'reshaped';
import { ChevronDown, ChevronUp, Sun, Moon } from 'react-feather';
import { topMenus, leftMenus } from './menus';
import { useRecoilState } from 'recoil';
import { themeState } from '@/store';

const Layout: React.FC = () => {
  // 菜单展开状态 /
  const [show, setShow] = useState(false);

  /** 展示菜单 */
  const viewItem = () => { setShow(!show); }

  /** 主题状态 */
  const [theme, setTheme] =  useRecoilState(themeState);

  /** 切换主题 */
  const changeTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  }

  // 菜单组件
  const showMenu = leftMenus.map(item => (
    item.children ? (
      <View key={item.label}>
        <Button endIcon={show ? ChevronDown : ChevronUp} onClick={viewItem}>{item.label}</Button>
        { 
          show && item.children.map(child => (
            <MenuItem key={child.label} href={child.path}>{child.label}</MenuItem>
          ))
        }
      </View>
    ) : (
      <MenuItem key={item.label} href={item.path}>{item.label}</MenuItem>
    )
  ))

  return (
    <View width="100vw" height="100vh" gap={3}>
      <View direction="column">
        {/* Nav */}
        <View direction="row" height="61px">
          {
            topMenus.map(item => (
              <MenuItem key={item.label} href={item.path}>{item.label}</MenuItem>
            ))
          }
          {/* 切换深色主题 */}
          <Button icon={theme === 'light' ? Sun : Moon} onClick={changeTheme}></Button>
        </View>
        {/* Menus */}
        <View direction="row" width="100vw">
          <View direction="column" gap={3} minHeight={200} width={'264px'}>
            { showMenu }
          </View>

          {/* Main */}
          <View width={"calc(100% - 264px)"} minHeight={200}>
            <Outlet />
          </View>
        
        </View>
      </View>
    </View>
  )
}

export default Layout;