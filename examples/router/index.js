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
    component: Home
  },
  {
    path: '/demo',
    name: 'Demo',
    component: Demo
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
    path: '/about',
    name: 'About',
    component: () => import('../scene/About')
  },
  {
    path: '/developer',
    name: 'Developer',
    component: () => import('../scene/Developer')
  }
  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
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
