import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
    mode: 'history',
    base: __dirname,
    routes: [
        {
            path: '/',
            name: 'home',
            // component: Home
            component: () => import('./views/Home')
        },
        {
            path: '/local',
            name: 'local',
            // component: Local
            component: () => import('./views/Local')
        },
        {
            path: '/about',
            name: 'about',
            // component: About
            component: () => import('./views/About')
        }
    ]
})
