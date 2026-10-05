import { createRouter, createWebHistory } from 'vue-router'
import { BASE_URL } from '@/static/constants/constants'
import * as Pages from '@/views'
import { ref } from 'vue'

const routeList = [
  {
    path: '/',
    name: 'Home',
    component: Pages.Home,
  },
]

const router = createRouter({
  history: createWebHistory(BASE_URL),
  routes: routeList,
  scrollBehavior() {
    return { top: 0 }
  },
})

export const isRouteLoading = ref<boolean>(true)

router.beforeEach((to, from, next) => {
  isRouteLoading.value = true
  next()
})

router.afterEach((to, from, next) => {
  setTimeout(() => {
    isRouteLoading.value = false
  }, 1000)
})

export default router
