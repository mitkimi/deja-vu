import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../scene/Home'
import Demo from '../scene/Demo'
import Document from '../scene/Document'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    meta: {
      title: 'Deja vu'
    },
    component: Home
  },
  {
    path: '/demo',
    name: 'Demo',
    component: Demo
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../scene/About')
  },
  {
    path: '/guide/:routeId',
    name: 'Guide',
    component: Document
  },
  {
    path: '/components/:routeId',
    name: 'Components',
    component: Document
  },
  {
    path: '/developer',
    name: 'Developer',
    component: () => import('../scene/Developer')
  }
]

const router = new VueRouter({
  routes
})

router.beforeEach((to, from, next) => {
  document.documentElement.scrollTop = 0
  next()
})

router.afterEach(() => {})

export default router
