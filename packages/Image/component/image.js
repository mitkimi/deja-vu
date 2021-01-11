export default {
  name: 'DImage',
  props: {
    src: {
      type: String
    },
    width: {
      type: String,
      default: '100%'
    },
    height: {
      type: String,
      default: '100%'
    },
    fit: {
      type: String,
      default: 'none'
    },
    alt: {
      type: String,
      default: null
    },
    preview: Boolean,
    border: {
      type: [Boolean, Object],
      default: false
    },
    shadow: {
      type: [Boolean, String],
      default: false
    }
  },
  mounted () {
    console.log('=>', 'this.shadow', typeof this.shadow === 'string')
  }
}
