module.exports = {
    title: '在路上的博客',
    description: '寻找普通人的自由之路',
    // permalink: "/:year/:slug", // 配置永久链接
    markdown: {
        lineNumbers: true  // 代码行号
    },
    themeConfig: {
        logo: '/logo.png',
        navbar: true,  // 导航栏开关
        sidebarDepth: 2,  // 侧边栏标题深度
        displayAllHeaders: true, // 显示所有页面的标题链接

        // 最后更新时间
        lastUpdated: 'Last Updated', // string | boolean

        // 搜索框
        search: true,
        searchMaxSuggestions: 10,

        // 页面滚动
        smoothScroll: true,

        // 导航栏
        nav: [
            {text: 'Home', link: '/'},
            // {text: 'Guide', link: '/guide/', target: ''},
            {
                text: '技术',
                items: [
                    {
                        text: 'HttpRunner V3.X', items: [
                            {text: '中文文档', link: 'https://ontheway.cool/HttpRunner3DocsForCN/'},
                            {text: '英文文档', link: 'https://docs.httprunner.org/'}
                        ]
                    },
                    {
                        text: '移动端', items: [
                            {text: '待更新', link: '/'},
                        ]
                    },
                    {
                        text: '服务端', items: [
                            {text: '待更新', link: '/'},
                        ]
                    },
                    {
                        text: '其他', items: [
                            {text: '待更新', link: '/'},
                        ]
                    },
                ]
            },
            {
                text: '生活',
                items: [
                    {
                        text: '孕产检育儿', items: [
                            {text: '孕产检', link: 'https://ontheway.cool/pregnantBirth/', target: ''},
                            // {text: '育儿', link: '/language/english/'}
                        ]
                    },
                    {
                        text: '房', items: [
                            {text: '待更新', link: '/'},
                        ]
                    },
                    {
                        text: '车', items: [
                            {text: '待更新', link: '/'},
                        ]
                    },
                ]
            },
            {
                text: '财务',
                items: [
                    {
                        text: '保险', items: [
                            {text: '待更新', link: '/'},
                        ]
                    },
                    {
                        text: '财务规划', items: [
                            {text: '待更新', link: '/'},
                        ]
                    },
                    {
                        text: '理财', items: [
                            {text: '待更新', link: '/'},
                        ]
                    },
                ]
            },
            {
                text: 'AboutMe',
                link: '/about/',
            }
        ],

        //侧边栏
        sidebar: [
            {
                title: "AboutMe",  // 必须的
                collapsable: true, // 可选的, 是否可折叠，默认值是 true，为false时该分组将永远都是展开状态
                sidebarDepth: 2,   // 可选的, 默认值是 1
                children: ['/about/',] // 可选的，没有时将不会有折叠效果
            },

        ],

        // Git 仓库和编辑链接
        // 假定是 GitHub. 同时也可以是一个完整的 GitLab URL
        repo: 'OnTheWay111/OnTheWay111.github.io',
        // 自定义仓库链接文字。默认从 `themeConfig.repo` 中自动推断为
        // "GitHub"/"GitLab"/"Bitbucket" 其中之一，或是 "Source"。
        repoLabel: 'GitHub',

        // 以下为可选的编辑链接选项

        // 假如你的文档仓库和项目本身不在一个仓库：
        // docsRepo: 'vuejs/vuepress',
        // 假如文档不是放在仓库的根目录下：
        // docsDir: 'docs',
        // 假如文档放在一个特定的分支下：
        // docsBranch: 'master',
        // 默认是 false, 设置为 true 来启用
        // editLinks: true,
        // 默认为 "Edit this page"
        // editLinkText: '帮助改善此页面！'

    },

    head: [
        ['link', {rel: 'icon', href: '/image/favicon.ico'}],
        ['script', {}, `
        var _hmt = _hmt || [];
            (function() {
            var hm = document.createElement("script");
            hm.src = "https://hm.baidu.com/hm.js?64ae7cd356095ffe37f635a2b38d97c9";
            var s = document.getElementsByTagName("script")[0]; 
            s.parentNode.insertBefore(hm, s);
        `]
    ],
    plugins: {
        '@vssue/vuepress-plugin-vssue': {
            // 设置平台，而不是 `api`
            platform: 'github-v4',

            // 其他的 Vssue 配置
            owner: 'OnTheWay111', // 仓库的拥有者的名称
            repo: 'blog_Comment', // 存储 Issue 和评论的仓库的名称
            clientId: 'c80802ee19db4d6c44f9', // 刚保存下来的  Client ID
            clientSecret: 'f350ad6d8e920a25091b1e8f3b7b24b87277ca4f', //  刚才保存下来的 Client secrets
            autoCreateIssue: true,//自动创建评论

        },
        'vuepress-plugin-comment': {
            choosen: 'valine',
            // options选项中的所有参数，会传给Valine的配置
            options: {
                el: '#valine-vuepress-comment',
                appId: 'OofBcGEVk91vg4oXFAPyIkwX-gzGzoHsz',
                appKey: 'jujJShU5axIhd7x1g9qcQ88W',
                path: '<%- frontmatter.commentid || frontmatter.permalink %>'
            }
        }
    },
}