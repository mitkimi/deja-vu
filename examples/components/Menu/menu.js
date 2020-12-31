import SubMenu from '../../scene/Document/nav'

const MenuComponent = {
  name: 'Menu',
  data () {
    return {
      menu: [
        {
          key: 'guide',
          name: '指南'
        },
        {
          key: 'components',
          name: '组件'
        },
        {
          key: 'developer',
          name: '开发者'
        },
        {
          key: 'about',
          name: '关于'
        }
      ]
    }
  },
  computed: {
    activeMenu () {
      return this.active || this.queryRouteByUrl() || 'index'
    }
  },
  methods: {
    queryRouteByUrl () {
      const buffer = this.$route.path.split('/')
      buffer.shift()
      return buffer[0] || 'index'
    },
    handleMenuClick (key) {
      let flag = 0
      SubMenu[key] && (function () {
        for (let i = 0; i < SubMenu[key].length; i += 1) {
          if (SubMenu[key][i].isDefault) {
            flag = i
            break
          }
        }
      })()
      const param = SubMenu[key] ? SubMenu[key][flag].key : null
      const path = `/${key}${param ? '/' + param : ''}`
      console.log('menu/ next path:', path)
      this.$router.push({
        path
      })
    }
  }
}

export default MenuComponent
