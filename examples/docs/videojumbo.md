# VideoJumbo 视频背景
生成一个带有视频背景的区域，包含插槽

## 基本用法
:::demo
```html
<VideoJumbo src="//cdn.illiaccess.com/video/3ac170be-17395147540.mp4" width="100%" height="400px">
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
</VideoJumbo>
```
:::

## Attributes
| 参数 | 说明 | 类型 | 可选值 | 默认值 | 备注 |
| :----- | :----- | :----- | :----- | :----- | :----- |
| src | 视频播放地址 | String | - | - | - |
| width | 容器宽度 | String | - | 100% | - |
| height | 容器高度 | String | - | 100% | 父容器应有高度 |
| coverColor | 蒙板颜色 | String | - | rgba(0, 0, 0, .28) | 使用带有 alpha 通道的颜色 |

## 建议
视频背景往往用在网页第一屏，当在这里使用时，建议保留部分第二瓶内容以提示用户页面可以滚动，此时将 `height` 属性设置为 80vh （即视口高度的 80%）可以达到比较好的效果。