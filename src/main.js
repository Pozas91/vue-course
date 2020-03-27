import Vue from 'vue'
import VueRouter from "vue-router";
import VueResource from 'vue-resource';

import {routes} from "./routes";
import App from './App.vue'
import store from './store/store';

Vue.use(VueRouter);
Vue.use(VueResource);

Vue.http.options.root = 'https://curso-vue-cd4c5.firebaseio.com/';

Vue.filter('currency', (value) => {
  return '$' + value.toLocaleString();
});

const router = new VueRouter({
  mode: 'history',
  routes: routes
});

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
});
