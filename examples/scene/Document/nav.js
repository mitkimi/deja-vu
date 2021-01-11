const LevelOneStyle = {
  fontSize: '18px',
  fontWeight: 'bold',
  marginBottom: '20px'
}

const LevelTwoStyle = {
  fontSize: '12px',
  color: '#999999',
  marginTop: '25px',
  marginBottom: '10px'
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
    name: 'basic 基本组件',
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
    key: 'grid',
    isMarkdownPage: true,
    name: 'Grid 栅格',
    style: {}
  },
  {
    key: 'color',
    isMarkdownPage: true,
    name: 'Color 色彩',
    style: {}
  },
  {
    key: 'typography',
    isMarkdownPage: true,
    name: 'Typography 字体',
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
  },
  {
    key: 'switch',
    isMarkdownPage: true,
    name: 'Switch 开关',
    style: {}
  },
  {
    name: 'container 容器',
    style: {
      ...LevelTwoStyle
    }
  },
  {
    key: 'card',
    isMarkdownPage: true,
    name: 'Card 卡片',
    style: {}
  },
  {
    key: 'paper',
    isMarkdownPage: true,
    name: 'Paper 纸张',
    style: {}
  },
  {
    key: 'image',
    isMarkdownPage: true,
    name: 'Image 图片',
    style: {}
  },
  {
    key: 'avatar',
    isMarkdownPage: true,
    name: 'Avatar 头像',
    style: {}
  },
  {
    name: 'Form 表单',
    style: {
      ...LevelTwoStyle
    }
  },
  {
    key: 'radio',
    isMarkdownPage: true,
    name: 'Radio 单选框/单选按钮',
    style: {}
  },
  {
    key: 'checkbox',
    isMarkdownPage: true,
    name: 'Checkbox 多选框/多选按钮',
    style: {}
  },
  {
    key: 'input',
    isMarkdownPage: true,
    name: 'Input 输入框',
    style: {}
  },
  {
    key: 'select',
    isMarkdownPage: true,
    name: 'Select 选择器',
    style: {}
  },
  {
    key: 'datetimepicker',
    isMarkdownPage: true,
    name: 'DateTimePicker 日期时间选择器',
    style: {}
  },
  {
    key: 'colorpicker',
    isMarkdownPage: true,
    name: 'ColorPicker 颜色选择器',
    style: {}
  },
  {
    key: 'upload',
    isMarkdownPage: true,
    name: 'Upload 上传',
    style: {}
  },
  {
    key: 'rate',
    isMarkdownPage: true,
    name: 'Rate 评分',
    style: {}
  },
  {
    key: 'form',
    isMarkdownPage: true,
    name: 'Form 表单',
    style: {}
  },
  {
    name: 'data 数据展示',
    style: {
      ...LevelTwoStyle
    }
  },
  {
    key: 'table',
    isMarkdownPage: true,
    name: 'Table 表格',
    style: {}
  },
  {
    key: 'tag',
    isMarkdownPage: true,
    name: 'Tag 标签',
    style: {}
  },
  {
    key: 'progress',
    isMarkdownPage: true,
    name: 'Progress 进度条',
    style: {}
  },
  {
    key: 'pagination',
    isMarkdownPage: true,
    name: 'Pagination 分页',
    style: {}
  },
  {
    key: 'badge',
    isMarkdownPage: true,
    name: 'Badge 标记',
    style: {}
  },
  {
    name: 'notice 通知和消息',
    style: {
      ...LevelTwoStyle
    }
  },
  {
    key: 'alert',
    isMarkdownPage: true,
    name: 'Alert 警告',
    style: {}
  },
  {
    key: 'message',
    isMarkdownPage: true,
    name: 'Message 消息',
    style: {}
  },
  {
    key: 'modal',
    isMarkdownPage: true,
    name: 'Modal 模态框',
    style: {}
  },
  {
    key: 'notification',
    isMarkdownPage: true,
    name: 'Notification 通知',
    style: {}
  },
  {
    key: 'loading',
    isMarkdownPage: true,
    name: 'Loading 加载',
    style: {}
  },
  {
    name: 'navigation 导航',
    style: {
      ...LevelTwoStyle
    }
  },
  {
    key: 'menu',
    isMarkdownPage: true,
    name: 'Menu 菜单',
    style: {}
  },
  {
    key: 'tabs',
    isMarkdownPage: true,
    name: 'Tabs 标签页',
    style: {}
  },
  {
    key: 'breadcrumb',
    isMarkdownPage: true,
    name: 'BreadCrumb 面包屑',
    style: {}
  },
  {
    key: 'steps',
    isMarkdownPage: true,
    name: 'Steps 步骤',
    style: {}
  },
  {
    name: 'other 其他',
    style: {
      ...LevelTwoStyle
    }
  },
  {
    key: 'tooltip',
    isMarkdownPage: true,
    name: 'Tooltip 工具提示',
    style: {}
  },
  {
    key: 'carousel',
    isMarkdownPage: true,
    name: 'Carousel 走马灯',
    style: {}
  },
  {
    key: 'backtop',
    isMarkdownPage: true,
    name: 'BackTop 回到顶部',
    style: {}
  },
  {
    key: 'drawer',
    isMarkdownPage: true,
    name: 'Drawer 抽屉',
    style: {}
  },
  {
    name: 'media 媒体',
    style: {
      ...LevelTwoStyle
    }
  },
  {
    key: 'video',
    isMarkdownPage: true,
    name: 'Video 视频',
    style: {}
  },
  {
    name: 'effects 动效',
    style: {
      ...LevelTwoStyle
    }
  },
  {
    key: 'videojumbo',
    isMarkdownPage: true,
    name: 'VideoJumbo 视频背景',
    style: {}
  },
  {
    key: 'particles',
    isMarkdownPage: true,
    name: 'Particles 粒子特效',
    style: {}
  },
  {
    key: 'globe',
    isMarkdownPage: true,
    name: 'Globe 地球仪',
    style: {}
  },
  {
    name: 'abandoned 弃用',
    style: {
      ...LevelTwoStyle
    }
  },
  {
    key: 'global',
    isMarkdownPage: true,
    name: 'Global 地球仪[弃用]',
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
  },
  {
    key: 'specification',
    isMarkdownPage: true,
    name: '代码规范'
  }
]

export default {
  components,
  guide
}
