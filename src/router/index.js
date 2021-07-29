import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: "/Episodes",
    name: "Episodes",
    component: () => import(/* webpackChunkName: "Episodes" */ '../views/Episodes.vue')
  },
  {
    path: '/Series',
    name: 'Series',
    component: () => import(/* webpackChunkName: "Series" */ '../views/Series.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
