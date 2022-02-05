<template>
  <div class="c-dashboard">
    <div class="c-filters__container">
       <range-filter-component></range-filter-component>
    </div>
    <div class="c-dashboard__header">
      <performance-chart-component />
    </div>
    <div>
      
    </div>
  </div>
</template>

<script>
import PerformanceChartComponent from "../components/vue-components/performance-chart.vue";
import RangeFilterComponent from '../components/vue-components/range-filter.vue';
export default {
  name: "AboutPageComponent",
  components: {
    PerformanceChartComponent,
    RangeFilterComponent
  },
 
  
};
</script>
