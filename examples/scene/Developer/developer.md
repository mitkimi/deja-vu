# 开发者

Hi，我是 Deja vu 的创作者，田昊天

基于 Vue 的开发工作我已经做了好几年了，一直以来都在觊觎别人的能够写一个完整的组件库的能力

当我自己也有这样的能力时，我也自己写了一套组件库

其实倒也不是我不想写，主要是因为没有一个大块的时间来做这件事

另外，这件事也不是一个开发就能做到的事情，涉及到的事情有很多，最关键的就是，得有设计师直接参与样式和体验

#### Deja vu
我为什么要取这个名字呢？

正如之前说的，其实一直以来我都想写一套 UI 库，这个想法总是因为没有人帮忙设计，以及自己很懒（这个是主要原因）。所以这个想法就被搁置了

最近入职了一家新公司，在他们的需求中是有这么一套轻量化的 UI 库的，而且建立这个 UI 库的任务就交给了我...

于是这个“似曾相识”的想法就又重新冒出来了。于是，我就重新开启这个项目，至少先起个头，然后逐步的推进他

#### 设计
我一直以来的风格都是这种偏`性冷淡`的风格。不过在这次设计方面我还是改变了色彩以及阴影方面的设计，让整个组件库看起来有些人情味

#### 欢迎加入开源
###### 设计师
如果您是 UI 或者动效设计师，想要帮助我完善这个库，欢迎使用邮件与我取得联系：
(以下所有邮箱都可以收到)

- i#mitkimi.com(发送时请把 `#` 替换成 `@`)
- mitkimicn#gmail.com
- h#otian.me

我们使用 sketch 进行设计，看板更新到 [语雀](https://www.yuque.com)

[查看看板](https://www.yuque.com/mitkimi/uamilm)

###### 前端
同样也欢迎前端开发者帮我提供 pull request

Github 地址是 [https://github.com/mitkimi/deja-vu](https://github.com/mitkimi/deja-vu)

#### 开发者
针对于前端的开发者，请遵循以下的流程

##### 分支
开发者参与项目开发时，请自行拉一个分支，并且在开发完成后向对应分支提交 pull request

###### 开发分支
开发分支是 `develop`

我们自己的开发者在 `develop` 分支上进行开发

###### 热修复分支
热修复分支是 `hotfix`

当您发现任何 bug 或者问题，可以通过项目 [issues](https://github.com/mitkimi/deja-vu/issues) 向我提出，问题将会尽快修复

###### 生产分支
和生产环境同步的分支是生产分支

生产分支是 `master`

`master` 分支是项目的主分支，主分支仅能被项目所有者操作。其他参与者的操作将会被 decline，请不必向这个分支进行操作

#### 代码
您可以通过 github 获取项目代码

```bash
git clone https://github.com/mitkimi/deja-vu.git
cd deja-vu
npm install
# 或者 yarn

npm run serve
```

##### 项目结构
```javascript
deja-vu
├── examples        # 文档网站
│    ├── assets       # 图片、样式资源
│    ├── components   # 组件
│    ├── docs         # 文档
│    ├── router       # 路由
│    ├── scene        # 场景
│    ├── store        # vuex 状态管理（未用到）
│    ├── views        # 页面（未用到）
│    ├── App.vue      # App.vue
│    ├── main.js      # 网站入口文件
├── md-loader       # markdown 加载器
├── packages        # 组件库
│    ├── Button       # 按钮组件
│    ├── Demo         # 组件 demo（复制一个这个文件夹开发）
│    ├── ...          # 其他组件
│    ├── index.js     # 组件注册入口文件
├── public          # 渲染后塞入的文件
├── .eslintrc.js    # eslint 配置
├── package.json    # package.json
├── README.md       # README
└── vue.config.js   # vue-cli3 配置文件
```

##### 组件开发
在 `packages` 目录下新建一个组件，组件目录的规范是大驼峰法

例如，您想要新建一个颜色选择器（color picker）的组件，那么文件夹是 `ColorPicker`

文件夹内包含一个 `index.js` 用于导出组件，组件写入 `component` 中的 vue 文件里

我们把每隔 vue 文件拆成了 DOM 结构、脚本和样式三个文件，请遵循这样的结构

```javascript
ColorPicker
├── component              # 组件本体
│    ├── color-picker.html   # DOM
│    ├── color-picker.js     # 脚本
│    ├── color-picker.less   # 样式
│    ├── index.vue           # vue 文件
└── index.js               # 用于导出的文件
```

我们建议您使用插槽

开发时，还需要把组件注册到 `@/packages/index.js` 中
在这个文件引入时，引入的组件命名也使用大驼峰
引入后，把组件填入 `component` 数组中，程序会自动完成注册

```javascript
// @/packages/index.js
import Button from './Button'
import Video from './Video'
import VideoJumbo from './VideoJumbo'
import Particles from './Particles'
// ... 在这里引入

const components = [
  Button,
  Video,
  VideoJumbo,
  Particles
  // ... 在这里注册
]
const install = function (Vue) {
  if (install.installed) return
  components.map(component => {
    Vue.use(component)
  })
}
//  全局引用可自动安装
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}
export default {
  install,
  ...components
}

```

##### 文档开发
开发组件时可以同时写文档，并且在文档中就可以调试

以 `ColorPicker` 举例，首先，你需要在 `@/examples/scene/Document/nav.js` 中插入一个链接，这个文件用于渲染文档的左侧导航

在 `components` 中加入对象，格式如下：
```javascript
{
  key: 'colorPicker', // 用于寻找文件、路由导航
  isMarkdownPage: true, // 是否为 markdown 的页面，当 true 时会形成链接
  name: 'ColorPicker 颜色选择器', // 导航内显示的文字
  style: {} // 样式，一级标题可以解构赋值 LevelOneStyle，二级标题解构赋值 LevelTwoStyle
},
```
注：文档左侧导航的渲染顺序是按照数组顺序渲染的，并没有自动字典排序，需要手动字典排序

然后在 `@/examples/docs` 中新建一个 markdown 文件，文件名是上面的 `${key}.md`

然后参照其他的 markdown 文件编写文档即可，下面简单介绍格式：

- 一级标题：用于文档名称
- 二级标题：类目或属性
- 不需要组件渲染的示例代码写在三个反引号内
- 需要组件渲染的示例代码写在 `:::demo` 和 `:::` 中间，并且格式代码格式为 `html`

详情参照其他的 md 文档