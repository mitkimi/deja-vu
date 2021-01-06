import Button from './Button'
import Video from './Video'
import VideoJumbo from './VideoJumbo'
import Particles from './Particles'
import Global from './Global'

const components = [
  Button,
  Video,
  VideoJumbo,
  Particles,
  Global
]
const install = function (Vue) {
  if (install.installed) return
  components.map(component => {
    Vue.use(component)
  })
}
//  全局引用可自动安装
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}
export default {
  install,
  ...components
}
