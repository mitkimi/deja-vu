const GIO = require('giojs')
export default {
  name: 'Global',
  props: {
    width: {
      type: String,
      default: '100%'
    },
    height: {
      type: String,
      default: '400px'
    },
    config: {
      type: Object,
      default: {
        control: {
          stats: false, // 打开性能监控
          disableUnmentioned: false, // 未提及国家不可点击
          lightenMentioned: false, // 提及国家比未提及国家更亮
          inOnly: false, // 只显示输入线条
          outOnly: false, // 只显示输出线条
          initCountry: 'CN', // 初始国家
          halo: true // 光晕
        },
        color: {
          surface: 0xFFFFFF, // 大陆和海洋的颜色
          selected: null, // 被选中国家的颜色
          in: 0x154492, // 输入线条 颜色
          out: 0xDD380C, // 输出线条 颜色
          halo: 0xFFFFFF, // 光晕颜色
          background: null // 背景
        },
        brightness: {
          ocean: 0.5, // 海洋亮度
          mentioned: 0.5, // 被提及国家亮度
          related: 0.5 // 有关国家亮度
        }
      }
    },
    rotate: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      data: []
    }
  },
  mounted () {
    // console.log('demoData', data)
    // this.data = data
    this.initGlobe()
  },
  methods: {
    initGlobe () {
      const configs = this.config
      const container = this.$refs.globalArea
      const controller = new GIO.Controller(container, configs)
      controller.addData(this.data)
      controller.init()
      this.rotate && controller.setAutoRotation(true, 1)
    }
  }
}
