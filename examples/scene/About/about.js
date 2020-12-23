import Header from '@/components/Header'

const AboutPage = {
  name: 'AboutPage',
  components: {
    'dv-header': Header
  },
  data () {
    return {
      markdown: require('./about.md')
    }
  }
}

export default AboutPage
