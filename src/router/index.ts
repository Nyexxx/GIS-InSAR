import { createRouter, createWebHashHistory } from "vue-router";
import { storeToRefs } from 'pinia'
import { userUserStore } from '../store/userStore'


const router = createRouter({
    history: createWebHashHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            redirect: { name: 'home' } // 将默认路由指定为 home 子路由
        },
        {
            path: '/login',
            name: 'login',
            component: () => import('../views/Login/index.vue')
        },
        {
            path: '/home',
            name: 'home',
            beforeEnter: (to, from, next) => {
                const UserStore = userUserStore()
                let { Username, Password, } = storeToRefs(UserStore)
                console.log(from.path,to.path)
                if (Username.value == "" || Password.value == "") {
                    alert('无用户信息')
                    next(false)
                }
                next()
            },
            component: () => import('../views/Home/index.vue')
        }
    ]
})

export default router