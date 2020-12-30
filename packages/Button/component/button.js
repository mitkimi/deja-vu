export default {
  name: 'Button',
  props: {
    type: {
      required: false,
      default: 'default'
    },
    disabled: Boolean,
    plain: Boolean,
    round: Boolean,
    circle: Boolean
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
    }
  }
  // `dv-button ${type && 'dv-button-' + type} ${plain && 'dv-button-plain'}`
}
