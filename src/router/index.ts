import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../pages/HomePage.vue'

const router = createRouter({
    history: createWebHistory(import.meta.env.VITE_BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomeView
        },
        {
            path: '/about',
            name: 'about',
            component: () => import('../pages/AboutPage.vue')
        },
        {
            path: '/contact',
            name: 'contact',
            component: () => import('../pages/ContactPage.vue')
        }
    ]
})

export default router