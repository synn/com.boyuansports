import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home'
import Blog from './views/Blog'
import About from './views/About'

Vue.use(Router)

export default new Router({
    mode: 'history',
    base: __dirname,
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/blog',
            name: 'blog',
            component: Blog
        },
        {
            path: '/about',
            name: 'about',
            component: About
        }
    ]
})
