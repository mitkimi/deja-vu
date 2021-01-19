import dict from './dictionary'

export default {
  name: 'Icon',
  props: {
    type: {
      type: String,
      required: true
    }
  },
  data () {
    return {
      dictionary: {}
    }
  },
  mounted () {
    dict.map((e) => {
      this.dictionary = { ...this.dictionary, ...e.icons }
    })
  }
}
