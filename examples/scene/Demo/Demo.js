import Header from '@/components/Header'

const DemoScene = {
  name: 'Demo',
  components: {
    'dv-header': Header
  },
  data () {
    return {
      playList: [
        {
          name: '8s 宣传片',
          poster: 'https://www.heelysfly.com/_nuxt/img/aecb0591556913.5e349151df357.a72b413.jpg',
          duration: 8,
          url: 'https://cdn.heelysfly.com/heelysflycom/pcweb/8s.mp4'
        },
        {
          name: '19s 宣传片',
          poster: 'https://www.heelysfly.com/_nuxt/img/5af70491556913.5e349151d7573.60ee5f6.jpg',
          duration: 19,
          url: 'https://cdn.heelysfly.com/heelysflycom/pcweb/19s.mp4'
        }
      ],
      playList2: [
        'https://cdn.heelysfly.com/heelysflycom/pcweb/19s.mp4',
        'https://cdn.heelysfly.com/heelysflycom/pcweb/8s.mp4'
      ]
    }
  }
}

export default DemoScene
