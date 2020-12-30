import Header from '@/components/Header'
const md = require('markdown-it')({
  html: true,
  linkify: true,
  typographer: true
})

const DeveloperPage = {
  name: 'DeveloperPage',
  components: {
    'dv-header': Header
  },
  data () {
    return {
      markdown: ''
    }
  },
  mounted () {
    const buffer = md.render('# 你好')
    // this.markdown = buffer
    console.log(buffer)
  }
}

export default DeveloperPage
