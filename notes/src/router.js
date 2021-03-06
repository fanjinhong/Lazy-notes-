import Vue from "vue"
import Router from "vue-router"
import Index from './pages/index'
import Login from './pages/login.vue'
import Catalogue from './pages/catalogue.vue'

Vue.use(Router);

export default new Router({
    routes: [
        {
        path: '/',
        name: 'index',
        component: Index,
        redirect:'/index',
       
    }, 
    {
        path: '/login',
        name: 'login',
        component: Login
    },
    {
        path: '/catalogue',
        name: 'catalogue',
        component: Catalogue
    }
]
})