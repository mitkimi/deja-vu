# Image 图片
图片容器，在保留原生 img 特性下增加一些新的特性

## 基础用法
:::demo
```html
<div class="demo" style="display: flex; flex-direction: row; justify-content: flex-start;">
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

## 边框
可以通过添加 `border` 属性对图片进行边框的设置

:::demo
```html
<div class="demo" style="display: flex; flex-direction: row; justify-content: flex-start;">
  <div style="margin: 30px 40px;">
    <DImage style="width: 100px; height: 100px" :src="url" border fit="cover"></DImage>
  </div>
  <div style="margin: 30px 40px;">
    <DImage style="width: 100px; height: 100px" :src="url" :border="border" fit="cover"></DImage>
  </div>
</div>

<script>
export default {
  data () {
    return {
      url: '//cdn.illiaccess.com/images/IMG_0677.JPG',
      border: {
        line: '1px solid #ff9900',
        padding: '10px 20px',
        radius: '8px',
        background: '#efeff3'
      }
    }
  }
}
</script>
```
:::

## 阴影
可以通过添加 `shadow` 属性对图片进行阴影的设置

:::demo
```html
<div class="demo" style="display: flex; flex-direction: row; justify-content: flex-start;">
  <div style="margin: 30px 40px;">
    <DImage style="width: 100px; height: 100px" :src="url" shadow fit="cover"></DImage>
  </div>
  <div style="margin: 30px 40px;">
    <DImage style="width: 100px; height: 100px" :src="url" :shadow="shadow" fit="cover"></DImage>
  </div>
</div>

<script>
export default {
  data () {
    return {
      url: '//cdn.illiaccess.com/images/IMG_0677.JPG',
      shadow: '0 0 20px 0 rgba(0, 0, 0, .8)'
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
| fit | 确定图片如何适应容器，属性对应 object-fit | String | `fill` / `contain` / `cover` / `none` / `scale-down` | `none` | - |
| src | 图片地址 | String | - | - | - |
| alt | 原生 alt | String | - | - | - |
| border | 边框 | Boolean/Object | - | false | 见下表 |
| shadow | 阴影 | Boolean/String | - | false | 传入样式时，将渲染 `css[box-shadow]` 属性 |

## props
### border
| 参数 | 说明 | 类型  | 举例 | 备注 |
| :----- | :----- | :----- | :----- | :----- |
| line | 用于描述边框线的粗细、线性和颜色 | String | 1px solid #efeff3 | 内联属性，使用 `css[border]` 属性 |
| padding | 边框内向图片挤的内边距 | String | 10px 20px | 同上（`css[padding]`），内部的图片将保持原来的宽高 |
| radius | 边框的圆角| String | 8px | 同上（`css[border-radius]`） |
| background | 背景 | String | - | 同上（`css[background]`），可设置颜色、渐变、图片 |
