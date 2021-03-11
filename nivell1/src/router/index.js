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
    path: '/clients',
    name: 'Clients',
    component: function () {
      return import(/* webpackChunkName: "clients" */ '../views/Clients.vue')
    }
  },
  {
    path: '/detallc/:cli',
    name: 'Detallc',
    component: function () {
      return import(/* webpackChunkName: "detallc" */ '../views/DetallClient.vue')
    }
  },
  {
    path: '/proveidors',
    name: 'Proveidors',
    component: function () {
      return import(/* webpackChunkName: "proveidors" */ '../views/Proveidors.vue')
    }
  },
  {
    path: '/magatzem',
    name: 'Magatzem',
    component: function () {
      return import(/* webpackChunkName: "magatzem" */ '../views/Magatzem.vue')
    }
  },
  {
    path: '/botiga',
    name: 'Botiga',
    component: function () {
      return import(/* webpackChunkName: "botiga" */ '../views/Botiga.vue')
    }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
