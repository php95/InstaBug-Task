import Vue from 'vue';
import 'ngVue';
import 'ngVue/build/plugins.js';
import PerformancePageComponent from './pages/performance-page.vue';
import PerformanceChartComponent from './components/vue-components/performance-chart.vue';
import RangeFilterComponent from './components/vue-components/range-filter.vue';
import store from './store';
import ElementUI from 'element-ui';
import locale from 'element-ui/lib/locale/lang/en';

angular.module('appModule', [
  'ui.router',
  'ngVue',
  'ngVue.plugins',
]);

angular.module('appModule', ['ui.router', 'ngVue', 'ngVue.plugins'])
  .config(($ngVueProvider) => {
    $ngVueProvider.setRootVueInstanceProps({
      store: store,
    });
  });
Vue.use(ElementUI, { locale });
angular.module('appModule').directive('vPerformancePage', (createVueComponent) => {
  return createVueComponent(Vue.component('performancePageComponent', PerformancePageComponent));
});

angular.module('appModule').directive('vPerformanceChart', (createVueComponent) => {
  return createVueComponent(Vue.component('performanceChartComponent', PerformanceChartComponent));
});
angular.module('appModule').directive('vRangeFilter', (createVueComponent) => {
  return createVueComponent(Vue.component('rangeFilterComponent', RangeFilterComponent));
});
