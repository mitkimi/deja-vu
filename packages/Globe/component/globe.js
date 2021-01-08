import Globe from 'globe.gl'
import nightSky from './assets/night-sky.png'
import earthDefault from './assets/world.jpg'
import earthDark from './assets/earth-dark.jpg'
import earthNight from './assets/earth-night.jpg'
import bumpMap from './assets/earth-topology.png'
import DemoData from './assets/ne_110m+admin_0.geo.json'
import isInPolygon from './ins'
export default {
  name: 'Globe',
  props: {
    width: {
      type: String,
      default: '100%'
    },
    height: {
      type: String,
      default: '400px'
    },
    earth: {
      type: String,
      default: 'default'
    },
    pumb: {
      type: Boolean,
      default: false
    },
    atmosphere: {
      type: Boolean,
      default: false
    },
    graticules: {
      type: Boolean,
      default: false
    },
    nightSky: {
      type: Boolean,
      default: false
    },
    haze: {
      type: Boolean,
      default: false
    },
    cover: {
      type: [Boolean, Object],
      default: false
    },
    data: {
      type: [Boolean, Object],
      default: false
    },
    rotate: {
      type: Boolean || Number,
      default: false
    }
  },
  data () {
    return {
      earthArr: {
        // eslint-disable-next-line
        'default': earthDefault,
        'earth-dark': earthDark,
        'earth-night': earthNight
      },
      dataForRender: []
    }
  },
  mounted () {
    this.formatData()
    this.init3dEarth()
  },
  methods: {
    formatData () {
      if (this.data.type === 'lnl') {
        this.dataForRender = this.data.list
        return
      }
      if (this.data.type === 'country') {
        const sourceData = this.data.list
        // 对中国组成部分的处理
        const countryArr = [] // 所有国家和地区
        sourceData.map((listItem) => {
          // 对中国的处理
          if (listItem.countryName === 'China') {
            countryArr.push('China')
            countryArr.push('Taiwan')
          } else if (listItem.countryName === ('China Mainland' || 'ChinaMainland' || 'Mainland')) {
            countryArr.push('China')
          } else {
            countryArr.push(listItem.countryName)
          }
        })
        // 整合数据
        let allPoints = [] // 用于渲染的点，格式为经纬度和值
        countryArr.map((country) => {
          // console.log('country', country)
          DemoData.features.map((e) => {
            let contourPoints = [] // 地区轮廓点
            console.log('country', e.properties.ADMIN)
            if (e.properties.ADMIN === country) {
              // e.geometry.coordinates 是数组，元素也是数组，需要两层解构
              let arr = []
              e.geometry.coordinates.map(lay1 => {
                if (typeof lay1[0][0] === 'number' && typeof lay1[0][1] === 'number') {
                  arr = [...arr, ...lay1]
                } else {
                  lay1.map(lay2 => {
                    arr = [...arr, ...lay2]
                  })
                }
              })
              contourPoints = arr
            }
            // console.log('contourPoints', contourPoints) // 当前国家或地区的轮廓点
            const filledPoints = this.fillPoints(contourPoints) // 运行补点算法
            // const filledPoints = [] // 不补点
            const thisCountryAllPoints = [...contourPoints, ...filledPoints]
            const dataSet = []
            thisCountryAllPoints.map(f => {
              const obj = {
                lng: f[0],
                lat: f[1],
                val: 1
              }
              dataSet.push(obj)
            })
            allPoints = [...allPoints, ...dataSet]
            // allPoints = dataSet
          })
        })
        console.log('allPoints', allPoints)
        this.dataForRender = allPoints
      }
    },
    fillPoints (contourPoints) {
      const arr = contourPoints
      const filledPoints = []
      const obj = {
        left: 10000,
        right: -10000,
        top: 10000,
        bottom: -10000
      }
      arr.map(e => {
        // console.log('e', e)
        e[0] < obj.left ? obj.left = e[0] : console.log()
        e[0] > obj.right ? obj.right = e[0] : console.log()
        e[1] < obj.top ? obj.top = e[1] : console.log()
        e[1] > obj.bottom ? obj.bottom = e[1] : console.log()
      })
      const buff = 5 * (this.cover.resolution || 2) * 7
      const widthStep = (obj.right - obj.left) / buff
      const heightStep = (obj.bottom - obj.top) / buff
      for (let w = 0; w <= buff; w += 1) {
        const ww = obj.left + w * widthStep
        for (let h = 0; h <= buff; h += 1) {
          const hh = obj.top + h * heightStep
          isInPolygon([ww, hh], arr) && filledPoints.push([ww, hh])
        }
      }
      return filledPoints
    },
    init3dEarth () {
      const dom = this.$refs.container
      const GLOBE = Globe()
      const world = GLOBE(dom)
      // 场景
      this.nightSky ? world.backgroundImageUrl(nightSky) : world.backgroundColor('rgba(0, 0, 0, 0)') // 夜空贴图
      world.width(dom.clientWidth)
        .height(dom.clientHeight)
      // 地球层
      world.globeImageUrl(this.earthArr[this.earth] || this.earth) // 地球贴图 自动贴图
      this.pumb && world.bumpImageUrl(bumpMap) // 凹凸贴图
      world.showAtmosphere(this.atmosphere) // 展示大气层
      world.showGraticules(this.graticules) // 展示经纬度网
      // 六边形站位层
      if (this.cover || this.data) {
        world
          .hexPolygonsData(DemoData.features) // 传入的数据
          .hexPolygonResolution(this.cover.resolution || 2) // 六边形所占面积，数字越大面积越小
          .hexPolygonMargin(this.cover.margin || 0.1) // 六边形间距，数字越大间距越大
          // .hexPolygonColor(() => `#${Math.round(Math.random() * Math.pow(2, 24)).toString(16).padStart(6, '0')}`) // 六边形颜色
          .hexPolygonColor(this.cover.color || (() => '#1c2044')) // 六边形颜色
          // .hexPolygonLabel(({ properties: d }) => `
          //   <b>${d.ADMIN} (${d.ISO_A2})</b> <br />
          //   Population: <i>${d.POP_EST}</i>
          // `) // 多边形标签
      }
      // 弧层
      // 六角仓层
      this.data && world
        .hexBinPointWeight('val')
        .hexBinResolution(this.cover.resolution || 2)
        .hexTopColor(() => '#0066cc')
        .hexSideColor(() => '#3399ee')
        .hexBinPointsData(this.dataForRender)
        .hexAltitude((d) => {
          return d.points[0].val / 5
        }) // 高度设置
        .enablePointerInteraction(false)

      // 多边形层
      this.haze && world
        .polygonsData(DemoData.features) // 多边形数据
        .polygonCapColor(() => 'rgba(28, 32, 68, 0.18)')
        .polygonSideColor(() => 'rgba(28, 32, 68, 0.02)')
        .polygonsTransitionDuration(4000)
        // .polygonAltitude(feat => Math.max(0.1, Math.sqrt(+feat.properties.POP_EST) * 7e-5))
        .polygonAltitude(0.6)
      // Auto-rotate
      if (this.rotate) {
        world.controls().autoRotate = true // 自动旋转
        world.controls().autoRotateSpeed = this.rotate || 1.8 // 旋转速度 数字越大转动越快
      }
    }
  }
}
