/*
 * @Author: Skixkk skixkk7@gmail.com
 * @Date: 2026-08-16 11:28:05
 * @LastEditors: Skixkk skixkk7@gmail.com
 * @LastEditTime: 2026-08-16 11:46:20
 * @FilePath: \runsme-com.github.io\docs\.vitepress\config.ts
 * @Description: 让该 docs/ 放在 url `/docs`，不跟 Nuxt 抢 `/` main route ( or say main domain )
 */
import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: '/docs/',
  title: "Awesome Life",
  description: "Sewing and repairing for the world.",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Examples', link: '/markdown-examples' }
    ],

    sidebar: [
      {
        text: 'Examples',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
