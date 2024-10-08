// src/layout/index.tsx

import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { View, MenuItem, Button } from 'reshaped';
import { topMenus, leftMenus } from './menus';
import { ChevronDown, ChevronUp } from 'react-feather';

const Layout: React.FC = () => {
  // 组件展开收缩
  const [show, setShow] = useState(false);

  // 展示菜单
  const viewItem = () => {
    setShow(!show);
  }

  // 菜单组件
  const showItem = leftMenus.map(item => (
    item.children ? (
      <>
        <Button key={item.label} color='primary' endIcon={show ? ChevronDown : ChevronUp} onClick={viewItem}>{item.label}</Button>
        { 
          show && item.children.map(child => (
            <MenuItem key={child.label} href={child.path}>{child.label}</MenuItem>
          ))
        }
      </>
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
            topMenus.map((item, index) => (
              <View key={index} width={100}>
                <MenuItem href={item.path}>{item.label}</MenuItem>
              </View>
            ))
          }
        </View>
        {/* Menus */}
        <View direction="row" width="100vw">
          <View direction="column" gap={3} minHeight={200} width={'264px'}>
            { showItem }
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