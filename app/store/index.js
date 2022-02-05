import Vue from 'vue';
import Vuex from 'vuex';
import chartData from './modules/chartData';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    chartData,
  },
});
