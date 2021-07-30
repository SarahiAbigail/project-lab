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
    path: '/Character',
    name: 'Character',
    component: () => import(/* webpackChunkName: "Character" */ '../views/Character.vue')
  },
  {
    path: '/Character2',
    name: 'Character2',
    component: () => import(/* webpackChunkName: "Character2" */ '../views/Character2.vue')
  },
  {
    path: '/Dashboard',
    name: 'Dashboard',
    component: () => import(/* webpackChunkName: "Dashboard" */ '../views/Dashboard.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
