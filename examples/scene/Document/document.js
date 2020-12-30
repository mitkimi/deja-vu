import 'highlight.js/styles/github.css'
// import 'github-markdown-css'
import './docs.less'
import hljs from 'highlight.js'
import Header from '@/components/Header'
import Menu from './nav'
import allMds from '../../docs'

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
  data () {
    return {
      allMds,
      mdList: []
    }
  },
  computed: {
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
    this.loadMarkdown()
  },
  updated () {
    highlightCode()
    // this.loadMarkdown()
  },
  methods: {
    loadMarkdown () {
      const arr = []
      const buffer = [...Menu.guide, ...Menu.components]
      buffer.map(e => {
        if (e.isMarkdownPage) {
          arr.push(e.key)
        }
      })
      this.mdList = arr
    },
    handleRoute (key) {
      const buffer = this.$route.path.split('/')
      buffer.shift()
      const menuStr = buffer[0]
      const path = `/${menuStr}/${key}`
      console.log('next path', path)
      this.$router.push({
        path
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
