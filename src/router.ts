import { createRouter, createWebHistory } from 'vue-router';
import Home from './Home.vue';


const routes = [
  {
    name: 'home', path: '/', component: Home, meta: { label: 'Главная' }
  },
  {
    name: 'about', path: '/about', component: Home, meta: { label: 'О нас' }
  },
  {
    name: 'services', path: '/services', component: Home,
    meta: { label: 'Юридические услуги' }
  },
  {
    name: 'webinars', path: '/webinars', component: Home,
    meta: { label: 'Вебинары' }
  },
  {
    name: 'courses', path: '/courses', component: Home,
    meta: { label: 'Курсы' }
  },
  {
    name: 'articles', path: '/articles', component: Home,
    meta: { label: 'Статьи' }
  },
  {
    name: 'partner', path: '/partner', component: Home,
    meta: { label: 'Партнёрство' }
  },
  {
    name: 'news', path: '/news', component: Home,
    meta: { label: 'Новости' }
  },
  {
    name: 'sdo', path: '/sdo', component: Home,
    meta: { label: 'СДО' }
  },
]

export const router = createRouter({
  // @ts-ignore
  base: '/',
  history: createWebHistory(),
  routes,
  //linkExactActiveClass: '',
});
