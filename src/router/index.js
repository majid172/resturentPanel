import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import CustomerView from '@/views/CustomerView.vue'
import ControlPanelView from '@/views/ControlPanelView.vue'
import BasicSettingsView from '@/views/settings/BasicSettingsView.vue';
import LogoView from '@/views/settings/LogoView.vue'
import MenuListView from '@/views/menu/ListView.vue';
import AddMenuView from '@/views/menu/AddMenuView.vue';
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
    },
    {
      path:'/basic-settings',
      name:'basicSettings',
      component: BasicSettingsView
    },
    {
      path:'/logo',
      name:'logo',
      component: LogoView
    },
    {
      path:'/menu-list',
      name: 'menuList',
      component: MenuListView
    },
    {
      path:'/add-menu',
      name: 'addMenu',
      component: AddMenuView
    }
    
  ]
})

export default router
