import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
let store = new Vuex.Store({
    state: {
        Channelist: null,
        NewList: null,
        index: 1,
        id: null,
    },
    mutations: {
        setChannelist(state, req) {
            state.Channelist = req
        },
        setNewList(state, list) {
            state.NewList = list;
        },
        setIndex(state,index){
            state.index=index
        },
        setId(state,id){
            state.id=id
        }
    },
    actions: {

    }

})
export default store