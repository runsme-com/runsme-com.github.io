/*
 * @Author: Skixkk skixkk7@gmail.com
 * @Date: 2026-08-16 11:28:05
 * @LastEditors: Skixkk skixkk7@gmail.com
 * @LastEditTime: 2026-08-19 18:41:26
 * @FilePath: \runsme-com.github.io\docs\.vitepress\config.ts
 * @Description: 让该 docs/ 放在 url `/docs`，不跟 Nuxt 抢 `/` main route ( or say main domain )
 */
import { defineConfig } from 'vitepress'
import { withMermaid } from 'vitepress-plugin-mermaid'


// https://vitepress.dev/reference/site-config
export default withMermaid(
  defineConfig({
    base: '/docs/',
    lang: 'en-US',

    head: [
      // add icon
      ['link', {
        rel: 'icon',
        href: 'https://runsme-com.github.io/favicon.ico'
      }]
    ],

    title: "Awesome Life",
    description: "Sewing and repairing for the world.",
    themeConfig: {
      logo: {
        dark: 'https://runsme-com.github.io/favicon.ico',
        light: 'https://runsme-com.github.io/light-icon.png',
      },
      
      lastUpdated: {
        text: 'Updated at',
        formatOptions: {
          dateStyle: 'full',
          timeStyle: 'medium'
        }
      },


      // 网站标题
      siteTitle: 'Open source runsme',
      // aside: 'left',
      // lastUpdatedText: "最后更新于(基于Git)",
      search: {
        provider: 'local'
      },


      // https://vitepress.dev/reference/default-theme-config
      nav: [
        // 一级目录 1
        { text: 'Home', link: '/' },
        {
          text: 'README',
          items: [
            { text: 'README', link: '/readme' },
            { text: 'Prompt', link: '/prompt' },
            { text: 'github LGTM', link: '/github-lgtm' },
            { text: 'Our Team', link: '/our-team' }
          ]
        },
        // 一级目录 2
        { text: 'Team & Contributors', link: '/team' } // 指向我们新建的 team.md
      ],
      
      sidebar: [
        {
          text: 'started',
          items: [
            { text: 'README', link: '/readme' },
            { text: 'Guide', link: '/guide' },
            { text: 'Prompt', link: '/prompt' },
            { text: 'github LGTM', link: '/github-lgtm' },
            { text: 'Hackathon', link: '/hackathon' },
            { text: 'Devoss', link: '/devoss' },
            { text: 'Developing', link: '/developing' },
            { text: 'Safety', link: '/safety' },
            { text: 'Open source lab', link: '/open-source-lab' },
            { text: 'Our Team', link: '/our-team' },
          ]
        }
      ],


      // 定义切换页面上方显示的文字
      // docFooter: {
      //   prev: 'Pagina prior',
      //   next: 'Proxima pagina'
      // },


      socialLinks: [
        { icon: 'github', link: 'https://github.com/runsme-com/runsme-com.github.io' }
      ],
      
      // 在 github 上编辑页面的链接 定义根路径 + docs/ 下的 route，即可实现访问
      editLink: {
        pattern: 'https://github.com/runsme-com/runsme-com.github.io/edit/main/docs/:path',
        text: 'Edit this page on GitHub'
      },


      footer: {
        copyright: 'Open source · <a href="https://github.com/runsme-com/runsme-com.github.io/blob/main/LICENSE">MIT</a> · © 2026 <a href="https://github.com/runsme-com">Open source runsme.com</a>. All rights reserved.'
      }
    },
    markdown: {
      // 可选：开启代码块语法提示
      codeTransformers: []
    },
    mermaid: {
      theme: 'default',
      flowchart: {
        curve: 'basis'
      }
    }
  })
)