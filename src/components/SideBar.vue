<script setup>
import '@/assets/js/dropdown.js'
</script>
<template>
<div class="sidebar">
    <button class="res-sidebar-close-btn"><i class="las la-times"></i></button>
    <div class="sidebar__inner">
        <div class="sidebar__logo">
            <router-link to="/">
                <img src="/src/assets/images/logo/logo.png">
            </router-link>
        </div>

        <div class="sidebar__menu-wrapper" id="sidebar__menuWrapper">
            <ul class="sidebar__menu">
                <li class="sidebar-menu-item ">
                <router-link to="/" class="nav-link "><i class="menu-icon las la-tachometer-alt text--primary"></i>
                        <span class="menu-title">Dashboard</span></router-link>
                    
                </li>
                <li class="sidebar__menu-header">Category Details</li>
                <li class="sidebar-menu-item">
                    <router-link to="/category-list" class="nav-link"
                       data-default-url="/category-list">
                        <i class="menu-icon las la-list-alt text-success"></i>
                        <span class="menu-title">Category List</span>
                    </router-link>
                </li>
                <li class="sidebar-menu-item">
                    <router-link to="/add-category" class="nav-link"
                       data-default-url="/add-category">
                        <i class="menu-icon las la-plus-circle text-success"></i>
                        <span class="menu-title">Add Category</span>
                    </router-link>
                </li>
                <li class="sidebar__menu-header">Menu Details</li>
                <li class="sidebar-menu-item">
                    <router-link to="/menu-list" class="nav-link"
                       data-default-url="/menu-list">
                        <i class="menu-icon las la-utensils text-success"></i>
                        <span class="menu-title">Menu List</span>
                    </router-link>
                </li>
                <li class="sidebar-menu-item">
                    <router-link to="/add-menu" class="nav-link"
                       data-default-url="/add-menu">
                        <i class="menu-icon las la-plus-circle text-success"></i>
                        <span class="menu-title">Add Menu</span>
                    </router-link>
                </li>
                
                <li class="sidebar__menu-header">Order Details</li>
                <li class="sidebar-menu-item">
                    <router-link to="/order-list" class="nav-link"
                       data-default-url="/order-list">
                        <i class="menu-icon las la-hamburger text-success"></i>
                        <span class="menu-title">Order List</span>
                    </router-link>
                </li>
                <li class="sidebar-menu-item">
                    <router-link to="/add-order" class="nav-link"
                       data-default-url="/">
                        <i class="menu-icon las la-plus-circle text-success"></i>
                        <span class="menu-title">Add Order</span>
                    </router-link>
                </li>
                
                <li class="sidebar__menu-header">Attendence Details</li>
                <li class="sidebar-menu-item">
                    <router-link to="/" class="nav-link"
                       data-default-url="/">
                        <i class="menu-icon las la-calendar text-success"></i>
                        <span class="menu-title">Daily Attendence</span>
                    </router-link>
                </li>
                <li class="sidebar-menu-item">
                    <router-link to="/" class="nav-link"
                       data-default-url="/">
                        <i class="menu-icon las la-calendar-check  text-success"></i>
                        <span class="menu-title">Monthly Attendence</span>
                    </router-link>
                </li>
    
                <!-- employee -->
                <li class="sidebar__menu-header">Employee Management</li>
                <li class="sidebar-menu-item">
                    <router-link :to="{name:'employeeList'}" class="nav-link"
                       data-default-url="/employee-list">
                        <i class="menu-icon las la-users text-danger"></i>
                        <span class="menu-title">Employees List</span>
                    </router-link>
                </li>
                
                <li class="sidebar__menu-header">User Management</li>
                <li class="sidebar-menu-item">
                    <router-link :to="{name:'customer'}" class="nav-link"
                       data-default-url="/customer">
                        <i class="menu-icon las la-users text-danger"></i>
                        <span class="menu-title">All Users</span>
                    </router-link>
                </li>
                
                <li class="sidebar__menu-header">Settings Panel</li>
                <li class="sidebar-menu-item">
                    <router-link :to="{name:'control_panel'}" class="nav-link"
                       data-default-url="/control-panel">
                        <i class="menu-icon las la-cog text-warning"></i>
                        <span class="menu-title">Control Panel</span>
                    </router-link>
                </li>
                

        </ul>
    </div>

	</div>
</div>

</template>