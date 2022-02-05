/* eslint-disable */
import axios from 'axios';

const state = {
    chartData: [{ id: 1, name: "mohamed" }, { id: 2, name: "mohamed" }],
};

const getters = {
    allData: (state) => state.chartData,
};

const actions = {
    fetchData({ commit }) {
        try {
            axios.get(
                'https://fe-task.getsandbox.com/performance'
            ).then(({ data }) => {

                commit('setData', data);
            })
        } catch (error) {
            return Promise.reject(new Error("something went wrong"));
        }
    }
};


const mutations = {
    setData: (state, chartData) => { state.chartData = chartData; },
};

export default {
    state,
    getters,
    actions,
    mutations,
};
/* eslint-disable */