import Vue from 'vue'
import App from './App.vue'
import './plugins/element.js'
import Vuex from './store/main'
import router from './router/main'
Vue.config.productionTip = false

new Vue({
    router,
    store: Vuex,
    render: h => h(App),
}).$mount('#app')