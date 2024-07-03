import { createRouter, createWebHistory } from 'vue-router'
import Login from '../components/SIgnIn.vue'
import Register from '../components/SignUp.vue'
import Dashboard from '../components/user/Dashboard.vue'
import Lesson from '../components/user/Lesson.vue'
import Subscribe from '../components/user/Subscribe.vue'
import Calendar from '../components/user/Calendar.vue'

const routes = [
    {
        path: "/",
        name: "Sign In",
        component: Login
    },
    {
        path: "/sign-up",
        name: "Sign Up",
        component: Register
    },
    {
        path: "/dashboard",
        name: "Dashboard",
        component: Dashboard
    },
    {
        path: "/lesson",
        name: "Lesson",
        component: Lesson
    },
    {
        path: "/subscription",
        name: "Subscribe",
        component: Subscribe
    },
    {
        path: "/calendar",
        name: "Calendar",
        component: Calendar
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes
})



export default router