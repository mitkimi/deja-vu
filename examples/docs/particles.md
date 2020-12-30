# Particles 粒子特效
生成一个带有粒子系统背景的区域，包含插槽

## 基本用法
:::demo
```html
<Particles width="100%" height="400px">
  <div :style="{
    width: '200px',
    height: '80px',
    background: '#000000',
    color: '#ffffff',
    fontSize: '32px',
    borderRadius: '10px',
    textAlign: 'center',
    lineHeight: '80px'
  }">Deja vu</div>
</Particles>
```
:::

## Attributes
| 参数 | 说明 | 类型 | 可选值 | 默认值 | 备注 |
| :----- | :----- | :----- | :----- | :----- | :----- |
| width | 容器宽度 | String | - | 100% | - |
| height | 容器高度 | String | - | 100% | 父容器应有高度 |
| color | 粒子颜色 | String | - | #dedede | - |
| particleOpacity | 粒子透明度 | Number | 0～1 | .7 | - |
| particlesNumber | 粒子数量 | Number | 1～∞ | 80 | - |
| shapeType | 粒子形状 | String | - | circle/edge/triangle/polygon/star | - |
| particleSize | 粒子尺寸 | Number | - | 4 | - |
| linesColor | 粒子连线颜色 | String | - | #dedede | - |
| linesWidth | 线粗 | Number | - | 1 | - |
| lineLinked | 是否连线 | Boolean | - | true | - |
| lineOpacity | 连线透明度 | Number | 0～1 | .4 | - |
| linesDistance | 线长 | Number | - | 150 | - |
| moveSpeed | 移动速度 | Number | - | 3 | - |
| hoverEffect | 鼠标的 hover 效果 | Boolean | - | true | - |
| hoverMode | hover 模式 | String | grab/repulse/bubble | grab | - |
| clickEffect | 点击效果 | Booean | - | true | - |
| clickMode | 点击模式 | String | push/remove/repulse/bubble | push | - |

## 建议
视频背景往往用在网页第一屏，当在这里使用时，建议保留部分第二瓶内容以提示用户页面可以滚动，此时将 `height` 属性设置为 80vh （即视口高度的 80%）可以达到比较好的效果。