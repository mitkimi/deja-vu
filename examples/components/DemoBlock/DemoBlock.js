import collapse from './elTransition'
export default {
  props: {
    desc: {}
  },
  components: {
    collapse
  },
  data () {
    return {
      scoped: false
    }
  },
  mounted () {
    console.log('desc', this.desc)
  },
  methods: {
    handleCodeToggle (buffer) {
      const target = buffer || !this.scoped
      this.scoped = target
    }
  }
}
