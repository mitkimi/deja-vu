import collapse from './elTransition'
import 'highlight.js/styles/github.css'
import hljs from 'highlight.js'
const highlightCode = () => {
  const preEl = document.querySelectorAll('pre')
  preEl.forEach((el) => {
    hljs.highlightBlock(el)
  })
}
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
    highlightCode()
  },
  updated () {
    highlightCode()
  },
  methods: {
    handleCodeToggle (buffer) {
      const target = buffer || !this.scoped
      this.scoped = target
    }
  }
}
