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
      title: 'Deja vu - A very light Component Library for Vue.js.'
    },
    component: Home
  },
  {
    path: '/play',
    name: 'Demo',
    component: Demo
  },
  {
    path: '/about',
    name: 'About',
    meta: {
      title: '关于 - Deja vu - A very light Component Library for Vue.js.'
    },
    component: () => import('../scene/About')
  },
  {
    path: '/guide/:routeId',
    name: 'Guide',
    meta: {
      title: '指南 - Deja vu - A very light Component Library for Vue.js.'
    },
    component: Document
  },
  {
    path: '/components/:routeId',
    name: 'Components',
    meta: {
      title: '组件 - Deja vu - A very light Component Library for Vue.js.'
    },
    component: Document
  },
  {
    path: '/developer',
    name: 'Developer',
    meta: {
      title: '开发者 - Deja vu - A very light Component Library for Vue.js.'
    },
    component: () => import('../scene/Developer')
  }
]

const router = new VueRouter({
  routes
})

router.beforeEach((to, from, next) => {
  document.documentElement.scrollTop = 0
  if (to.meta.title) {
    document.title = to.meta.title
  }
  next()
})

router.afterEach(() => {})

export default router
