# Video 视频
当播放制作一个视频播放器时，html5 提供的 `<video>` 标签虽然功能很多，但是样式并不好看，也缺乏一些功能需要额外封装。
Deja vu 对此进行了一些封装

## 基础用法
适用于最简单的视频展示

:::demo
```html
<Video src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"></Video>
```
:::

## Attributes
| 参数 | 说明 | 类型 | 可选值 | 默认值 | 备注 |
| :----- | :----- | :----- | :----- | :----- | :----- |
| src | 视频播放地址 | String | - | - | - |
| list | 视频播放列表 | Array[String] | - | - | - |
| size | 尺寸 | String | medium/small/mini | medium | - |
| width | 播放器宽度 | Number | - | 400 | 设置宽度后 size 属性失效 |
| height | 播放器高度 | Number | - | 377 | 设置高度后 size 属性失效 |
| preload | 预加载 | String | - | - | video 标签属性 |
| muted | 静音 | String | - | - | video 标签属性 |
