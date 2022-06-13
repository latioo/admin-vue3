import { createRouter, createWebHashHistory, } from 'vue-router'
import Page1 from './views/Page1.vue'
import Home from './views/Home.vue'
import TestForm from './views/_dev/TestForm.vue'
import Login from './views/user/Login.vue'

const menus = [
    { path: '/', name: '主页', icon: 'UserOutlined', component: Home },
    { path: '/page1', name: 'page1', icon: 'VideoCameraOutlined', component: Page1 },
    { path: '/login', name: '用户登录', icon: 'UserOutlined', component: Login, meta: { noLayout: true } },
]
const devMenus = [
    { path: '/store-form', name: 'store 表单处理', icon: 'form-outlined', component: TestForm },
]

export const routes = [...menus, ...devMenus]
export const router = createRouter({
    history: createWebHashHistory(), // createWebHashHistory createWebHistory
    routes
})