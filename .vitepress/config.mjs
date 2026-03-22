import { defineConfig } from 'vitepress'

const base = process.env.VITEPRESS_BASE || '/'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  // 站点标题
  title: '赛博资源站',
  // 忽略死链接检查（localhost 地址在构建时无法访问）
  ignoreDeadLinks: true,
  // 自定义域名请保持 '/', 项目页可在构建时传入 VITEPRESS_BASE=/<repo>/
  base,
  // 排除 skills 目录，不参与构建
  srcExclude: ['skills/**'],
  // 网站图标配置
  head: [
    ['link', { rel: 'icon', href: '/favicon.svg' }]
  ],
  // 构建时复制到输出目录的静态资源
  vite: {
    build: {
      rollupOptions: {
        output: {
          assetFileNames: (assetInfo) => {
            const info = assetInfo.name.split('.');
            const ext = info[info.length - 1];
            if (/\.(woff2?|ttf|otf|eot)$/.test(assetInfo.name)) {
              return `fonts/[name][extname]`;
            }
            return `assets/[name]-[hash][extname]`;
          }
        }
      }
    }
  },
  locales: {
    // 中文（默认主语言，根路径）
    root: {
      label: '🇨🇳 简体中文',
      lang: 'zh-CN',
      themeConfig: {
        // 站点标题和logo
        siteTitle: 'Cyber Trainer',
        logo: '/logo.svg',
        nav: [
          { text: '首页', link: '/' },
          { text: 'Git 教程', link: '/91git' },
          { text: '网络环境', link: '/网络环境' },
          { text: 'GitHub 资源汇总', link: '/github汇总/' }
        ],
        sidebar: {
          // Git 教程和网络环境页面的侧边栏
          '/': [
            {
              text: '📚 Git 教程',
              link: '/git-tutorial',
              items: [
                { text: '01- Git 基础', link: '/91git' },
                { text: '02- 网络环境配置', link: '/网络环境' }
              ]
            },
            {
              text: '🚀 GitHub 资源',
              link: '/github-resources',
              items: [
                { text: '01- GitHub 使用指南', link: '/github-guide' },
                { text: '02- GitHub 资源汇总', link: '/github汇总/' }
              ]
            }
          ],
          // GitHub 资源汇总的专属侧边栏
          '/github汇总/': [
            {
              text: '📁 GitHub 资源汇总',
              link: '/github汇总/',
              items: []
            },
            {
              text: '🤖 AI 相关',
              collapsed: false,
              items: [
                { text: 'AI 工具', link: '/github汇总/AI工具/' },
                { text: 'AI 开发工具', link: '/github汇总/AI开发工具/' },
                { text: 'AI 框架', link: '/github汇总/AI框架/' },
                { text: 'AI 视觉工具', link: '/github汇总/AI视觉工具/' },
                { text: 'AI 视频生成', link: '/github汇总/AI视频生成/' },
                { text: 'AI 图像生成', link: '/github汇总/AI图像生成/' },
                { text: 'AI 音频生成', link: '/github汇总/AI音频生成/' }
              ]
            },
            {
              text: '🔧 开发相关',
              collapsed: false,
              items: [
                { text: '开发工具', link: '/github汇总/开发工具/' },
                { text: '开发框架', link: '/github汇总/开发框架/' },
                { text: '开发资源', link: '/github汇总/开发资源/' },
                { text: 'Web 框架', link: '/github汇总/Web框架/' },
                { text: '编程语言', link: '/github汇总/编程语言/' }
              ]
            },
            {
              text: '📚 学习相关',
              collapsed: false,
              items: [
                { text: '学习资料', link: '/github汇总/学习资料/' },
                { text: '学习资源', link: '/github汇总/学习资源/' }
              ]
            },
            {
              text: '🛠️ 实用工具',
              collapsed: false,
              items: [
                { text: '效率工具', link: '/github汇总/效率工具/' },
                { text: '下载工具', link: '/github汇总/下载工具/' },
                { text: '阅读工具', link: '/github汇总/阅读工具/' },
                { text: '视频工具', link: '/github汇总/视频工具/' },
                { text: '浏览器工具', link: '/github汇总/浏览器工具/' },
                { text: '输入法工具', link: '/github汇总/输入法工具/' }
              ]
            },
            {
              text: '🖥️ 系统与运维',
              collapsed: false,
              items: [
                { text: '系统工具', link: '/github汇总/系统工具/' },
                { text: '运维工具', link: '/github汇总/运维工具/' },
                { text: '部署工具', link: '/github汇总/部署工具/' },
                { text: '数据库工具', link: '/github汇总/数据库工具/' },
                { text: '网络工具', link: '/github汇总/网络工具/' },
                { text: '安全工具', link: '/github汇总/安全工具/' }
              ]
            },
            {
              text: '🎮 娱乐与其他',
              collapsed: true,
              items: [
                { text: '游戏工具', link: '/github汇总/游戏工具/' },
                { text: '游戏开发工具', link: '/github汇总/游戏开发工具/' },
                { text: '爬虫工具', link: '/github汇总/爬虫工具/' },
                { text: '项目管理', link: '/github汇总/项目管理/' },
                { text: '内容管理系统', link: '/github汇总/内容管理系统/' },
                { text: '个人云系统', link: '/github汇总/个人云系统/' },
                { text: '后端即服务', link: '/github汇总/后端即服务/' },
                { text: '金融工具', link: '/github汇总/金融工具/' },
                { text: '动画工具', link: '/github汇总/动画工具/' },
                { text: '地图工具', link: '/github汇总/地图工具/' }
              ]
            }
          ]
        }
      }
    },
    // 英文
    en: {
      label: '🇺🇸 English',
      lang: 'en-US',
      link: '/en/',
      themeConfig: {
        // 站点标题和logo
        siteTitle: 'Cyber Resource Hub',
        logo: '/logo.svg',
        nav: [
          { text: 'Home', link: '/en/' },
          { text: 'Git Tutorial', link: '/en/api-examples' },
          { text: 'Network', link: '/en/markdown-examples' },
          { text: 'GitHub Resources', link: '/en/api-examples' }
        ],
        sidebar: [
          {
            text: '📚 Git Tutorial',
            link: '/en/index',
            items: [
              { text: '01- Git Basics', link: '/en/api-examples' },
              { text: '02- Network Config', link: '/en/markdown-examples' }
            ]
          }
        ]
      }
    }
  },
  themeConfig: {
    search: {
      provider: 'local'
    },
    outline: {
      level: [2, 3],
      label: '目录'
    }
  }
})
