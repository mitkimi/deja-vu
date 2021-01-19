# Button 按钮
按钮用于开始一个即时操作。

## 何时使用
标记了一个（或封装一组）操作命令，响应用户点击行为，触发相应的业务逻辑。

在 HONGQI Design 中我们提供了五种按钮。

- 主按钮：用于主行动点，一个操作区域只能有一个主按钮。
- 默认按钮：用于没有主次之分的一组行动点。
- 虚线按钮：常用于添加操作。
- 文本按钮：用于最次级的行动点。
- 链接按钮：用于作为外链的行动点。

及四种状态属性与上面配合使用。

- 危险：删除/移动/修改权限等危险操作，一般需要二次确认。
- 幽灵：用于背景色比较复杂的地方，常用在首页/产品页等展示场景。
- 禁用：行动点不可用的时候，一般需要文案解释。
- 加载中：用于异步操作等待反馈的时候，也可以避免多次提交。

## 代码演示
#### 文字按钮
文字按钮有五种类型：主按钮、次按钮、虚线按钮、文本按钮和链接按钮。

主按钮在同一个操作区域最多出现不超过2次。

:::demo
```html
<Button type="primary">Button</Button>
<Button type="default">Button</Button>
<Button type="dashed">Button</Button>
<Button type="text">Button</Button>
<Button type="link">Button</Button>
```
:::

#### 图标按钮
在使用图标按钮时，请不要设置插槽

:::demo
```html
<div class="button-container">
  <Button type="primary" icon="search" square></Button>
  <Button type="default" icon="search" square></Button>
  <Button type="dashed" icon="search" square></Button>
  <Button type="link" icon="search" square></Button>
</div>
<div class="button-container">
  <Button type="primary" icon="search" circle></Button>
  <Button type="default" icon="search" circle></Button>
  <Button type="dashed" icon="search" circle></Button>
  <Button type="link" icon="search" circle></Button>
</div>
```
:::

#### 图标+文字按钮
当需要在 Button 内嵌入 Icon 时，可以设置 icon 属性，或者直接在 Button 内使用 Icon 组件。

如果想控制 Icon 具体的位置，只能直接使用 Icon 组件，而非 icon 属性
:::demo
```html
<div class="button-container">
  <Button type="primary" icon="search">Button</Button>
  <Button type="default" icon="search">Button</Button>
  <Button type="dashed" icon="search">Button</Button>
</div>
<div class="button-container">
  <Button type="primary" icon="search" round>Button</Button>
  <Button type="default" icon="search" round>Button</Button>
  <Button type="dashed" icon="search" round>Button</Button>
</div>
```
:::


#### 按钮尺寸
:::demo
```html
<div class="button-container">
  <Button type="primary" size="large">Button</Button>
  <Button type="primary" size="medium">Button</Button>
  <Button type="primary" size="small">Button</Button>
  <Button type="primary" size="mini">Button</Button>
</div>
<div class="button-container">
  <Button type="default" size="large">Button</Button>
  <Button type="default" size="medium">Button</Button>
  <Button type="default" size="small">Button</Button>
  <Button type="default" size="mini">Button</Button>
</div>
<div class="button-container">
  <Button type="dashed" size="large">Button</Button>
  <Button type="dashed" size="medium">Button</Button>
  <Button type="dashed" size="small">Button</Button>
  <Button type="dashed" size="mini">Button</Button>
</div>
<div class="button-container">
  <Button type="primary" round icon="search" size="large">Search</Button>
  <Button type="primary" round icon="search" size="medium">Search</Button>
  <Button type="primary" round icon="search" size="small">Search</Button>
  <Button type="primary" round icon="search" size="mini">Search</Button>
</div>
```
:::


#### 危险按钮
危险按钮时一种属性，而不是类型

:::demo
```html
<div class="button-container">
  <Button type="primary" danger>Button</Button>
  <Button type="default" danger>Button</Button>
  <Button type="dashed" danger>Button</Button>
  <Button type="text" danger>Button</Button>
  <Button type="link" danger>Button</Button>
</div>
```
:::

#### 不可用状态
:::demo
```html
<div class="button-container">
  <Button type="primary">Primary</Button>
  <Button type="primary" disabled>Primary(disabled)</Button>
</div>
<div class="button-container">
  <Button type="default">Default</Button>
  <Button type="default" disabled>Default(disabled)</Button>
</div>
<div class="button-container">
  <Button type="dashed">Dashed</Button>
  <Button type="dashed" disabled>Dashed(disabled)</Button>
</div>
<div class="button-container">
  <Button type="text">Text</Button>
  <Button type="text" disabled>Text(disabled)</Button>
</div>
<div class="button-container">
  <Button type="link">Link</Button>
  <Button type="link" disabled>Link(disabled)</Button>
</div>
<div class="button-container">
  <Button type="primary" danger>Danger</Button>
  <Button type="primary" danger disabled>Danger(disabled)</Button>
</div>
<div class="button-container">
  <Button type="dashed" danger>Danger Dashed</Button>
  <Button type="dashed" danger disabled>Danger Dashed(disabled)</Button>
</div>
<div class="button-container">
  <Button type="text" danger>Danger Text</Button>
  <Button type="text" danger disabled>Danger Text(disabled)</Button>
</div>
<div class="button-container">
  <Button type="link" danger>Danger Link</Button>
  <Button type="link" danger disabled>Danger Link(disabled)</Button>
</div>
```
:::

## Attributes
| 参数 | 说明 | 类型 | 可选值 | 默认值 | 备注 |
| :----- | :----- | :----- | :----- | :----- | :----- |
| type | 类型 | String | primary/default/dashed/text/link | - | - |
| disabled | 是否为禁用按钮 | Boolean | - | false | - |
| round | 是否为圆角按钮 | Boolean | - | false | - |
| square | 是否为方形按钮 | Boolean | - | false | - |
| circle | 是否为圆形按钮 | Boolean | - | false | - |
| icon | 图标类名 | String | - | - | - |

## 未完成的功能
- loading
- size