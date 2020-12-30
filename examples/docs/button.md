# Button 按钮
常用操作的按钮

## 基础用法
基础的按钮用法
:::demo
```html
<div style="margin-bottom: 18px;">
  <Button>默认按钮</Button>
  <Button type="primary">主要按钮</Button>
  <Button type="success">成功按钮</Button>
  <Button type="info">信息按钮</Button>
  <Button type="warning">警告按钮</Button>
  <Button type="danger">危险按钮</Button>
</div>
<div style="margin-bottom: 18px;">
  <Button plain>朴素按钮</Button>
  <Button type="primary" plain>主要按钮</Button>
  <Button type="success" plain>成功按钮</Button>
  <Button type="info" plain>信息按钮</Button>
  <Button type="warning" plain>警告按钮</Button>
  <Button type="danger" plain>危险按钮</Button>
</div>
<div style="margin-bottom: 18px;">
  <Button round>圆角按钮</Button>
  <Button type="primary" round>主要按钮</Button>
  <Button type="success" round>成功按钮</Button>
  <Button type="info" round>信息按钮</Button>
  <Button type="warning" round>警告按钮</Button>
  <Button type="danger" round>危险按钮</Button>
</div>
<div style="margin-bottom: 18px;">
  <Button icon="el-icon-search" circle></Button>
  <Button type="primary" icon="el-icon-edit" circle></Button>
  <Button type="success" icon="el-icon-check" circle></Button>
  <Button type="info" icon="el-icon-message" circle></Button>
  <Button type="warning" icon="el-icon-star-off" circle></Button>
  <Button type="danger" icon="el-icon-delete" circle></Button>
</div>
```
:::

## 禁用
:::demo
```html
<div style="margin-bottom: 18px;">
  <Button disabled>默认按钮</Button>
  <Button type="primary" disabled>主要按钮</Button>
  <Button type="success" disabled>成功按钮</Button>
  <Button type="info" disabled>信息按钮</Button>
  <Button type="warning" disabled>警告按钮</Button>
  <Button type="danger" disabled>危险按钮</Button>
</div>

<div style="margin-bottom: 18px;">
  <Button plain disabled>朴素按钮</Button>
  <Button type="primary" plain disabled>主要按钮</Button>
  <Button type="success" plain disabled>成功按钮</Button>
  <Button type="info" plain disabled>信息按钮</Button>
  <Button type="warning" plain disabled>警告按钮</Button>
  <Button type="danger" plain disabled>危险按钮</Button>
</div>
```
:::

## Attributes
| 参数 | 说明 | 类型 | 可选值 | 默认值 | 备注 |
| :----- | :----- | :----- | :----- | :----- | :----- |
| type | 类型 | String | primary/success/warning/danger/info/text | - | - |
| disabled | 是否为禁用按钮 | Boolean | - | false | - |
| plain | 是否为朴素按钮 | Boolean | - | false | - |
| round | 是否为圆角按钮 | Boolean | - | false | - |
| circle | 是否为圆形按钮 | Boolean | - | false | - |
| icon | 图标类名 | String | - | - | - |

## 未完成的功能
- icon 等 icon 模块建立完成了再上
- loading
- size