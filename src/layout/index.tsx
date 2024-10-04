// src/layout/index.tsx

import React from 'react';
import { Outlet } from 'react-router-dom';
import { View, MenuItem } from 'reshaped';
import { topMenus, leftMenus } from './menus';

const Layout: React.FC = () => {
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
        <View direction="row" width="100vw" backgroundColor='page'>
          <View direction="column" gap={3} minHeight={200} width={'264px'}>
            {
              leftMenus.map((item, index) => (
                <MenuItem key={index} href={item.path}>{item.label}</MenuItem>
              ))
            }
          </View>
          {/* Main */}
          <View width={"calc(100% - 264px)"} minHeight={200}>
            <Outlet />
          </View>
          {/* Footer */}
          {/* <View width="100vw" height={20} backgroundColor='critical'></View> */}
        </View>
      </View>
    </View>
  )
}

export default Layout;