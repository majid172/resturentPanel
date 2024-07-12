import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import CustomerView from '@/views/CustomerView.vue'
import ControlPanelView from '@/views/ControlPanelView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/customer',
      name:'customer',
      component:CustomerView
    },
    {
      path: '/control-panel',
      name: 'control_panel',
      component:ControlPanelView
    }
  ]
})

export default router
