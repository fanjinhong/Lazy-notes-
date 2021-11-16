import Vue from "vue"
import Router from "vue-router"
import Login from "./pages/login.vue"
import Register from "./pages/register.vue"
import Editor from "./pages/Editor.vue"
import index from "./pages/index.vue"
import { LOGIN } from "./store/mutation-types";


Vue.use(Router);

const router = new Router({
    routes: [
        {
        path: '/',
        name: 'home',
        component: Login
       
    }, 
    {
        path: '/login',
        name: 'login',
        component: () => import('./pages/login.vue')
    },
    {
        path: '/register',
        name: 'register',
        component: Register
    },
    {
        path: '/index',
        name: 'index',
        component: index,
    },
    {
        path:'/edit',
        name:'edit',
        component:Editor
    },
    {
        path: '*',
        name: 'wrong',
        component: () => import('./pages/wrong.vue')
    }
]
})

// 验证 token，存在才跳转
router.beforeEach((to, from, next) => {
    let token = localStorage.getItem('token')
    if (to.meta.requireAuth) {
        if (token) {
            next()
        } else {
            next({
                path: '/login',
                query: { redirect: to.fullPath }
            })
        }
    } else {
        next()
    }
})

export default router