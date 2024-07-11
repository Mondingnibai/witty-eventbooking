import { createRouter, createWebHistory } from 'vue-router'
import Login from '@/components/SIgnIn.vue'
import Register from '@/components/SignUp.vue'
import Dashboard from '@/components/user/Dashboard.vue'
import Lesson from '@/components/user/Lesson.vue'
import Subscribe from '@/components/user/Subscribe.vue'
import Calendar from '@/components/user/Calendar.vue'

// Admin Componennts
import Teachers from  '@/components/admin/Teachers.vue'
import Students from  '@/components/admin/Students.vue'
import LessonBooked from  '@/components/admin/LessonBooked.vue'
import LessonType from  '@/components/admin/LessonType.vue'
import Location from  '@/components/admin/Location.vue'
import Session from  '@/components/admin/Session.vue'

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

    // admin routes
    {
        path: "/admin/teachers",
        name: "Teachers",
        component: Teachers
    },

    {
        path: "/admin/students",
        name: "Students",
        component: Students
    },

    {
        path: "/admin/lesson-booked",
        name: "Lesson Bookend",
        component: LessonBooked
    },

    {
        path: "/admin/lesson-type",
        name: "Lesson Type",
        component: LessonType
    },

    {
        path: "/admin/location",
        name: "Location",
        component: Location
    },

    {
        path: "/admin/session",
        name: "Session",
        component: Session
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})



export default router