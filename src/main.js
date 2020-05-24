import Vue from 'vue';
import App from './App';
import store from './store';
import router from './router';

/* VENDORS */
import 'semantic-ui-css/semantic.min.css';

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
