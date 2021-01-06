import TWEEN from '@tweenjs/tween.js'
import { DAT } from './globe'
// const data = require('./population909500.json')
import data from './population909500.json'
export default {
  name: 'Global',
  data () {
    return {
      data: [],
      series: ['1990', '1995', '2000']
    }
  },
  mounted () {
    console.log('demoData', data)
    this.data = data
    this.initGlobe()
  },
  methods: {
    initGlobe () {
      const series = ['1990', '1995', '2000']
      const container = this.$refs.container
      const globe = new DAT.Globe(container)
      // console.log('globe', globe)
      let i = null
      const settime = function (globe, t) {
        return function () {
          new TWEEN.Tween(globe).to({ time: t / series.length }, 500).easing(TWEEN.Easing.Cubic.EaseOut).start()
          const y = document.getElementById('series' + series[t])
          if (y.getAttribute('class') === 'series active') {
            return
          }
          const yy = document.getElementsByClassName('series')
          for (i = 0; i < yy.length; i++) {
            yy[i].setAttribute('class', 'series')
          }
          y.setAttribute('class', 'series active')
        }
      }
      for (let i = 0; i < series.length; i++) {
        const y = document.getElementById('series' + series[i])
        y.addEventListener('mouseover', settime(globe, i), false)
      }
      // TWEEN.start()
      const data = this.data
      window.data = data
      for (i = 0; i < data.length; i++) {
        globe.addData(data[i][1], { format: 'magnitude', name: data[i][0], animated: true })
      }
      globe.createPoints()
      settime(globe, 0)()
      globe.animate()
      document.body.style.backgroundImage = 'none' // remove loading
    }
  }
}
