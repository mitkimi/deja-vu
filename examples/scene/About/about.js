import Header from '@/components/Header'
import Footer from '@/components/Footer'
import AboutP from './about.md'
import '@/assets/docs.less'

const AboutPage = {
  name: 'AboutPage',
  components: {
    'dv-header': Header,
    'dv-footer': Footer,
    'about-page': AboutP
  }
}

export default AboutPage
