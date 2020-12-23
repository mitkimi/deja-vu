import Header from '@/components/Header'

const DeveloperPage = {
  name: 'DeveloperPage',
  components: {
    'dv-header': Header
  },
  data () {
    return {
      markdown: require('./developer.md')
    }
  }
}

export default DeveloperPage
