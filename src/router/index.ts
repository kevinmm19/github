import {
  createRouter,
  createWebHistory,
  RouteRecordRaw
} from 'vue-router'
import Introduction from '@/components/steps/Introduction.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    alias: '/1',
    name: 'Introduction',
    component: Introduction
  },
  {
    path: '/2',
    name: 'FormOne',
    // route level code-splitting
    // this generates a separate chunk (formOne.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "formOne" */ '@/components/steps/FormOne.vue')
  },
  {
    path: '/3',
    name: 'FormTwo',
    component: () => import(/* webpackChunkName: "formTwo" */ '@/components/steps/FormTwo.vue')
  },
  {
    path: '/user',
    name: 'UserData',
    component: () => import(/* webpackChunkName: "userData" */ '@/components/user/UserData.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
