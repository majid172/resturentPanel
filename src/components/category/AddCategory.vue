<script setup>
import { onMounted } from 'vue';
import { useCategoryStore } from '@/stores/category';

const createCategory = useCategoryStore();

onMounted(() => {
    createCategory.fetchCategory();
});
</script>

<template>
<div class="row mb-none-30">
    <div class="col-lg-8 col-md-12 mb-30">
        <div class="card ">
  <div class="card-header">
    <h4 class="text-success text-left">Add New Category</h4>
    <div class="text-end">
        <router-link class="btn btn-sm btn-outline-success" :to="{name:'categoryList'}">Category List</router-link>
    </div>
  </div>
      <form action="">
          <div class="card-body">
            <div class="mb-3">
    <label for="category_name" class="form-label">Category Name</label>
    <input type="text" class="form-control" id="category_name" v-model="category_name">
    
  </div>
        
            
          </div>
          <div class="card-footer text-muted">
            <button type="submit" class="btn btn-sm btn-outline-success w-25"> Add</button>
          </div>
      </form>
</div>
    </div>
</div>
</template>