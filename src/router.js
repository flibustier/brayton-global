import Vue from 'vue';
import Router from 'vue-router';

import Home from './components/Home';
import Hub from './components/Hub';
import Jobs from './components/Jobs'
import Partners from './components/Partners';
import Strategy from './components/Strategy';
import Team from './components/Team';

Vue.use(Router);

const routes = [
  { path: '/', component: Home },
  { path: '/hub', component: Hub },
  { path: '/jobs', component: Jobs },
  { path: '/partners', component: Partners },
  { path: '/strategy', component: Strategy },
  { path: '/team', component: Team }
];

// export router instance
export default new Router({
    mode: 'history',
    routes,
    linkActiveClass: 'is-active'
})
