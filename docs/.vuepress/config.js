module.exports = {
    title: '在路上的博客',
    description: '寻找普通人的自由之路',
    // permalink: "/:year/:slug", // 配置永久链接
    markdown: {
        lineNumbers: true  // 代码行号
    },
    themeConfig: {
      logo: 'logo.png',
      navbar: true,  // 导航栏开关
      sidebarDepth: 2,  // 侧边栏标题深度
      displayAllHeaders: true, // 默认值：false

      // 最后更新时间
      lastUpdated: 'Last Updated', // string | boolean

      // 搜索框
      search: true,
      searchMaxSuggestions: 10,

      // 页面滚动
      smoothScroll: true,

      // 导航栏
      nav: [
        { text: 'Home', link: '/' },
        { text: 'Guide', link: '/guide/', target:'' },
        {
          text: 'HttpRunner3',
          ariaLabel: 'HttpRunner3文档',
          items: [
            { text: '中文文档', link: 'https://www.ontheway.cool/HttpRunner3DocsForCN/' },
            { text: '英文文档', link: '/language/english/' }
          ]
        },
        {
            text: 'demo',
            items: [
              { text: 'Group1', items: [
                    { text: '中文', link: '/language/chinese/' },
                    { text: 'English', link: '/language/english/' }
                  ]
              },
              { text: 'Group2', items: [
                    { text: '中文', link: '/language/chinese/' },
                    { text: 'English', link: '/language/english/' }
                  ] }
            ]
        },
        {
          text: 'Languages',
          ariaLabel: 'Language Menu',
          items: [
            { text: '中文', link: '/language/chinese/' },
            { text: 'English', link: '/language/english/' }
          ]
        },
        { text: 'External', link: 'https://google.com', target:'_blank', rel:'' },
    ],
      //侧边栏
      sidebar: [
              {
                  title: 'Group 1',   // 必要的
                  collapsable: true, // 可选的, 默认值是 true,
                  sidebarDepth: 2,    // 可选的, 默认值是 1
                  children: [
                      '/',
                      '/guide/'
                  ]
              },
              {
                  title: 'Group 2',
                  sidebarDepth: 1,
                  children: [
                      '/guide/'
                  ],
              }
          ],

      // Git 仓库和编辑链接
      // 假定是 GitHub. 同时也可以是一个完整的 GitLab URL
        repo: 'vuejs/vuepress',
        // 自定义仓库链接文字。默认从 `themeConfig.repo` 中自动推断为
        // "GitHub"/"GitLab"/"Bitbucket" 其中之一，或是 "Source"。
        repoLabel: '查看源码',

        // 以下为可选的编辑链接选项

        // 假如你的文档仓库和项目本身不在一个仓库：
        docsRepo: 'vuejs/vuepress',
        // 假如文档不是放在仓库的根目录下：
        docsDir: 'docs',
        // 假如文档放在一个特定的分支下：
        docsBranch: 'master',
        // 默认是 false, 设置为 true 来启用
        editLinks: true,
        // 默认为 "Edit this page"
        editLinkText: '帮助我们改善此页面！'

  },
}