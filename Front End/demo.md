######

| 目录          | 负责什么              |
| ------------- | --------------------- |
| `api/`        | API 请求模块          |
| `assets/`     | 图片、字体等静态资源  |
| `components/` | 公共组件              |
| `hooks/`      | 自定义 Hooks          |
| `layouts/`    | 页面布局              |
| `pages/`      | 页面                  |
| `routes/`     | 路由配置              |
| `services/`   | 业务服务 / Axios 封装 |
| `store/`      | Zustand               |
| `types/`      | TypeScript 类型       |
| `utils/`      | 通用工具函数          |

######

# React 项目开发规范

## 技术栈

- React
- TypeScript
- Vite
- Tailwind CSS v4
- Ant Design
- Axios
- TanStack Query
- Zustand
- React Router
- React Hook Form

## 状态管理

服务器状态：
使用 TanStack Query

客户端全局状态：
使用 Zustand

组件内部状态：
使用 useState

## API

所有 HTTP 请求统一通过 Axios Instance。

不要在组件中直接创建 axios 实例。

## 类型

API Request / Response 类型放在 types/。

禁止无理由使用 any。

## 组件

公共组件放 components/。

页面放 pages/。

业务 API 放 api/。

## CSS

优先使用 Tailwind CSS。

Ant Design 负责通用 UI 组件。

不要引入其他 CSS 框架。

## 开发原则

优先复用已有组件和工具。

不要为了简单功能随意增加第三方依赖。
