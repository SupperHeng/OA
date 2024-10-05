# React + TypeScript + SWC + Vite + Reshaped + React-Feather
介绍写不了一点

### 组件库和Icon官方文档参考:

- [Reshaped Storybook](https://reshaped.so/storybook/index.html)
- [React-Feather](https://feathericons.com/)

### 项目结构
```
React + TypeScript + SWC + Vite + Reshaped + React-Feather
```

### 项目依赖（任选一个包管理工具）：
```
npm i
pnpm i
yarn
```

### 启动项目：
```
npm run dev
pnpm run dev
yarn dev
```

### 检查代码
```
npm lint
pnpm lint
yarn lint
```

## 分支命名：

- reference [vue](https://github.com/vuejs/vue/blob/dev/.github/COMMIT_CONVENTION.md) specification ([Angular](https://github.com/conventional-changelog/conventional-changelog/tree/master/packages/conventional-changelog-angular))
  - `feat` 添加新功能
  - `fix` 修复问题/BUG
  - `style` 代码风格相关，不影响运行结果
  - `perf` 优化/性能提升
  - `refactor` 重构
  - `revert` 撤销编辑
  - `test` 测试相关
  - `docs` 文档/注释
  - `chore` 依赖更新/脚手架配置修改等
  - `ci` 持续集成
  - `types` 类型定义文件更改
  - `wip` 开发中

### feather-icon的使用方法
```
feather-icon 的命名标准是【大驼峰】
打开官网会发现很多类似a-b的
这种我们直接改成大驼峰命名即可，比如:
alert-circle => AlertCircle 
```

### 版本调试
```
yarn vite --mode --production   # 切换生产环境调试
yarn vite --mode --development  # 切换开发模式调试
```

### Docker部署
```
fontend-project/
├── dist/
├── Dockerfile
├── nginx.conf
├── package.json
└── yarn.lock
```