import Vue from 'vue';
import Router from 'vue-router';

import Home from './components/Home';
import Partners from './components/Partners';
import Team from './components/Team';
import Jobs from './components/Jobs'

Vue.use(Router);

const routes = [
  { path: '/', component: Home },
  { path: '/partners', component: Partners },
  { path: '/team', component: Team },
  { path: '/jobs', component: Jobs }
];

// export router instance
export default new Router({
    mode: 'history',
    routes,
    linkActiveClass: 'is-active'
})
