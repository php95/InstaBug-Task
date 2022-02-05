/* eslint-disable */
import axios from 'axios';
import { greaterOrEqualDates, smallerOrEqualDates } from './utilities';

const state = {
    chartData: [],
    tempData: []
};

const getters = {
    allData: (state) => state.chartData,
};

const actions = {
    fetchData({ commit }) {

        axios.get(
            'https://fe-task.getsandbox.com/performance'
        ).then(({ data }) => {

            commit('setData', data);
        }).catch((error) => { return Promise.reject(new Error("something went wrong")); })

    },
    filterData({ commit }, range) {

        commit('filterDataByDate', range);
    }
};


const mutations = {
    setData: (state, chartData) => {
        state.chartData = chartData;
        state.tempData = chartData
    },
    filterDataByDate: (state, range) => {
        let tempData = state.chartData
        let minDate = range[0].getTime();
        let maxDate = range[1].getTime();
        state.chartData.map((item) => { console.log({ minDate, maxDate }); console.log("item.date_ms:", item.date_ms); })
        state.chartData = state.tempData.filter((item) => greaterOrEqualDates(item.date_ms, minDate) && smallerOrEqualDates(item.date_ms, maxDate))
    }
};

export default {
    state,
    getters,
    actions,
    mutations,
};
/* eslint-disable */