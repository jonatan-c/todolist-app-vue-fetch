import Vue from 'vue';
import Vuex from 'vuex';
import { tasksStore } from './tasks.module';
// import peliculasStore from './peliculas.module';

Vue.use(Vuex);


const store = new Vuex.Store({
  modules: {
    tasksStore: tasksStore
  }
});

export default store;