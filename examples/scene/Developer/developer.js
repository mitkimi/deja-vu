import Header from '@/components/Header'
import Footer from '@/components/Footer'
import DevelopP from './developer.md'
import '@/assets/docs.less'
import 'highlight.js/styles/github.css'
import hljs from 'highlight.js'

const highlightCode = () => {
  const preEl = document.querySelectorAll('pre')
  preEl.forEach((el) => {
    hljs.highlightBlock(el)
  })
}

const DevelopPage = {
  name: 'AboutPage',
  components: {
    'dv-header': Header,
    'dv-footer': Footer,
    'developer-page': DevelopP
  },
  mounted () {
    highlightCode()
  },
  updated () {
    highlightCode()
  }
}

export default DevelopPage
