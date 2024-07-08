<script setup>
import Home from '../components/Home.vue'
import NavBar from '../components/NavBar.vue'
import SideBar from '../components/SideBar.vue'
</script>

<template>
  <NavBar></NavBar>
    <div class="main-wrapper">
      <SideBar></SideBar>
      <Home></Home>
    </div>
</template>
