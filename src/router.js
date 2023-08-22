import { createRouter, createWebHistory } from 'vue-router';
 
/* import NotFound from './pages/NotFound.vue'; */
 
const router = createRouter({
    history: createWebHistory(),
    routes: [

        {
            path: '/',
            name: 'Home',
            component: () => import('./pages/Home.vue')
        },
        {
            path: '/AppDetailsProjects',
            name: 'AppDetailsProjects',
            component: () => import('./pages/AppDetailsProjects.vue')
        },
       
    ]
});
 
export { router };