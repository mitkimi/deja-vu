import 'highlight.js/styles/github.css'
import 'github-markdown-css'
import hljs from 'highlight.js'
import Header from '@/components/Header'
import Menu from './menu'

const highlightCode = () => {
  const preEl = document.querySelectorAll('pre')
  preEl.forEach((el) => {
    hljs.highlightBlock(el)
  })
}

const DocumnetScene = {
  name: 'Documnetpage',
  components: {
    'dv-header': Header
  },
  computed: {
    markdown () {
      const buffer = require(`../../docs/${this.$route.params.routeId}.md`)
      return buffer
    },
    menu () {
      const buffer = this.queryMenu()
      return buffer
    },
    activeMenu () {
      return this.$route.params.routeId
    }
  },
  mounted () {
    highlightCode()
  },
  updated () {
    highlightCode()
  },
  methods: {
    test () {
      hljs.initHighlighting()
    },
    handleRoute (key) {
      const buffer = this.$route.path.split('/')
      buffer.shift()
      const menuStr = buffer[0]
      this.$router.push({
        path: `/${menuStr}/${key}`
      })
    },
    queryMenu () {
      const buffer = this.$route.path.split('/')
      buffer.shift()
      const menuStr = buffer[0]
      return Menu[menuStr]
    }
  }
}

export default DocumnetScene
