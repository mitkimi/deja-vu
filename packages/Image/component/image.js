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
    preview: Boolean
  }
}
