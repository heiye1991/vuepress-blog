const sidebar = require('./sidebar')
const plugins = require('./plugins')
const valineConfig = require('./valineConfig')
const recordConfig = require('./recordConfig')

module.exports = {
  title: '窗外放晴的博客',
  description: '书山有路，学海无涯',
  dest: 'public',
  base: '/',
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }],
    ['meta', { name: 'viewport', content: 'width=device-width,initial-scale=1,user-scalable=no' }],
    ['link', { rel: 'manifest', href: '/manifest.json' }],
    ['meta', { name: 'theme-color', content: '#FF66CC' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
    ['link', { rel: 'apple-touch-icon', href: '/icons/heiye.png' }],
    ['link', { rel: 'mask-icon', href: '/icons/heiye.svg', color: '#FF66CC' }],
    ['meta', { name: 'msapplication-TileImage', content: '/icons/heiye.png' }],
    ['meta', { name: 'msapplication-TileColor', content: '#000000' }],
  ],
  plugins,
  theme: 'reco',
  themeConfig: {
    mode: 'light',
    modePicker: true,
    subSidebar: 'auto',
    smoothScroll: true, // 启用页面滚动效果
    valineConfig, // valine 评论配置
    nav: [
      { text: '主页', link: '/', icon: 'reco-home' },
      { text: '时间线', link: '/timeline/', icon: 'reco-date' },
      { text: '留言板', link: '/blogs/views/messageBoard.html', icon: 'reco-suggestion' },
      { text: 'GitHub', link: 'https://github.com/heiye1991', icon: 'reco-github' },
    ],
    sidebar,
    type: 'blog',
    blogConfig: {
      category: { location: 2, text: '目录' },
      tag: { location: 3, text: '标签' },
    },
    friendLink: [
      {
        title: 'vuepress-theme-reco',
        desc: 'A simple and beautiful vuepress Blog & Doc theme.',
        logo: '/vuepress_reco.png',
        link: 'https://vuepress-theme-reco.recoluan.com',
      },
    ],
    logo: '/icons/heiye.png',
    search: true,
    searchMaxSuggestions: 10,
    lastUpdated: '最后更新时间',
    author: 'heiye1991',
    authorAvatar: '/icons/heiye.png',
    startYear: '2021',
    ...recordConfig, // ICP备案 和公安部备案信息
  },
  markdown: {
    lineNumbers: true,
  },
}
