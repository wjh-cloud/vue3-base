Cube-Admin-Vue 是一个开箱即用的 Vue 3 后台管理基础脚手架，集成路由、状态管理、请求封装、按需自动导入与原子化 CSS，克隆后即可直接编写页面。

## 技术栈

- **框架**：Vue 3（`<script setup>`）+ TypeScript
- **构建**：Vite 6
- **UI 库**：Element Plus（按需自动导入，已配中文语言包）
- **样式**：Tailwind CSS v4（`@tailwindcss/vite` 零配置）+ Sass
- **路由**：Vue Router 4（history/hash 由环境变量切换）
- **状态**：Pinia + 持久化插件（`pinia-plugin-persistedstate`）
- **请求**：Axios（统一封装在 `src/utils/request.ts`）
- **自动导入**：`unplugin-auto-import`（ref/computed/useRouter 等）+ `unplugin-vue-components`（Element Plus 组件）
- **图标**：`@element-plus/icons-vue` + 本地 SVG 雪碧图（`SvgIcon` 全局组件）
- **规范**：ESLint + Prettier + Husky + lint-staged

## 新增一个页面（3 步）

1. 在 `src/views/` 下新建页面组件，例如 `src/views/user/index.vue`。
2. 在 `src/router/index.ts` 的 `Layout` 子路由中注册路由（带 `meta.title`）。
3. 直接写页面：`ref`/`computed`/`useRouter` 与 `el-*` 组件均无需手动 import；接口在 `src/api/` 下新增模块并调用 `request`。

## 许可证

本项目使用 [MIT 许可证](LICENSE)，你可以自由地使用、修改、分发此项目。



## 安装和使用

2. 安装依赖：

   ```bash
   cd Cube-Admin-Vue
   npm install
   ```

3. 运行开发环境：

   ```bash
   npm run dev
   ```

4. 生产构建：

   ```bash
   npm run build
   ```

## 项目目录结构

```txt
Cube-Admin-Vue/
│
├── .husky/							  # Husky 配置和 Git 钩子脚本
│   └── pre-commit
│
├── .vscode/						  # 存放 VSCode 编辑器的配置文件
│
├── public/                           # 静态资源目录
│   └── favicon.ico                   # 网站图标等静态资源
│
├── src/                              # 源代码目录
│   ├── api/                          # 接口模块（统一调用 utils/request）
│   ├── assets/                       # 静态资源（图标、样式、字体等）
│   │   ├── icons/                    # SVG 图标目录（被 SvgIcon 组件引用）
│   │   └── styles/                   # 全局样式（tailwind.css / main.scss 等）
│   ├── components/                   # 全局/可复用组件（含 SvgIcon）
│   ├── layout/                       # 布局组件（侧边栏 + 顶栏 + 内容区）
│   ├── router/                       # 路由配置与全局守卫
│   ├── stores/                       # Pinia 状态管理（modules 下按模块拆分）
│   ├── types/                        # TypeScript 类型 / 自动导入声明文件
│   ├── utils/                        # 工具函数（含 axios 请求封装 request.ts）
│   ├── views/                        # 页面视图组件（对应路由）
│   ├── App.vue                       # 根组件
│   └── main.ts                       # 项目入口文件
│
├── .editorconfig                     # 编辑器配置文件
├── .env                              # 开发环境的环境变量配置
├── .env.production                   # 生产环境的环境变量配置
├── .env.staging                      # 测试环境的环境变量配置
├── .gitignore                        # Git 忽略文件
├── .prettierrc.json                  # Prettier 配置文件
├── .env.d.ts		                  # Prettier 配置文件
├── eslint.config.js                  # ESLint 配置文件
├── index.html                        # 入口 HTML 模板
├── LICENSE                     	  # 许可证文件
├── package.json                      # 项目依赖配置文件
├── pnpm-lock.yaml                    # pnpm 锁定文件
├── README.md                         # 项目说明文件
├── tsconfig.json                     # TypeScript 配置文件
└── vite.config.ts                    # Vite 配置文件
```

## 规范化 Git 提交信息格式

在 Git 提交中，规范化提交（也叫 "Conventional Commits"）目的是通过统一的提交信息格式，提高代码历史的可读性和可维护性，当需要回溯某个特定的功能、修复或文档时，规范化的提交帮助快速定位。

**提交信息格式：**

```bash
<type>(<scope>): <subject>
```

其中：

- `type`：提交类型（如 `fix`、`feat` 等）。
- `scope`：修改范围（可选，指代修改的功能模块或区域）。
- `subject`：简洁的描述。

例如：

```bash
git commit -m "fix(auth): resolve login bug"
```

**Git 提交类型及其描述的表格展示：**

| **提交类型** | **描述**                                   |
| ------------ | ------------------------------------------ |
| `fix`        | 修复 bug                                   |
| `feat`       | 新增功能                                   |
| `chore`      | 日常任务（工具或配置更新等）               |
| `docs`       | 文档修改                                   |
| `style`      | 代码风格（不影响代码功能，通常是格式调整） |
| `refactor`   | 代码重构（不改变外部行为，仅改善内部结构） |
| `perf`       | 性能优化                                   |
| `test`       | 添加或修改测试代码                         |
| `update`     | 更新现有功能或修复                         |
| `delete`     | 删除功能或代码                             |
| `merge`      | 合并分支                                   |
| `ci`         | 持续集成配置修改                           |
