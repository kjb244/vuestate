import Vue from 'vue'
import Router from 'vue-router'
import Splash from './views/Splash.vue';
import Info from './views/Info.vue';
import Income from './views/Income.vue';
import Init from './views/Init.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '*',
      name: 'init',
      component: Init
    },
    {
      path: '/init',
      name: 'init',
      component: Init
    },
    {
        path: '/splash',
        name: 'splash',
        component: Splash
    },
    {
      path: '/info',
      name: 'info',
      component: Info
    },
    {
        path: '/income',
        name: 'income',
        component: Income
    }
  ]
})
