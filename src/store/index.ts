 /** 
  * 教学：使用 Recoil 管理全局状态
  * 
  * 本文将介绍如何使用 Recoil 库来管理 React 应用中的全局状态。我们将详细解释 atom 的概念，并展示如何在组件中使用它们。
  * 
  * 1. 配置 RecoilRoot
  * 
  * 在应用的根组件中，使用 RecoilRoot 包裹整个应用，以提供 Recoil 状态管理的上下文：
  * 
  * import React from 'react';
  * import ReactDOM from 'react-dom';
  * import { RecoilRoot } from 'recoil';
  * import App from './App';
  * 
  * ReactDOM.render(
  *   <RecoilRoot>
  *     <App />
  *   </RecoilRoot>,
  *   document.getElementById('root')
  * );
  * 
  * 2. 定义 Atom
  * 
  * Atom 是 Recoil 中的状态单元。你可以使用 atom 函数来定义一个 Atom：
  * 
  * import { atom } from 'recoil';
  * 
  * export const themeState = atom({
  *   key: 'themeState', // 每个 Atom 需要一个唯一的 key
  *   default: 'light',  // 默认值
  * });
  * 
  * 3. 使用 Atom
  * 
  * 在组件中使用 useRecoilState 钩子来读取和更新 Atom 的值：
  * 
  * import React from 'react';
  * import { useRecoilState } from 'recoil';
  * import { themeState } from './store';
  * 
  * const ThemeToggle: React.FC = () => {
  *   const [theme, setTheme] = useRecoilState(themeState);
  * 
  *   const toggleTheme = () => {
  *     setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  *   };
  * 
  *   return (
  *     <div>
  *       <p>Current theme: {theme}</p>
  *       <button onClick={toggleTheme}>Toggle Theme</button>
  *     </div>
  *   );
  * };
  * 
  * export default ThemeToggle;
  * 
  * 4. 使用 Selector（可选）
  * 
  * Selector 是一种派生状态，可以基于 Atom 或其他 Selector 计算得出。你可以使用 selector 函数来定义一个 Selector：
  * 
  * import { selector } from 'recoil';
  * import { themeState } from './store';
  * 
  * export const themeDescription = selector({
  *   key: 'themeDescription',
  *   get: ({ get }) => {
  *     const theme = get(themeState);
  *     return theme === 'light' ? 'Light Mode' : 'Dark Mode';
  *   },
  * });
  * 
  * 5. 使用 Selector
  * 
  * 在组件中使用 useRecoilValue 钩子来读取 Selector 的值：
  * 
  * import React from 'react';
  * import { useRecoilValue } from 'recoil';
  * import { themeDescription } from './store';
  * 
  * const ThemeDescription: React.FC = () => {
  *   const description = useRecoilValue(themeDescription);
  * 
  *   return <p>{description}</p>;
  * };
  * 
  * export default ThemeDescription;
  * 
  * 通过以上步骤，你可以轻松地使用 Recoil 管理和派生全局状态。
  */