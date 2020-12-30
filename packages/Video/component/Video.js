import FullScreenIcon from './images/full-screen.svg'
import PlayIcon from './images/play.svg'
import PauseIcon from './images/pause.svg'
import PrevIcon from './images/prev.svg'
import NextIcon from './images/next.svg'
import ListIcon from './images/list.svg'
import VideoIcon from './images/video.svg'
export default {
  name: 'Video',
  props: {
    src: {
      type: [String, Array],
      required: true
    },
    continuousPlay: {
      type: [Boolean, String],
      default: true
    }
  },
  data () {
    return {
      isPlaying: false,
      drawerShow: false,
      current: 0,
      duration: 0,
      processStyle: {
        width: 0
      },
      popStyle: {
        display: 'none' // 未完成的泡泡
      },
      icons: {
        FullScreenIcon,
        PlayIcon,
        PauseIcon,
        PrevIcon,
        NextIcon,
        ListIcon
      },
      playList: [],
      playingIndex: 0
    }
  },
  filters: {
    timePeriod: function (value) {
      let h = 0
      let m = 0
      let s = 0
      value = Math.ceil(value) // 进 1 算秒
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
    this.mapPlayList() // 加载播放列表
  },
  methods: {
    // 展示播放列表
    handleListDrawerToggle () {
      this.drawerShow = true
    },
    // 加载播放列表
    mapPlayList () {
      const src = this.src
      let flag = 0
      const playList = []
      if (src instanceof Array) {
        // 数组：分两种情况 1. 纯 url 格式 2. 对象格式
        for (let i = 0; i < src.length; i += 1) {
          const v = src[i]
          if (typeof v === 'string') {
            // 纯 url 格式
            const obj = {
              poster: VideoIcon,
              duration: NaN,
              name: `视频 ${i + 1}`,
              url: v
            }
            playList.push(obj)
          } else {
            const obj = {
              poster: v.poster || VideoIcon,
              duration: v.duration || NaN,
              name: v.name || `视频 ${i + 1}`,
              url: v.url
            }
            playList.push(obj)
          }
        }
        this.playList = playList
        flag = 1
      } else if (typeof src === 'string') {
        playList.push(src)
        this.playList = playList
        flag = 1
      } else {
        console.log('数据格式不正确')
      }
      flag === 1 && this.loadVideoToPlayer(0)
    },
    handleCloseListDrawer () {
      this.drawerShow = false
    },
    handleSelectListVideo (index) {
      // console.log(arguments)
      this.loadVideoToPlayer(index)
      this.setPlayerInitial()
      this.handlePlayStatusToggle('play')
      this.handleCloseListDrawer()
    },
    // 加载播放列表视频进播放器
    loadVideoToPlayer (index) {
      try {
        const video = this.$refs.video
        video.src = this.playList[index || 0].url
        video.poster = this.playList[index || 0].poster
        this.playingIndex = index || 0
        video.oncanplaythrough = () => {
          this.queryVideoDuration()
        }
        video.addEventListener('ended', () => {
          // 连续播放？
          if (this.playList.length > 1 && this.continuousPlay && this.playingIndex !== this.playList.length - 1) {
            this.handleNext()
            this.handlePlayStatusToggle('play')
          } else {
            this.handlePlayStatusToggle('pause')
          }
        })
      } catch (e) {
        console.log('error', e)
      }
    },
    // 设置播放器为初始状态
    setPlayerInitial () {
      // console.log('player setted initial')
      this.isPlaying = false
      this.current = 0
      this.duration = 0
      this.processStyle.width = 0
    },
    handlePrev () {
      const current = this.playingIndex
      if (current <= 0) {
        return
      }
      this.loadVideoToPlayer(current - 1)
      this.setPlayerInitial()
      this.handlePlayStatusToggle(this.isPlaying ? 'play' : 'pause')
    },
    handleNext () {
      const current = this.playingIndex
      if (current >= this.playList.length - 1) {
        return
      }
      this.loadVideoToPlayer(current + 1)
      this.setPlayerInitial()
      this.handlePlayStatusToggle(this.isPlaying ? 'play' : 'pause')
    },
    handlePlayStatusToggle (buffer) {
      this.isPlaying = buffer && buffer === 'play' ? true : buffer && buffer === 'pause' ? false : !this.isPlaying
      if (this.isPlaying) {
        this.$refs.video.play()
      } else {
        this.$refs.video.pause()
      }
    },
    // 播放器更新时间时触发
    updatePlayerStatus () {
      this.queryVideoDuration()
      this.getVideoCurrentPlayAt()
    },
    // 获取当前播放视频总时间
    queryVideoDuration () {
      const player = this.$refs.video
      this.duration = player.duration
    },
    // 获取播放器当前时间
    getVideoCurrentPlayAt () {
      const player = this.$refs.video
      this.current = player.currentTime
      // 计算进度条位置
      this.processStyle.width = `${(player.currentTime / player.duration) * 100}%`
    },
    // 全名按钮
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
