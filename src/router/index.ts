import HOCLazy from '@/components/HOCLazy';
import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import Home from '../views/Home.vue';

import slow from '@/utils/slow';

// 故意延迟3s 看效果
const About = HOCLazy(() =>
  slow(import(/* webpackChunkName: "about" */ '../views/About.vue'), 3000)
);

// 正常调用
// const About = HOCLazy(() =>
//   import(/* webpackChunkName: "about" */ '../views/About.vue')
// );

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: About
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
