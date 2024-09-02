import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    name: 'Home',
    // Importação dinâmica para o componente Home
    component: () => import('./components/HomePrincipal.vue')
  },
  {
    path: '/videos',
    name: 'VideosDiversos',
    // Importação dinâmica para o componente VideosDiversos
    component: () => import('./components/VideosDiversos.vue')
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;