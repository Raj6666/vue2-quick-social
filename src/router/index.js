import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import Card from '../views/Card.vue';
import StatusError from '@/views/Error';

Vue.use(VueRouter);

// 加载所有模块子路由
const requireContext = require.context('./modules', false, /\.js$/);
let allRouterModules = [];
requireContext.keys().forEach((name) => {
  allRouterModules.push(...(requireContext(name).default || []));
});

console.log(allRouterModules);

const routes = [
  {
    path: '/', // 首页
    name: 'Home',
    component: Home,
  },
  {
    path: '/:mobile', // 首页
    name: 'Contact',
    component: Home,
  },
  {
    path: '/:mobile/card', // 名片页
    name: 'Card',
    component: Card,
  },
  {
    path: '/StatusError', // 状态错误页面
    name: 'StatusError',
    component: StatusError,
  },
  {
    path: '*',
    redirect: '/StatusError',
  },
  ...allRouterModules, // 注入所有的路由模块
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
