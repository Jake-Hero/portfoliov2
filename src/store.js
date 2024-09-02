import Vuex from 'vuex';
import Vue from 'vue';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        darkMode: false
    },
    mutations: {
        Set_ThemeMode(state, value) {
            state.darkMode = value;
        }
    }
});