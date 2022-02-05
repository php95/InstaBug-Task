<template>
  <div class="c-chart__container">
    <v-chart ref="chart" :option="chartOptions" />
  </div>
</template>

<script>
import moment from "moment";
import { use } from "echarts/core";
import { CanvasRenderer } from "echarts/renderers";
import { LineChart } from "echarts/charts";
import {
  TitleComponent,
  TooltipComponent,
  GridComponent,
  VisualMapComponent,
} from "echarts/components";
import VChart from "vue-echarts";
import { mapGetters, mapActions } from "vuex";

use([
  CanvasRenderer,
  LineChart,
  TitleComponent,
  TooltipComponent,
  GridComponent,
  VisualMapComponent,
]);

export default {
  name: "PerformanceChartComponent",

  components: {
    VChart,
  },
  computed: {
    ...mapGetters(["allData"]),
    initOptions() {
      return {
        width: "auto",
        height: "300px",
      };
    },

    chartOptions() {
      return {
        title: {
          text: "Team Performance Index",
          left: "center",
        },
        tooltip: {
          trigger: 'axis',
          transitionDuration: 0,
          backgroundColor:'#050224',
          formatter: function (params){
            return `<strong>${params[0].axisValue}</strong> <br> <p>Team Performance Index: ${params[0].value}%</p> `
          },
          confine: false,
          hideDelay: 0,
          padding: 20,
          textStyle: {
            color: 'white',
            align:'center'
        }
        },
        grid: {
          left: "30px",
          right: "12px",
          bottom: "2px",
          top: "6px",
          containLabel: true,
        },
        xAxis: {
          type: "category",
          showGrid: false,
          data: this.xAxisData,
          axisLine: {
            show: true,
          },
          axisTick: {
            show: false,
          },
          axisLabel: {
            fontSize: 11,
          },
        },
        yAxis: {
          axisLabel: { show: true },
          axisTick: { show: true },
          splitLine: { show: true },
        },
        visualMap: {
          show: true,
          top:50,
          right:0,
          data:this.yAxisData,
          dimension: 1,
          pieces: [
            {
              lte: 50,
              color: 'red'
            },
            {
              gt: 50,
              lte: 80,
              color: 'yellow'
            },
            {
              gt: 80,
              lte: 100,
              color: 'green'
            },
          ]
        },
        series: [
          {
            data: this.yAxisData,
            type: "line",
            symbol: "circle",
            name: 'Team Performance Index: ',
            symbolSize: 2,
            cursor: "default",
            lineStyle: {
              width: 2,
            }
          },
        ],
       
      };
    },

    xAxisData() {
      return this.allData.map((item) => this.formatDate(item.date_ms));
    },

    yAxisData() {
      return this.allData.map((item) => +item.performance * 100);
    },
    performanceLow() {
      const data = this.allData.filter((item) => +item.performance * 100 < 50);
      return data
    },
  },

  methods: {
    formatDate(dateInMs) {
      return moment(dateInMs).format("DD MMM YYYY");
    },
    ...mapActions(["fetchData"])

  },
  created() {
    this.fetchData();
  }
};
</script>
