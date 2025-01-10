# 个人博客系统

这是一个使用 Next.js 构建的静态博客系统，支持 Markdown 文章编写和自动部署到 GitHub Pages。

## 功能特点

- ✨ Markdown 文章支持
- 📱 响应式设计
- 🎯 文章目录导航
- 🔍 二级标题锚点定位
- 🎨 代码高亮显示
- 📦 静态页面生成
- 🚀 自动部署到 GitHub Pages

## 技术栈

- Next.js - React 框架
- gray-matter - Markdown 元数据解析
- remark - Markdown 处理
- GitHub Actions - 自动部署

## 本地开发

```bash
# 克隆项目
git clone https://github.com/你的用户名/blog.git

# 安装依赖
npm install

# 启动开发服务器
npm run dev
```

## 写作指南

1. 在 `posts` 目录下创建 `.md` 文件
2. 添加文章元数据：

```markdown
---
title: '文章标题'
date: '2024-03-14'
description: '文章描述'
---
```

3. 使用 Markdown 语法编写文章内容
4. 二级标题会自动生成侧边栏导航

## 部署

项目使用 GitHub Actions 自动部署：

1. 推送代码到 main 分支

```bash
git add .
git commit -m "Update content"
git push origin main
```

2. GitHub Actions 会自动：
   - 构建项目
   - 部署到 gh-pages 分支
   - 更新 GitHub Pages

## 项目结构

```
blog/
├── components/        # React 组件
├── lib/              # 工具函数
├── pages/            # 页面组件
├── posts/            # Markdown 文章
├── public/           # 静态资源
└── styles/           # CSS 样式
```

## 自定义样式

- `Layout.module.css` - 布局样式
- `Post.module.css` - 文章页样式
- `index.module.css` - 首页样式

## License

MIT License
