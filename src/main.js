import Vue from 'vue'
import App from './App.vue'

// Global Filter
Vue.filter('toLowercase', function (value) {
  return value.toLowerCase();
});

// Don't use this
Vue.mixin({
  created() {
    console.log('Global Mixin - Created Hook!');
  }
});

new Vue({
  el: '#app',
  render: h => h(App)
});
