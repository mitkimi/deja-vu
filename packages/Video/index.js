import Video from './component'

/* istanbul ignore next */
Video.install = function (Vue) {
  Vue.component(Video.name, Video)
}

export default Video
