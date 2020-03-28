import Vue from 'vue';
import VueRouter from 'vue-router';

import store from './store';

import WelcomePage from './components/welcome/welcome.vue';
import DashboardPage from './components/dashboard/dashboard.vue';
import SignUpPage from './components/auth/signup.vue';
import SignInPage from './components/auth/signin.vue';

Vue.use(VueRouter);

const routes = [
  {path: '/', component: WelcomePage},
  {path: '/signUp', component: SignUpPage},
  {path: '/signIn', component: SignInPage},
  {
    path: '/dashboard', component: DashboardPage, beforeEnter(to, from, next) {
      if (store.state.idToken) {
        next()
      } else {
        next('/signIn')
      }
    }
  }
];

export default new VueRouter({mode: 'history', routes});
