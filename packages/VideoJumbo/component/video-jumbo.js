export default {
  name: 'VideoJumbo',
  props: {
    src: {
      type: String,
      required: true
    },
    width: {
      type: String,
      default: '100%'
    },
    height: {
      type: String,
      default: '100%'
    },
    coverColor: {
      type: String,
      default: 'rgba(0, 0, 0, .48)'
    }
  }
}
