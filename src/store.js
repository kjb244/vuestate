import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
      title: 'My Custom Title',
      links: [
          'http://google.com',
          'http://coursetro.com',
          'http://youtube.com'
      ],
      routeData: []
  },
  getters: {
    countLinks: function(state){
      return state.links.length;
    }
  },
  mutations: {
    ADD_LINK: function(state, link){
      state.links.push(link);
    },
    REMOVE_LINK: function(state, link){
      state.links.splice(link,1);
    },
    REMOVE_ALL: function(state){
      state.links = [];
    },
    ADD_ROUTE_DATA: function(state, data){
        console.log('adding route data mutation');
        state.routeData = data;
    }
  },
  actions: {
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
