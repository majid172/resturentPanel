<script setup>
import Customer from '@/components/customer/Customer.vue';
import NavBar from '../components/NavBar.vue'
import SideBar from '../components/SideBar.vue'
</script>

<template>
<NavBar></NavBar>
    <div class="main-wrapper">
      <SideBar></SideBar>
      <Customer></Customer>
    </div>
</template>
