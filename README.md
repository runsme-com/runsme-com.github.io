<!--
 * @Author: Skixkk skixkk7@gmail.com
 * @Date: 2026-08-16 10:28:49
 * @LastEditors: Skixkk skixkk7@gmail.com
 * @LastEditTime: 2026-08-18 00:13:24
 * @FilePath: \runsme-com.github.io\README.md
 * @Description: `https://runsme-com.github.io/` runsme-com | Runsme‑tech‑lab official site monorepo documentation
-->
# Runsme‑tech‑lab

[![Deploy Nuxt + VitePress Docs to GitHub Pages](https://github.com/runsme-com/runsme-com.github.io/actions/workflows/deploy.yml/badge.svg?branch=main)](https://github.com/runsme-com/runsme-com.github.io/actions/workflows/deploy.yml)

This repository contains source code for our main landing website and document blog platform.

> Official community homepage & documentation website for Runsme‑tech‑lab open‑source organisation

## Quick Start

- [ilibili 教程视频 预留位](https://github.com/runsme-com)

```Bash
node -v
npm -v
# 查看 有没有 bun
npm list -g
# 安装 bun(如上一步有则省略这一步)
npm install -g bun
# 构建
bun i
# develop 开发
bun run dev
bun run docs:dev
# commit && push 后 github action 会自动构建部署
```

## Tech Stack

基于 `Nuxt` 的 `Minimal` 建立 `/` 构建 网站系统; 基于 `vitepress` 建立 `/docs` 构建 博客系统

- Main site(`/`): Nuxt (Minimal)
- Docs & Blog(`/docs`): VitePress
- Package manager: Bun
- Deployment: GitHub Pages
- CI: GitHub Actions

## Project Structure

```text
app/                # Nuxt minimal main website root
├── app.vue
└── pages/
    └── index.vue   # Homepage entry
docs/               # VitePress documentation & blog source
```

## Organisation Introduction

Runsme‑tech‑lab is an independent‑focused open‑source engineering community‑run organisation.
Our core mission is delivering high‑quality contributions to the global open‑source ecosystem.

For detailed mission, roadmap, contribution standards and recruitment information, please visit our official homepage.

- [open source runsme.com](https://github.com/runsme-com)

## License

MIT
