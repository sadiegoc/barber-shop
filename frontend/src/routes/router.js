import { createRouter, createWebHistory } from "vue-router";

const routes = [
    {
        path: '/',
        alias: '/home',
        name: 'home',
        component: () => import('@/components/pages/home/Home.vue')
    }, {
        path: '/scheduling',
        name: 'scheduling',
        component: () => import('@/components/pages/scheduling/Scheduling.vue')
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router