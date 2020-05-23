import Vue from 'vue';
import App from './App';
import store from './store';

/* VENDORS */
import 'semantic-ui-css/semantic.min.css';

new Vue({
  store,
  render: h => h(App)
}).$mount('#app');
