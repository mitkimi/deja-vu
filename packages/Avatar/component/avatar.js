export default {
  name: 'Avatar',
  props: {
    src: {
      type: [Boolean, String],
      default: false
    },
    name: {
      type: [Boolean, String],
      default: false
    },
    icon: {
      type: [Boolean, String],
      default: false
    },
    shape: {
      type: String,
      default: 'square'
    },
    fit: {
      type: String,
      default: 'cover'
    },
    size: {
      type: [String, Number],
      default: 'm'
    }
  },
  data () {
    return {
      width: '60px',
      height: '60px',
      myName: '',
      nameSize: '14px'
    }
  },
  mounted () {
    this.initComponentSize()
    this.initName()
  },
  methods: {
    initName () {
      const name = this.name
      if (name.length <= 7) {
        this.myName = name
      } else if (name.length > 7 && name.length <= 11) {
        this.myName = name
        this.nameSize = '9px'
      } else {
        this.myName = name.substr(0, 11)
        this.nameSize = '9px'
      }
    },
    initComponentSize () {
      let size = 80
      switch (this.size) {
        case 'l':
          size = 100
          break
        case 'm':
          size = 80
          break
        case 's':
          size = 60
          break
        default:
          size = (typeof this.size === 'number') ? this.size : size
          break
      }
      this.width = `${size}px`
      this.height = `${size}px`
    }
  }
}
