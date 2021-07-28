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
    path: "/Peliculas",
    name: "Peliculas",
    component: () => import(/* webpackChunkName: "Peliculas" */ '../views/Peliculas.vue')
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
