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
            component: () => import('./views/Home')
        },
        {
            path: '/local',
            name: 'local',
            component: () => import('./views/Local')
        },
        {
            path: '/partner',
            name: 'partner',
            component: () => import('./views/Partner')
        },
        {
            path: '/royal',
            name: 'royal',
            component: () => import('./views/Royal')
        },
        {
            path: '/about',
            name: 'about',
            // component: About
            component: () => import('./views/About')
        }
    ]
})
