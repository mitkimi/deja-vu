const LevelOneStyle = {
  fontSize: '18px',
  fontWeight: 'bold',
  marginBottom: '20px'
}

const LevelTwoStyle = {
  fontSize: '12px',
  color: '#999999'
}

const components = [
  {
    key: 'changelog',
    isMarkdownPage: true,
    name: '更新日志',
    style: {
      ...LevelOneStyle
    }
  },
  {
    key: 'installation',
    isMarkdownPage: true,
    isDefault: true,
    name: '安装',
    style: {}
  },
  {
    key: 'quickstart',
    isMarkdownPage: true,
    name: '快速开始',
    style: {}
  },
  {
    name: '组件',
    style: {
      ...LevelOneStyle
    }
  },
  {
    name: 'basic',
    style: {
      ...LevelTwoStyle
    }
  },
  {
    key: 'layout',
    isMarkdownPage: true,
    name: 'Layout 布局',
    style: {}
  },
  {
    key: 'container',
    isMarkdownPage: true,
    name: 'Container 容器',
    style: {}
  },
  {
    key: 'color',
    isMarkdownPage: true,
    name: 'Color 色彩',
    style: {}
  },
  {
    key: 'border',
    isMarkdownPage: true,
    name: 'Border 边框',
    style: {}
  },
  {
    key: 'icon',
    isMarkdownPage: true,
    name: 'Icon 图标',
    style: {}
  },
  {
    key: 'button',
    isMarkdownPage: true,
    name: 'Button 按钮',
    style: {}
  }
]

const guide = [
  {
    key: 'design',
    isMarkdownPage: true,
    name: '设计原则'
  },
  {
    key: 'navigation',
    isMarkdownPage: true,
    name: '导航'
  }
]

export default {
  components,
  guide
}
