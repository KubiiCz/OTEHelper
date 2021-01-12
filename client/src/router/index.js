import { createWebHistory, createRouter } from 'vue-router'
import Home from '../views/Home.vue'
import Contact from '../views/Contact.vue'
import Info from '../views/Info.vue'

const history = createWebHistory()
const routes = [
  {
    path: '/',
    component: Home,
  },
  {
    path: '/info',
    component: Info,
  },
  {
    path: '/contact',
    component: Contact,
  },
]

const router = createRouter({ history, routes })
export default router
