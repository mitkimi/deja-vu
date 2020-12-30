// 测试
// import test from './Test'

// 真的组件
import button from './Button'
import video from './Video'
const components = [
  button,
  video
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
  button,
  video
}
