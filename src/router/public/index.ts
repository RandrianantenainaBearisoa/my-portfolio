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
]
export default publicRoutes;
