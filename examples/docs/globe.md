# Globe 地球仪

生成一个带有地球效果的区域，并且可以根据需求展示一些数据

本功能使用 three.js、globe.gl 等库封装，向他们表示感谢

在使用时不必额外安装这些库，Deja vu 的依赖已经替你安装好了

## 基本用法
:::demo
```html
<Globe nightSky haze rotate></Globe>
```
:::


## Attributes
| 参数 | 说明 | 类型 | 可选值 | 默认值 | 备注 |
| :----- | :----- | :----- | :----- | :----- | :----- |
| width | 容器宽度 | String | - | 100% | - |
| height | 容器高度 | String | - | 400px | - |
| rotate | 自动旋转 | Boolean/Number | - | false | 当设定旋转时，默认转速为 1.8 |
| data | 传入数据 | Array | - | - | 详见使用方法 |
| earth | 地球贴图 | String | default/earth-dark | default | - |
| pumb | 显示地形 | Boolean | - | false | - |
| nightSky | 显示夜空 | Boolean | - | false | - |
| atmosphere | 显示大气 | Boolean | - | false | - |
| graticules | 显示经纬网格线 | Boolean | - | false | - |
| haze | 显示漂浮的地形 | Boolean | - | false | haze 的意思时霾 |
| earth | 地球贴图 | String | default/earth-dark | default | - |
| cover | 地球的覆盖物 | Boolean/Object | - | false | - |

## 使用地球仪展示数据
当使用地球仪展示数据时，遵循以下的参数
:::demo
```html
<template>
  <Globe earth="earth-dark" :data="data" :cover="cover" style="background: #000000"></Globe>
</template>

<script>
export default {
  data () {
    return {
      data: [
        {
          lat: 23.904154,
          lng: -11.722282,
          pop: 20.08000
        },
        {
          lat: 18.956187,
          lng: -17.789095,
          pop: 12.5796
        },
        {
          lat: 11.734199,
          lng: -17.301889,
          pop: 69.9893
        }
      ],
      cover: {
        resolution: 2,
        margin: 0.1,
        color: () => `#${Math.round(Math.random() * Math.pow(2, 24)).toString(16).padStart(6, '0')}`
      }
    }
  }
}
</script>
```
:::


### cover props
地球六边形覆盖物的属性设置如下：
| 属性 | 说明 | 类型 | 可选值 | 默认值 | 备注 |
| :----- | :----- | :----- | :----- | :----- | :----- |
| resolution | 覆盖物尺寸 | Number | 1 ～ 5 | 2 | 数字越小，面积越大 |
| margin | 覆盖物间距 | Number | 0 ～ 1 | 0.1 | - |
| color | 覆盖物颜色 | function | - | `() => '#1c2044'` | - |

### data props
地球展示数据传入时，遵循以下方法
<!-- 地球六边形覆盖物的属性设置如下：
| 属性 | 说明 | 类型 | 可选值 | 默认值 | 备注 |
| :----- | :----- | :----- | :----- | :----- | :----- |
| resolution | 覆盖物尺寸 | Number | 1 ～ 5 | 2 | 数字越小，面积越大 |
| margin | 覆盖物间距 | Number | 0 ～ 1 | 0.1 | - |
| color | 覆盖物颜色 | function | - | `() => '#1c2044'` | - | -->
