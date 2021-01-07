# 快速上手

这一部分将介绍如何在项目中使用 Deja vu

## 引入 Deja vu

你可以完整引入整个 Deja vu，或者根据需要按需加载

### 完整引入

```javascript
import Vue from 'vue'
import DejaVu from '@mitkimi/deja-vu'
import '@mitkimi/deja-vu/lib/@mitkimi/deja-vu.css'
import App from './App'

Vue.use(DejaVu)

new Vue({
  el: '#app',
  render: h => h(App)
})
```

以上代码便完成了 Deja vu 的引入。

值得一提的是，样式文件需要单独引入。

### 按需加载

借助 [babel-plugin-component](https://github.com/QingWei-Li/babel-plugin-component)，我们可以只引入需要的组件，以达到见效项目体积的目的。
首先安装 `babel-plugin-component`
```bash
npm install babel-plugin-component --save-dev
```
然后，将 `.babelrc` 修改为
```javascript
{
  "presets": [["es2015", { "modules": false }]],
  "plugins": [
    [
      "component",
      {
        "libraryName": "@mitkimi/deja-vu"
      }
    ]
  ]
}
```

接下来，如果你只希望引入部分组件，比如 `Button` 和 `Select`，那么需要在 `main.js` 中写入一下内容

```javascript
import Vue from 'vue'
import { Button, Select } from '@mitkimi/deja-vu'
import App from './App'

Vue.component(Button.name, Button)

// 或者写成这种形式
Vue.use(Button)

new Vue({
  el: '#app',
  render: h => h(App)
})
```

## 开始使用

## 在 `nuxt.js` 中使用

首先，在 `plugins/` 目录中建立一个 `deja-vu.js` 文件，内容如下：
```javascript
import Vue from 'vue'
import DejaVu from '@mitkimi/deja-vu'

Vue.use(DejaVu)
```

然后修改 `nuxt.config.js` 的内容，在 `plugins` 属性中引入，并设置为在服务端运行
```javascript
// ... some codes ...
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [{
    src:'~plugins/deja-vu',
    ssr: true // 是能在服务端运行
  }
// ... some codes ...
```
