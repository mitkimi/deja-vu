export default {
  name: 'DSwitch',
  props: {
    value: Boolean,
    disabled: Boolean,
    activeColor: {
      type: String,
      default: '#0066cc'
    },
    inactiveColor: {
      type: String,
      default: '#cccccc'
    }
  },
  data () {
    return {
      isChecked: false
    }
  },
  mounted () {
    this.initComponent()
  },
  computed: {
    isChecked (next) {
      this.value = next
    }
  },
  methods: {
    initComponent () {
      this.isChecked = this.value
    },
    handleSwitchToggle () {
      !this.disabled && (this.isChecked = !this.isChecked)
    }
  }
}
