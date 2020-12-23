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
      const param = SubMenu[key] ? SubMenu[key][0].key : null
      this.$router.push({
        path: `/${key}${param ? '/' + param : ''}`
      })
    }
  }
}

export default MenuComponent
