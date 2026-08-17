---
prev:
  text: 'README'
  link: '/readme'
next: 
  text: 'Prompt'
  link: '/prompt'
---

<!--
 * @Author: Skixkk skixkk7@gmail.com
 * @Date: 2026‑08‑18
 * @LastEditors: Skixkk skixkk7@gmail.com
 * @LastEditTime: 2026-08-18 01:48:46
 * @FilePath: docs\guide\index.md
 * @Description: Project development guide
-->

# 开发指南

> Runsme‑tech‑lab 站点开发、文档贡献、本地启动完整指引

## 项目架构

本项目采用双仓分离架构：

- `/` 主站：Nuxt Minimal
- `/docs` 文档博客：VitePress
- 包管理器：Bun
- CI/CD：GitHub‑Actions 自动部署 GitHub Pages

## Quick Start

- [ilibili 教程视频 预留位](https://github.com/runsme-com)

```Bash
node -v
npm -v
# 查看 有没有 bun
npm list -g
# 安装 bun(如上一步有则省略这一步)
npm install -g bun
# 检查 bun
bun -v
# 安装依赖
bun i
# develop 开发
bun run dev
bun run docs:dev
# commit && push 后 github action 会自动构建部署
```
