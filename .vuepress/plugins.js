module.exports = [
  // 评论插件
  ['@vuepress-reco/vuepress-plugin-comments'],
  // 流程图插件
  ['vuepress-plugin-flowchart'],
  // 为博客文章自动随机添加名人名言或其他
  ['vuepress-plugin-boxx'],
  // 代码复制弹窗插件
  [
    'vuepress-plugin-nuggets-style-copy',
    {
      copyText: '复制代码',
      tip: {
        content: '复制成功!',
      },
    },
  ],
  // 音乐插件 https://github.com/moefyit/vuepress-plugin-meting
  [
    'vuepress-plugin-meting',
    {
      meting: {
        // 网易
        server: 'netease',
        // 读取歌单
        type: 'playlist',
        // 歌单id
        mid: '6683609683',
      },
      // 不配置该项的话不会出现全局播放器
      aplayer: {
        // 吸底模式
        fixed: true,
        // mini模式
        mini: true,
        // 自动播放
        autoplay: false,
        // 歌曲栏折叠
        listFolded: false,
        // 颜色
        theme: '#e6e6e6', // 默认值： #b7daff
        // 播放器的初始循环模式 'all' | 'one' | 'none'
        loop: 'all',
        // 播放顺序为随机 'random' | 'list'
        order: 'random',
        // 初始音量
        volume: 0.1,
        // 设置 lrc 歌词解析模式 0：禁用 lrc 歌词，1：lrc 格式的字符串，3：lrc 文件 url
        lrcType: 0,
      },
      mobile: {
        // 手机端去掉cover图
        cover: false,
      },
    },
  ],
  //动态标题
  [
    'dynamic-title',
    {
      showIcon: '/favicon.ico',
      showText: '(/≧▽≦/)咦！又好了！',
      hideIcon: '/favicon.ico',
      hideText: '(●—●)喔哟，崩溃啦！',
      recoverTime: 2000,
    },
  ],
  // PWA
  [
    '@vuepress/pwa',
    {
      serviceWorker: true,
      updatePopup: {
        message: '发现新内容可用',
        buttonText: '刷新',
      },
    },
  ],
  // 弹窗公告插件
  [
    '@vuepress-yard/vuepress-plugin-window',
    {
      title: '公告',
      windowStyle: { right: '20px', top: '70px', width: '260px' },
      contentInfo: {
        title: '欢迎来访 🎉🎉🎉',
        needImg: true,
        imgUrl: '/icons/heiye.png',
        content: '这是我的博客~',
        contentStyle: {
          textAlign: 'center',
        },
      },
      bottomInfo: { btnText: '博客', linkTo: '/index.html' },
      delayMount: 500,
      closeOnce: true,
    },
  ],
]
