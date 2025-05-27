import * as Public from '@/views/public/';

const publicRoutes: any[] = [
  {
    path: '/',
    name: 'home',
    component: Public.Home,
  },
  {
    path: '/about-me',
    name: 'about',
    component: Public.About,
  },
  {
    path: '/skills',
    name: 'skills',
    component: Public.Skills,
  },
  {
    path: '/projects',
    name: 'projects',
    component: Public.Projects,
  },
]
export default publicRoutes;
