import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
let store = new Vuex.Store({
    state: {
        Channelist: null,
        NewList: null,
    },
    mutations: {
        setChannelist(state, req) {
            state.Channelist = req
        },
        setNewList(state, list) {
            state.NewList = list;
        }
    },
    actions: {

    }

})
export default store