const avatar = '/favicon.ico';
module.exports = {
  title: "T3 前端",
  description: "T3前端项目文档说明",
  head: [ // 注入到当前页面的 HTML <head> 中的标签
    ['link', { rel: 'icon', href: avatar }],
    ['link', { rel: 'manifest', href: avatar }],
    ['link', { rel: 'apple-touch-icon', href: avatar }],
    ['meta', { 'http-quiv': 'pragma', cotent: 'no-cache'}],
    ['meta', { 'http-quiv': 'pragma', cotent: 'no-cache,must-revalidate'}],
    ['meta', { 'http-quiv': 'expires', cotent: '0'}]
  ],
  base: "/",// 部署到github相关的配置
  dest: "./dist",// 打包存放目录
  serviceWorker: true, // 是否开启 PWA
  themeConfig: {
    nav: [
      { text: "首页", link: "/" },
      { text: "T3管理后台", link: "/t3-admin/" },
      { text: "组件", link: "/t3-components/" },
    ],
    sidebar: {
      '/t3-admin/': genSidebarConfigCondots('T3后台管理系统'),
      '/t3-components/': getComponents('组件')
    }
  },

  markdown: {
    lineNumbers: true, // 代码块是否显示行号
    anchor: { permalink: false },
    config: md => {
      md.use(require("markdown-it-katex"));
    }
  }
};
function genSidebarConfigCondots (title) {
  return [
    {
      title,
      collapsable: false,
      children: [
        '',
        'start',
        'globalconfig',
        'routerconfig',
        'authconfig',
        'globaldirect',
        // 'compnent',
        'apirequest',
        'mock'
      ]
    }
  ]
}
function getComponents(title) {
    return [
       {
        title,
        collapsable: false,
        children: [
            '',
            'echarts',
            'infoCard',
            'commonIcon',
            'countTo',
            'inputTree',
            'exportFile',
            'importFile',
            'searchList',
            'multiSelect',
            'treeInputs',
            'tableConfig'
        ]
       }
    ]
}
