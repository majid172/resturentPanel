<template>
    <!-- navbar-wrapper start -->
<nav class="navbar-wrapper">
    <div class="navbar__left">
        <button type="button" class="res-sidebar-open-btn me-3"><i class="las la-bars"></i></button>
        <form class="navbar-search">
            <input type="search" name="#0" class="navbar-search-field" id="searchInput" autocomplete="off"
                placeholder="Search Options...">
            <i class="fas fa-search text--primary"></i>
            <ul class="search-list"></ul>
        </form>
    </div>
    <div class="navbar__right">
        <ul class="navbar__action-list">
            <li>
                <router-link title="Visit Site" to="/" target="_blank" class="btn btn-sm btn--primary"><i class="fas fa-globe-americas"></i></router-link>
            </li>
            <li class="dropdown">
                <button type="button" class="primary--layer" data-bs-toggle="dropdown" data-display="static"
                    aria-haspopup="true" aria-expanded="false">
                    <i class="far fa-bell text--primary"></i>
                   
                </button>
                <div class="dropdown-menu dropdown-menu--md p-0 border-0 box--shadow1 dropdown-menu-right">
                    <div class="dropdown-menu__header">
                        <span class="caption">Notification</span>
                       
                    </div>
                    <div class="dropdown-menu__body">
                       
                    </div>
                    <div class="dropdown-menu__footer">
                        <router-link to="/" class="view-all-message">View all
                            notification</router-link>
                    </div>
                </div>
            </li>


            <li class="dropdown">
                <button type="button" class="" data-bs-toggle="dropdown" data-display="static" aria-haspopup="true"
                    aria-expanded="false">
                    
                </button>
                <div class="dropdown-menu dropdown-menu--sm p-0 border-0 box--shadow1 dropdown-menu-right">
                    <router-link to="/"
                        class="dropdown-menu__item d-flex align-items-center px-3 py-2">
                        <i class="dropdown-menu__icon las la-user"></i>
                        <span class="dropdown-menu__caption">Profile</span>
                    </router-link>
                    <router-link to="/"
                        class="dropdown-menu__item d-flex align-items-center px-3 py-2">
                    
                        <i class="dropdown-menu__icon las la-chevron-circle-right"></i>
                        <span class="dropdown-menu__caption">Logout</span>
                    </router-link>
                </div>
            </li>
        </ul>
    </div>
</nav>
<!-- navbar-wrapper end -->
</template>

	