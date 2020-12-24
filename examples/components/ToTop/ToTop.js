const ToTop = {
  name: 'ToTop',
  data () {
    return {
      scroll: 0,
      rocketClass: 'to-top'
    }
  },
  mounted () {
    window.addEventListener('scroll', this.listenScroll)
  },
  destoryed () {
    window.removeEventListener('scroll', this.listenScroll)
  },
  methods: {
    listenScroll () {
      this.scroll = document.documentElement.scrollTop || document.body.scrollTop
      if (this.scroll > 300) {
        this.rocketClass = 'to-top to-top-show'
      } else {
        this.rocketClass = 'to-top'
      }
    },
    handleScrollTop () {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
      const period = 18
      let next = scrollTop - scrollTop / period
      const timer = setInterval(() => {
        window.scrollTo(0, next)
        next -= scrollTop / period
        if (next <= -100) {
          clearInterval(timer)
        }
      }, period)
    }
  }
}

export default ToTop
