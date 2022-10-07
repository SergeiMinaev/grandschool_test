import { createRouter, createWebHistory } from 'vue-router';
import About from './About.vue';


const routes = [
  {
    name: 'home', path: '/', component: About, meta: { label: 'Главная' }
  },
  {
    name: 'about', path: '/about', component: About, meta: { label: 'О&nbsp;нас' }
  },
  {
    name: 'services', path: '/services', component: About,
    meta: { label: 'Юридические&nbsp;услуги' }
  },
  {
    name: 'webinars', path: '/webinars', component: About,
    meta: { label: 'Вебинары' }
  },
  {
    name: 'courses', path: '/courses', component: About,
    meta: { label: 'Курсы' }
  },
  {
    name: 'articles', path: '/articles', component: About,
    meta: { label: 'Статьи' }
  },
  {
    name: 'partner', path: '/partner', component: About,
    meta: { label: 'Партнёрство' }
  },
  {
    name: 'news', path: '/news', component: About,
    meta: { label: 'Новости' }
  },
  {
    name: 'sdo', path: '/sdo', component: About,
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
