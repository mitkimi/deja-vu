# Switch 开关
开关表示两种完全对立状态之间的切换

## 何时使用
需要表示开关状态/两种状态之间的切换时

和 `checkbox` 的区别时切换 `switch` 会直接触法状态的改变，而 `checkbox` 一般用于状态标记，需要和提交操作配合

## 代码演示
### 基本用法

:::demo
```html
<DSwitch v-model="value"></DSwitch>

<script>
export default {
  data () {
    return {
      value: false
    }
  }
}
</script>
```
:::

### 设置状态颜色

:::demo
```html
<DSwitch v-model="value"
  :activeColor="color.active"
  :inactiveColor="color.inactive">
</DSwitch>

<script>
export default {
  data () {
    return {
      value: false,
      color: {
        active: '#13ce66',
        inactive: '#ff4949'
      }
    }
  }
}
</script>
```
:::

### 禁用状态
:::demo
```html
<DSwitch v-model="value" disabled></DSwitch>

<script>
export default {
  data () {
    return {
      value: false
    }
  }
}
</script>
```
:::

## Attributes

| 参数 | 说明 | 类型 | 可选值 | 默认值 | 备注 |
| :----- | :----- | :----- | :----- | :----- | :----- |
| v-model | 开关状态 | Boolean | - | - | - |
| disabled | 禁用 | Boolean | - | false | - |
| activecolor | 打开颜色 | String(HEX) | - | #0066cc | - |
| inactiveColor | 关闭颜色 | String(HEX) | - | #cccccc | - |