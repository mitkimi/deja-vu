# Grid 栅格

这一部分将介绍 Deja vu 的栅格设计。
根据调研大多数的 UI 库的栅格系统，现代 UI 库似乎非常倾向于使用 24 格的栅格系统。

## 设计理念

:::demo 通过 row 和 col 组件，并通过 col 组件的 `span` 属性我们就可以自由地组合布局。
```html
<el-row>
  <el-col :span="24"><div class="grid-content bg-purple-dark"></div></el-col>
</el-row>
<el-row>
  <el-col :span="12"><div class="grid-content bg-purple"></div></el-col>
  <el-col :span="12"><div class="grid-content bg-purple-light"></div></el-col>
</el-row>
<el-row>
  <el-col :span="8"><div class="grid-content bg-purple"></div></el-col>
  <el-col :span="8"><div class="grid-content bg-purple-light"></div></el-col>
  <el-col :span="8"><div class="grid-content bg-purple"></div></el-col>
</el-row>
<el-row>
  <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
  <el-col :span="6"><div class="grid-content bg-purple-light"></div></el-col>
  <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
  <el-col :span="6"><div class="grid-content bg-purple-light"></div></el-col>
</el-row>
<el-row>
  <el-col :span="4"><div class="grid-content bg-purple"></div></el-col>
  <el-col :span="4"><div class="grid-content bg-purple-light"></div></el-col>
  <el-col :span="4"><div class="grid-content bg-purple"></div></el-col>
  <el-col :span="4"><div class="grid-content bg-purple-light"></div></el-col>
  <el-col :span="4"><div class="grid-content bg-purple"></div></el-col>
  <el-col :span="4"><div class="grid-content bg-purple-light"></div></el-col>
</el-row>

<style>
  .el-row {
    margin-bottom: 20px;
    &:last-child {
      margin-bottom: 0;
    }
  }
  .el-col {
    border-radius: 4px;
  }
  .bg-purple-dark {
    background: #99a9bf;
  }
  .bg-purple {
    background: #d3dce6;
  }
  .bg-purple-light {
    background: #e5e9f2;
  }
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }
  .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }
</style>
```
:::

在多数的业务情况下，24 格会比 12 格系统更加灵活。我们也使用了横向区域 24 等分的设计。
划分之后的信息区块我们称之为“盒子”。
在业务场景下我们建议横排的盒子数量为 1 ～ 4 个。

## 概述
布局栅格时，我们基于行 `row` 和列 `col` 来定义区块的外部框架，以保证每隔区域可以稳定的排布
- 通过 `row` 在水平方向上建立一组 column （简写即为`col`）；
- 你的内容要放置在 `col` 中；
- 栅格中的列指的是所占格宽度的数量，取值是 1 ～ 24；
- 如果一个 `row` 中的 `col` 总和超过 24，那么多余的 `col` 将会在新行排列

我们的栅格系统基于 Flex 布局，可以通过样式 style 属性对其样式进行重写
