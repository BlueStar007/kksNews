import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

let router = new VueRouter({
    routes: [{
            name: 'home',
            path: '*',
            component: () =>
                import ('../components/Body')
        },
        {
            name: 'list',
            path: '/list',
            component: () =>
                import ('../components/List')
        },
        // {
        //     name: 'all',
        //     path: '*',
        //     component: () =>
        //         import ('../components/Body')
        // },

    ],
    mode: 'history'
})

export default router