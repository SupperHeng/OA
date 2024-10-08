// src/layout/menus.ts

interface menuType {
  label: string
  path?: string
  children?: menuType[]
}

const topMenus: menuType[] = [
  {
    label: 'Home',
    path: '/home',
  },
  {
    label: 'Themes',
    path: '/themes',
  },
]

const leftMenus: menuType[] = [
  {
    label: '展开菜单',
    children: [
      {
        label: '展开1',
        path: '/themes'
      },
      {
        label: '展开2',
        path: '/themes'
      },
      {
        label: '展开3',
        path: '/themes'
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