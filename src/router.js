import Vue from 'vue';
import Router from 'vue-router';

import About from './components/About';
import Contact from './components/Contact';
import Home from './components/Home';
import Hub from './components/Hub';
import Jobs from './components/Jobs';
import Operations from './components/Operations';
import Partners from './components/Partners';
import Strategy from './components/Strategy';
import Team from './components/Team';
import Tools from './components/Tools';

Vue.use(Router);

const routes = [
  { path: '/', component: Home },
  { path: '/about', component: About },
  { path: '/contact', component: Contact },
  { path: '/hub', component: Hub },
  { path: '/jobs', component: Jobs },
  { path: '/operations', component: Operations },
  { path: '/partners', component: Partners },
  { path: '/strategy', component: Strategy },
  { path: '/team', component: Team },
  { path: '/tools', component: Tools }
];

// export router instance
export default new Router({
    mode: 'history',
    routes,
    linkActiveClass: 'is-active'
})
