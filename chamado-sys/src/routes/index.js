import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import CustomerView from '../views/CustomerView.vue'
import TecnicalView from '../views/TecnicalView.vue'
import LogInView from '../views/LogInView.vue'
import CadastroView from '../views/CadastroView.vue'

const routes = [
  {
    path: '/login',
    name: 'login',
    component: LogInView,
  },
  {
    path: '/home',
    name: 'home',
    component: HomeView,
  },
  {
    path: '/customer',
    name: 'customer',
    component: CustomerView,
  },
  {
    path: '/tecnical',
    name: 'tecnical',
    component: TecnicalView,
  },
  {
    path: '/cadastro',
    name: 'cadastro',
    component: CadastroView,
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL || '/'),
  routes,
})

export default router
