import Vue from 'vue'
import App from './App.vue'
import './plugins/element.js'
import Vuex from './store/main'
Vue.config.productionTip = false

new Vue({
    store: Vuex,
    render: h => h(App),
}).$mount('#app')