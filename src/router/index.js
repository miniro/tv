import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'AMain',
    component: () => import('@/components/AMain.vue')
  },
  {
    path: '/bmain/:tv_name',
    name: 'BMain',
    props: true,
    component: () => import('@/components/BMain.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
