import Vue from 'vue'
import Router from 'vue-router'
import Splash from './views/Splash.vue';
import Info from './views/Info.vue';
import Income from './views/Income.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '*',
      name: 'splash',
      component: Splash
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
