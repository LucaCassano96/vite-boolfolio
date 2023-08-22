import { createRouter, createWebHistory } from 'vue-router';

import NotFound from './pages/NotFound.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [

        {
            path: '/',
            name: 'Home',
            component: () => import('./pages/Home.vue')
        },
        {
            path: '/AppDetailsProject/:id',
            name: 'AppDetailsProject',
            component: () => import('./pages/AppDetailsProject.vue')
        },
        {
            path: '/:pathMatch(.*)*',
            name: 'NotFound',
            component: NotFound
        },

    ]
});

export { router };