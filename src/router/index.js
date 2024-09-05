import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import CustomerView from '@/views/CustomerView.vue'
import ControlPanelView from '@/views/ControlPanelView.vue'
import BasicSettingsView from '@/views/settings/BasicSettingsView.vue';
import LogoView from '@/views/settings/LogoView.vue'
import CategoryListView from '@/views/category/ListView.vue'
import AddCategoryView from '@/views/category/AddCategroyView.vue';
// import EditCategoryView from '@/views/category/EditCategroyView.vue';
import MenuListView from '@/views/menu/ListView.vue';
import AddMenuView from '@/views/menu/AddMenuView.vue';
import EditMenuView from '@/views/menu/EditMenuView.vue';

import OrderListView from '@/views/order/listView.vue';
import AddOrderView from '@/views/order/AddOrderView.vue';

import EmployeeAddView from '@/views/employees/AddView.vue';
import EmployeeListView from '@/views/employees/ListView.vue';
import EmployeeEditView from '@/views/employees/EditView.vue';
import EditCategoryView from '@/views/category/EditCategoryView.vue';

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
      path:'/category-list',
      name: 'categoryList',
      component: CategoryListView
    },
    {
      path:'/add-category',
      name: 'addCategory',
      component: AddCategoryView
    },
    {
      path:'/edit-category/:id',
      name: 'editCategory',
      component: EditCategoryView
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
    },
    {
      path:'/edit-menu/:id',
      name: 'editMenu',
      component: EditMenuView
    },
    {
      path:'/order-list',
      name: 'orderList',
      component: OrderListView
    },
    {
      path:'/add-order',
      name:'addOrder',
      component:AddOrderView,
    },
    {
      path:'/add-employee',
      name:'addEmployee',
      component:EmployeeAddView
    },
    {
      path:'/employee-list',
      name:'employeeList',
      component: EmployeeListView,
    },
    {
      path:'/employee-edit',
      name:'employeeEdit',
      component: EmployeeEditView,
    }
    
  ]
})

export default router
