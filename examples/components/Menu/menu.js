const MenuComponent = {
  name: 'Menu',
  data () {
    return {
      active: 'guide',
      menu: [
        {
          key: 'guide',
          name: '指南'
        },
        {
          key: 'components',
          name: '组件'
        }
      ]
    }
  },
  methods: {
    handleMenuClick (key) {
      this.active = key
    }
  }
}

export default MenuComponent
