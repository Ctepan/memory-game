import { createApp } from 'vue';
import { createRouter, createWebHashHistory } from 'vue-router';
import App from '@/App.vue';
import store, { key } from '@/store';
import Game from '@/features/game/Game.vue';
import Leaderboard from '@/features/leaderboard/Leaderboard.vue';

const routes = [
  { path: '/', name: 'game', component: Game },
  { path: '/leaderboard', name: 'leaderboard', component: Leaderboard },
];

const router = createRouter({
  history: createWebHashHistory('/memory-game/'),
  routes,
});

createApp(App).use(router).use(store, key).mount('#app');
