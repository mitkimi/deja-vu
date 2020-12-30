import Vue from 'vue'
import VueParticles from 'vue-particles'
import App from './App.vue'
import router from './router'
import store from './store'
import DejaVu from '../packages'

Vue.config.productionTip = false
Vue.use(DejaVu)
Vue.use(VueParticles)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
