import { atom } from "recoil";

/** 主题状态（用于切换黑白主题） */
export const themeState = atom({
  key: 'themeState',
  default: 'light'
})