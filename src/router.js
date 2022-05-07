import { createRouter, createWebHistory, createWebHashHistory } from 'vue-router'
import Page1 from './views/Page1.vue'
import Home from './views/Home.vue'
import Page2 from './views/Page2.vue'

export const router = createRouter({
    history: createWebHashHistory(), // createWebHashHistory createWebHistory
    routes: [
        {
            path: '/',
            // a single route can define multiple named components
            // which will be rendered into <router-view>s with corresponding names.
            components: {
                default: Home,
            },
        },
        {
            path: '/page1',
            components: {
                default: Page1
            },
        },
        {
            path: '/page2',
            components: {
                default: Page2
            },
        },
    ],
})
