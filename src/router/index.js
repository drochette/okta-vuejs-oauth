import {createRouter, createWebHistory} from 'vue-router'
import Home from '../views/Home.vue'
import {LoginCallback, navigationGuard} from '@okta/okta-vue'
import ProfileComponent from '../src/components/Profile'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/login/callback',
        component: LoginCallback
    },
    {
        path: '/profile',
        component: ProfileComponent,
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})
router.beforeEach(navigationGuard)

export default router
