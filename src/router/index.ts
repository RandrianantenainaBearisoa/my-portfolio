import { createRouter, createWebHistory } from 'vue-router';
import { BASE_URL } from '@/static/constants/constants';
import * as Pages from '@/views';

const routeList = [
  {
    path: '/',
    name: 'Home',
    component: Pages.Home,
  },
];

const router = createRouter({
  history: createWebHistory(BASE_URL),
  routes: routeList,
  scrollBehavior() {
    return { top: 0 };
  },
});

export default router;
