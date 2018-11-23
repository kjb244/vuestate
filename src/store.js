import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';
import router from './router.js';


Vue.use(Vuex);


export default new Vuex.Store({
  state: {
      routeData: {
          forwardBack: 'forward',
          routes: ['splash', 'info', 'income'],
          formData: ['splash', 'info', 'income'].reduce((accum, e) => {
              accum[e] = {};
              return accum;
          },{}),
          routeMapping: {
              splash: {
                  next: 'info',
                  prev: null
              },
              info: {
                  next: 'income',
                  prev: 'splash'
              },
              income: {
                  next: null,
                  prev: 'info'
              }
          },
          visitedRoutes: []
      }
  },
  getters: {
    countLinks: function(state){
      return state.links.length;
    },
    formData: (state) => (route) => {
        return state.routeData.formData[route] || {};
    }


  },
  mutations: {
    SUBMIT_CLICK: function(state, data){
        const {currRoute, nextRoute, form}  = data;
        state.routeData.forwardBack = 'forward';
        state.routeData.formData[currRoute] = form;
        const visitedRoutes = state.routeData.visitedRoutes;
        if(!visitedRoutes.length){
            visitedRoutes.push(currRoute);
        }
        visitedRoutes.push(nextRoute);
        //since adding the forward/backward class takes a little time, pause for a bit
        setTimeout(()=> {
            router.push(nextRoute);
        },100);


    },
    SUBMIT_BACK: function(state, data){
      const {currRoute, nextRoute, form}  = data;
      state.routeData.forwardBack = 'back';
      state.routeData.formData[currRoute] = form;
      const visitedRoutes = state.routeData.visitedRoutes;
      if(!visitedRoutes.length){
        visitedRoutes.push(currRoute);
      }
      visitedRoutes.push(nextRoute);
      //since adding the forward/backward class takes a little time, pause for a bit
      setTimeout(()=> {
          router.push(nextRoute);
      },100);



    },

    ADD_ROUTE_DATA: function(state, data){
        console.log('adding route data mutation');
        state.routeData = data;
    }
  },
  actions: {
    submitClick: function(context, form){
        console.log('submitClick action');
        const currRoute = router.currentRoute.name.toLowerCase();
        const routeMapping = this.state.routeData.routeMapping[currRoute];

        if(routeMapping){
            const nextRoute = routeMapping.next;
            if(nextRoute){

                context.commit('SUBMIT_CLICK',{currRoute, nextRoute, form});
            }
        }
    },
    submitBack: function(context, form){
      console.log('submitBack action');
      const currRoute = router.currentRoute.name.toLowerCase();
      const routeMapping = this.state.routeData.routeMapping[currRoute];

      if(routeMapping){
          const nextRoute = routeMapping.prev;
          if(nextRoute){
              context.commit('SUBMIT_BACK',{currRoute, nextRoute, form});
          }
      }
    },
    removeLinks: function(context, link){
      context.commit('REMOVE_LINK', link);
    },
    removeAll (context) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                context.commit('REMOVE_ALL');
                resolve();
            }, 1500)
        })
    },
    testAjaxGet: function(){
        return axios.get('http://jsonplaceholder.typicode.com/posts');

    },
    addRouteData (context){
        setTimeout(() => {
            console.log('add route data action');
            context.commit('ADD_ROUTE_DATA', [1,2,3]);
        },500);

    }
  }

})
