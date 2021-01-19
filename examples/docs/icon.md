# Icon 图标
提供了一些有可能会用到的图标集合

## 使用方法
通过 type 将图标引入

:::demo
```html
<div>
  <Icon class="icon-demo" type="dashboard"></Icon>
  <Icon class="icon-demo" type="list"></Icon>
  <Icon class="icon-demo" type="camera"></Icon>
</div>

<style>
.icon-demo {
  font-size: 30px;
  margin-right: 40px;
}
</style>
```
:::



## 图标集合
:::demo
```html
<div class="icon-demo" v-for="(item,index) in list" :key="index">
  <div class="icon-demo-name">{{ item.name }}</div>
  <div class="icon-demo-container">
    <div class="icon-demo-box" v-for="(icon, iIndex) in item.iconList" :key="iIndex">
      <Icon class="icon-demo-item" :type="icon"></Icon>
      <div class="name">{{ icon }}</div>
    </div>
    <div class="icon-demo-box" v-if="item.iconList.length % 3 === 2" style="box-shadow: none;"></div>
  </div>
</div>
<script>
const icons = require('../../packages/Icon/component/dictionary').default
export default {
  data () {
    return {
      list: []
    }
  },
  mounted () {
    icons.map(e => {
      const iconList = []
      for (const key in e.icons) {
        iconList.push(key)
      }
      e.iconList = iconList
    })
    this.list = icons
  }
}
</script>
```
:::

未绘制完成的图标
#### 常用
- 用户
- 星星
- 半刻星星
- 空心星星
- 放大
- 缩小
- 放大镜
- 设置
- 删除
- 更多 ···
- 加
- 减
- 编辑
- 保存
- 图片
- 视频
- 音频
- 相机
- 录像机
- 胶片
- 光圈
- 对
- 错
- 信息
- 问题
- 消息铃铛
- 文件
- 文件夹
- 票
- 飞机
- 家/主页
- pc
- 手机
- 旗
- dashboard
- grid
- menu
- idea（想法）
- 统计图标
- 分析图标
- 朋友圈
- 分享
- 上
- 下
- 左
- 右
- 刷新
- 加载
- 眼睛
- 闭眼睛
- 日历
- 打印机
- 回形针
- 鼠标
- 台灯
- 购物车
- 购物车满
- 向导
- 链接
- 未连接
- connection
- cpu
- 信箱
- 麦克风
- 麦克风静音
- 音量-0
- 音量-1
- 音量-2
- 音量-full
- 音量-X
- 时间
- 开关
- 奖牌
- 奖杯
- 秒表
- 定位
- 锁
- 打开的锁
- 钥匙
- 耳机（客服）
- 上传
- 下载
- 条形码
- 二维码
- 电量-0
- 电量-1
- 电量-2
- 电量-3
- 直尺
- 卷尺
- bug
- 扳手
- 电话
- 对话
- 代码
- 吸管
- 剪切
- 复制
- 粘贴
- 指纹解锁
- 人脸解锁
- wifi
- 分支
- 节点
- global
- 心
- 空心心
- 地图
- 音符
- 核辐射标志
- 饼图
- 播放
- 暂停
- 停止
- 上一曲
- 下一曲
- 心电图
- 刷新
- rss
- 赞
- 空心赞


#### 电商
- 购物车
- 购物袋
- 现金
- 银行卡
- 银联
- visa
- mastercard
- jcb
- 美国运通
- 卡车
- 飞机

#### 天气
- 晴
- 月亮
- 日出
- 小雨
- 大雨
- 雷
- 雷雨
- 雪
- 横风
- 多云

#### 餐饮
- 饭
- 菜
- 酒杯
- 饮料
- 冷饮
- 咖啡
- 甜品
- 餐具（刀叉）
- 餐具（叉勺）
- 糖果
- 冰箱
- 外卖