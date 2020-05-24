import Vue from 'vue';
import Router from 'vue-router';
import AuthHandler from '@/components/atoms/AuthHandler';

Vue.use(Router);

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/oauth2/callback',
      component: AuthHandler
    }
  ]
});

export default router;
