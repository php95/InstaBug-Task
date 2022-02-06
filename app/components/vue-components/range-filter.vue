<template>
    <div class="block">
          <span class="demonstration">DateRange</span>
          <el-date-picker
            v-model="range"
            type="daterange"
            range-separator="|"
            start-placeholder="Start date"
            end-placeholder="End date"
            @blur="()=>{blur(range)}"
            >
          </el-date-picker>
        </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
    name: "RangeFilterComponent",
    methods: {
      ...mapActions(['filterData']),
      blur (range) {
        if(range){
          this.filterData(range);
        }
      }
    },
    data() {
        return {
            range: '',
        };
        }
        
}
</script>

<style>

</style>