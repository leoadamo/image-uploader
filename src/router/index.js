import Vue from 'vue';
import Router from 'vue-router';
import AuthHandler from '@/components/atoms/AuthHandler';
import ImageList from '@/components/organisms/ImageList';
import UploadForm from '@/components/organisms/UploadForm';

Vue.use(Router);

export const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: ImageList
    },
    {
      path: '/upload',
      name: 'upload',
      component: UploadForm
    },
    {
      path: '/oauth2/callback',
      component: AuthHandler
    }
  ]
});

export default router;
