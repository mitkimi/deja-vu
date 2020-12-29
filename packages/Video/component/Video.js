export default {
  name: 'Video',
  props: {},
  data () {
    return {
      isPlaying: false,
      current: 0,
      duration: 0,
      processStyle: {
        width: 0
      }
    }
  },
  filters: {
    timePeriod: function (value) {
      let h = 0
      let m = 0
      let s = 0
      value = parseInt(value)
      // 取秒
      s = value % 60
      // 转换为分
      value -= s
      value /= 60
      // 取分
      m = value % 60
      // 转换为小时
      value -= m
      value /= 60
      // 取小时
      h = value
      return `${h > 0 ? h + ':' : ''}${m >= 0 && m <= 9 ? '0' + m : m}:${s >= 0 && s <= 9 ? '0' + s : s}`
    }
  },
  watch: {},
  mounted () {
    const video = this.$refs.video
    video.oncanplaythrough = () => {
      this.queryVideoDuration()
    }
    video.addEventListener('ended', () => {
      this.handlePlayStatusToggle('pause')
    })
  },
  methods: {
    handlePlayStatusToggle (buffer) {
      this.isPlaying = buffer && buffer === 'play' ? true : buffer && buffer === 'pause' ? false : !this.isPlaying
      if (this.isPlaying) {
        this.$refs.video.play()
      } else {
        this.$refs.video.pause()
      }
    },
    updatePlayerStatus () {
      this.queryVideoDuration()
      this.getVideoCurrentPlayAt()
    },
    queryVideoDuration () {
      // 获取当前播放视频总时间
      const player = this.$refs.video
      this.duration = player.duration
    },
    getVideoCurrentPlayAt () {
      // 获取播放器当前时间
      const player = this.$refs.video
      this.current = player.currentTime
      // 计算进度条位置
      this.processStyle.width = `${(player.currentTime / player.duration) * 100}%`
    },
    handlePlayerFullscreen () {
      const element = this.$refs.video
      if (element.requestFullscreen) {
        element.requestFullscreen()
      } else if (element.mozRequestFullScreen) {
        element.mozRequestFullScreen()
      } else if (element.msRequestFullscreen) {
        element.msRequestFullscreen()
      } else if (element.oRequestFullscreen) {
        element.oRequestFullscreen()
      } else if (element.webkitRequestFullscreen) {
        element.webkitRequestFullScreen()
      } else {
        var docHtml = document.documentElement
        var docBody = document.body
        var videobox = document.getElementById('videobox')
        var cssText = 'width:100%; height:100%; overflow:hidden;'
        docHtml.style.cssText = cssText
        docBody.style.cssText = cssText
        videobox.style.cssText = cssText + ';' + 'margin:0px; padding:0px;'
        document.IsFullScreen = true
      }
    }
  }
}
