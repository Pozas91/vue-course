import Vue from 'vue'
import App from './App.vue'
import axios from 'axios';

import router from './router'
import store from './store'

axios.defaults.baseURL = 'https://curso-vue-cd4c5.firebaseio.com/';
axios.defaults.headers.common['Authorization'] = 'fastas';
axios.defaults.headers.get['Accepts'] = 'application/json';

const reqInterceptor = axios.interceptors.request.use(config => {
  console.log('Request Interceptor', config);
  return config
});

const resInterceptor = axios.interceptors.response.use(res => {
  console.log('Response Interceptor', res);
  return res;
});

// Removing interceptors... if we want to apply upper interceptors comment below lines.
axios.interceptors.request.eject(reqInterceptor);
axios.interceptors.response.eject(resInterceptor);

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
});
