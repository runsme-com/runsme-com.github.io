/*
 * @Author: Skixkk skixkk7@gmail.com
 * @Date: 2026-08-18 01:26:16
 * @LastEditors: Skixkk skixkk7@gmail.com
 * @LastEditTime: 2026-08-18 01:38:30
 * @FilePath: \runsme-com.github.io\docs\.vitepress\theme\index.ts
 * @Description: VitePress 自定义主题入口文件，用来覆盖、扩展 VitePress 默认主题。
 */
import DefaultTheme from 'vitepress/theme'
import RepoGrid from '../components/RepoGrid.vue'
import type { Theme } from 'vitepress'

export default {
  ...DefaultTheme,
  enhanceApp({ app }) {
    app.component('RepoGrid', RepoGrid)
  }
} satisfies Theme