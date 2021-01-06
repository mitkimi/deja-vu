import Globe from 'globe.gl'
import nightSky from './assets/night-sky.png'
import earthDefault from './assets/world.jpg'
import earthDark from './assets/earth-dark.jpg'
import bumpMap from './assets/earth-topology.png'
import DemoData from './assets/ne_110m+admin_0.geo.json'

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
      type: [Boolean, Array],
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
        'earth-dark': earthDark
      }
    }
  },
  mounted () {
    this.init3dEarth()
  },
  methods: {
    init3dEarth () {
      const dom = this.$refs.container
      const GLOBE = Globe()
      const world = GLOBE(dom)
      // 场景
      this.nightSky ? world.backgroundImageUrl(nightSky) : world.backgroundColor('rgba(0, 0, 0, 0)') // 夜空贴图
      world.width(dom.clientWidth)
        .height(dom.clientHeight)
      // 地球层
      world.globeImageUrl(this.earthArr[this.earth]) // 地球贴图
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
        .hexBinPointWeight('pop')
        .hexBinResolution(2)
        .hexTopColor(() => '#0066cc')
        .hexSideColor(() => '#3399ee')
        .hexBinMerge(true)
        .hexBinPointsData(this.data)
        .enablePointerInteraction(false)

      // 自定义层
      // .customLayerData([])
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
