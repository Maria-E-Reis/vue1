import { createRouter, createWebHistory } from 'vue-router';
import Home from './components/HomePrincipal.vue';
import VideosDiversos from './components/VideosDiversos.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/videos',
    name: 'VideosDiversos',
    component: VideosDiversos
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;