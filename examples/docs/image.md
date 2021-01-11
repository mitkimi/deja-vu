# Image 图片
图片容器，在保留原生 img 特性下增加一些新的特性

## 基础用法
:::demo
```html
<div class="demo" style="display: flex; flex-direction: row; justify-content: space-between;">
  <div v-for="fit,index in fits" :key="index" style="margin: 30px 40px;">
    <div style="text-align: center; margin-bottom: 20px;">{{ fit }}</div>
    <DImage style="width: 100px; height: 100px" :src="url" :fit="fit"></DImage>
  </div>
</div>

<script>
export default {
  data () {
    return {
      fits: [
        'fill',
        'contain',
        'cover',
        'scale-down',
        'none'
      ],
      url: '//cdn.illiaccess.com/images/IMG_0677.JPG'
    }
  }
}
</script>
```
:::

## Attributes
| 参数 | 说明 | 类型 | 可选值 | 默认值 | 备注 |
| :----- | :----- | :----- | :----- | :----- | :----- |
| width | 宽度 | String | - | 100% | - |
| height | 高度 | String | - | 100% |  |
| fit | 确定图片如何适应容器，属性对应 object-fit | String | fill / contain / cover / none / scale-down | none | - |
| src | 图片地址 | String | - | - | - |
| alt | 原生 alt | String | - | - | - |