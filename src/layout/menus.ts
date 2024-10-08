// src/layout/menus.ts

const topMenus = [
  {
    label: 'Home',
    path: '/home',
  },
  {
    label: 'Themes',
    path: '/themes',
  },
]

const leftMenus = [
  {
    label: '展开菜单',
    children: [
      {
        label: '展开1',
        path: './'
      },
      {
        label: '展开2',
        path: './'
      },
      {
        label: '展开3',
        path: './'
      },
    ]
  },
  {
    label: 'Themes1',
    path: '/themes',
  },
  {
    label: 'Themes 12321Page',
    path: '/themes',
  },
  {
    label: 'Themes 213Page',
    path: '/themes',
  },
]
export { topMenus, leftMenus };