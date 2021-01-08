import { createWebHistory, createRouter } from 'vue-router'
import Home from '../views/Home.vue'
import Contact from '../views/Contact.vue'
import OTE from '../views/Ote.vue'

const history = createWebHistory()
const routes = [
  {
    path: '/',
    component: Home,
  },
  {
    path: '/contact',
    component: Contact,
  },
]

const router = createRouter({ history, routes })
export default router
