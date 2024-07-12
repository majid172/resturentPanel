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
                <li class="sidebar__menu-header">Order Details</li>
                <li class="sidebar-menu-item">
                    <router-link to="/" class="nav-link"
                       data-default-url="/">
                        <i class="menu-icon las la-list text-success"></i>
                        <span class="menu-title">Order</span>
                    </router-link>
                </li>
                <li class="sidebar-menu-item">
                    <router-link to="/" class="nav-link"
                       data-default-url="/">
                        <i class="menu-icon las la-list text-success"></i>
                        <span class="menu-title">Order</span>
                    </router-link>
                </li>
                
                

        </ul>
    </div>

	</div>
</div>

</template>