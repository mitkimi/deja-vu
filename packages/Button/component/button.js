export default {
  name: 'Button',
  props: {
    type: {
      required: false,
      default: 'default'
    },
    size: {
      type: String,
      default: 'medium'
    },
    icon: {
      type: String
    },
    disabled: Boolean,
    danger: Boolean,
    plain: Boolean,
    round: Boolean,
    circle: Boolean,
    square: Boolean
  },
  data () {
    return {
      btnClass: ['dv-button']
    }
  },
  mounted () {
    this.initStyle()
  },
  methods: {
    initStyle () {
      this.type && this.btnClass.push(`dv-button-${this.type}`)
      this.plain && this.btnClass.push('dv-button-plain')
      this.round && this.btnClass.push('dv-button-round')
      this.circle && this.btnClass.push('dv-button-circle')
      this.square && this.btnClass.push('dv-button-square')
      this.danger && this.btnClass.push('dv-button-danger')
      // 配置按钮尺寸
      this.size && this.btnClass.push(`dv-button-${this.size}`)
    }
  }
  // `dv-button ${type && 'dv-button-' + type} ${plain && 'dv-button-plain'}`
}
