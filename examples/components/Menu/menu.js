import SubMenu from '../../scene/Document/menu'

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
      this.$router.push({
        path: `/${key}${param ? '/' + param : ''}`
      })
    }
  }
}

export default MenuComponent
