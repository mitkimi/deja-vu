import Global from './component'

/* istanbul ignore next */
Global.install = function (Vue) {
  Vue.component(Global.name, Global)
}

export default Global
