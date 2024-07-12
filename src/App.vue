<script setup>
import { RouterLink, RouterView } from 'vue-router'
import SideBar from './components/SideBar.vue'
</script>

<template>
  <div class="page-wrapper default-version">
  <SideBar></SideBar>
  <div class="top-nav-bg">
  <NavBar></NavBar>
    <div class="breadcrumb-wrapper">
      @include('admin.components.breadcrumb')
    </div>
  </div>
  <div class="body-wrapper">
    <router-view />
  </div>
</div>
  
</template>

<style scoped>
</style>
