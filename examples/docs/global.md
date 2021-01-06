# Global 地球仪

生成一个带有地球效果的区域，并且可以根据需求展示一些数据

本功能使用 three.js、gio.js 等库封装，向他们表示感谢

在使用时不必额外安装这些库，Deja vu 的依赖已经替你安装好了

## 基本用法
:::demo
```html
<Global rotate></Global>
```
:::

## 使用地球仪表示进出
当使用地球仪表示进出时，遵循以下的参数
:::demo
```html
<template>
  <Global :config="configs" :data="data" rotate></Global>
</template>

<script>
export default {
  data () {
    return {
      data: [
        {
          e: 'CN',
          i: 'US',
          v: 330000,
          inColor: '#0000FF',
          outColor: '#00FF00'
        },
        {
          e: 'TW',
          i: 'Europe',
          v: 500000
        }
      ],
      configs: {
        control: {
          stats: false, // 打开性能监控
          disableUnmentioned: false, // 未提及国家不可点击
          lightenMentioned: false, // 提及国家比未提及国家更亮
          inOnly: false, // 只显示输入线条
          outOnly: false, // 只显示输出线条
          initCountry: 'CN', // 初始国家
          halo: true // 光晕
        },
        color: {
          surface: '#FFFFFF', // 大陆和海洋的颜色
          selected: null, // 被选中国家的颜色
          in: '#154492', // 输入线条 颜色
          out: '#DD380C', // 输出线条 颜色
          halo: 'FFFFFF', // 光晕颜色
          background: null // 背景
        },
        brightness: {
          ocean: 0.5, // 海洋亮度
          mentioned: 0.5, // 被提及国家亮度
          related: 0.5 // 有关国家亮度
        }
      }
    }
  }
}
</script>
```
:::

## Attributes
| 参数 | 说明 | 类型 | 可选值 | 默认值 | 备注 |
| :----- | :----- | :----- | :----- | :----- | :----- |
| width | 容器宽度 | String | - | 100% | - |
| height | 容器高度 | String | - | 100% | 父容器应有高度 |
| rotate | 自动旋转 | Boolean | - | false | - |
| data | 传入数据 | Array | - | - | 详见使用方法 |
| config | 配置 | Object | - | - | 详见使用方法 |

## 使用方法
### data
`data` 格式遵循以下原则

- data 的数据格式是 `Array(Object)`
- 每个 Object 至少包含 3 个参数： `e/i/v`
  - e 表示输出国/地区（from），只能是国家或地区的代码
  - i 表示输入国/地区（to），可以是国家或地区的代码，也可以是洲
  - v 表示值，值越大，光点越多
- 可单独设置某一条线的颜色
  - inColor
  - outColor

```javascript
[
  // 中国向美国输出的例子
  {
    e: 'CN',
    i: 'US',
    v: 330000,
    inColor: '#0000FF',
    outColor: '#00FF00'
  },
  // 中国台湾向欧洲输出的例子
  {
    e: 'TW',
    i: 'Europe',
    v: 500000
  }
  // ... some codes ...
]
```
洲 - 参数表
| 洲 | 参数 |
| :----- | :----- |
| 大洋洲 | Oceania |
| 北美洲 | North America |
| 南美洲 | South America |
| 欧洲 | Europe |
| 亚洲 | Asia |
| 非洲 | Africa |

### config

```javascript
{
  control: {
    stats: false, // 打开性能监控
    disableUnmentioned: false, // 未提及国家不可点击
    lightenMentioned: false, // 提及国家比未提及国家更亮
    inOnly: false, // 只显示输入线条
    outOnly: false, // 只显示输出线条
    initCountry: 'CN', // 初始国家
    halo: true // 光晕
  },
  color: {
    surface: '#FFFFFF', // 大陆和海洋的颜色
    selected: null, // 被选中国家的颜色
    in: '#154492', // 输入线条 颜色
    out: '#DD380C', // 输出线条 颜色
    halo: 'FFFFFF', // 光晕颜色
    background: null // 背景
  },
  brightness: {
    ocean: 0.5, // 海洋亮度
    mentioned: 0.5, // 被提及国家亮度
    related: 0.5 // 有关国家亮度
  }
}
```