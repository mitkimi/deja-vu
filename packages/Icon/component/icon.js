import dictionary from './dictionary.json'
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
      dictionary
    }
  }
}
