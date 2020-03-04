import User from "./components/user/User";
import Home from "./components/Home";
import UserStart from "./components/user/UserStart";
import UserDetail from "./components/user/UserDetail";
import UserEdit from "./components/user/UserEdit";
import Header from "./components/Header";

export const routes = [
  {
    path: '/', component: Home, name: 'home', components: {
      default: Home,
      'header-top': Header
    }
  },
  {
    path: '/user', components: {
      default: User,
      'header-bottom': Header
    }, children: [
      {path: '/', component: UserStart},
      {
        path: ':id', component: UserDetail, beforeEnter: (to, from, next) => {
          console.log('inside route setup');
          next();
        }
      },
      {path: ':id/edit', component: UserEdit, name: 'userEdit'}
    ]
  },
  {path: '/redirect-me', redirect: {name: 'home'}},
  {path: '*', redirect: {name: 'home'}}
];
