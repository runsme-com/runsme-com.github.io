---
prev:
  text: 'github LGTM'
  link: '/github-lgtm'
next: 
  text: 'Team & Contributors'
  link: '/team'
---

<!--
 * @Author: Skixkk skixkk7@gmail.com
 * @Date: 2026-08-14 19:23:30
 * @LastEditors: Skixkk skixkk7@gmail.com
 * @LastEditTime: 2026-08-18 01:01:16
 * @FilePath: \merchant-admin\docs\our-team\index.md
 * @Description: file
-->

<script setup>
import { VPTeamMembers } from 'vitepress/theme'

const members = [
  {
    avatar: 'https://avatars.githubusercontent.com/u/273025146?v=4',
    name: 'Alininin',
    title: 'Creator & Agent Engineer',
    links: [
      { icon: 'github', link: 'https://github.com/Alininin' },
    ]
  },
  {
    avatar: 'https://avatars.githubusercontent.com/u/267605019?v=4',
    name: 'Camille',
    title: 'Creator & Algorithm Engineer',
    links: [
      { icon: 'github', link: 'https://github.com/L-y-MAX' },
    ]
  },
  {
    avatar: 'https://avatars.githubusercontent.com/u/277164242?v=4',
    name: 'Lixx6688',
    title: 'Algorithm Engineer & AI Ecosystem Full Stack Engineer',
    links: [
      { icon: 'github', link: 'https://github.com/Lixx6688' },
    ]
  },
  {
    avatar: 'https://avatars.githubusercontent.com/u/277212722?v=4',
    name: 'zhaoxiang116',
    title: 'Creator & AI Native Full Stack Engineer',
    links: [
      { icon: 'github', link: 'https://github.com/zhaoxiang116' },
    ]
  },
  {
    avatar: 'https://avatars.githubusercontent.com/u/166358870?s=400&v=4',
    name: 'Skixkk',
    title: 'Creator | Quant & Full Stack',
    links: [
      { icon: 'github', link: 'https://github.com/Skixkk' },
    ]
  },
]
</script>

# Our Team

> Thank you to our outstanding team members and contributors for their contributions

<VPTeamMembers size="small" :members />
