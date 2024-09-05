<script setup>
import { onMounted } from 'vue';
import { useCategoryStore } from '@/stores/category';
import { useRoute } from 'vue-router';

const categoryStore = useCategoryStore();
const route = useRoute();
const cat_id = route.params.id;

onMounted(() => {
  categoryStore.editCategory(cat_id);
});
</script>

<template>
  <div class="row mb-none-30">
    <div class="col-lg-8 col-md-12 mb-30">
      <div class="card">
        <div class="card-header">
          <h4 class="text-success text-left">Edit Category</h4>
          <div class="text-end">
            <router-link class="btn btn-sm btn-outline-success" :to="{name:'categoryList'}">Category List</router-link>
          </div>
        </div>
        <form>
          <div class="card-body">
            <div class="mb-3">
              <label for="category_name" class="form-label">Category Name</label>
              <!-- Bind input to categoryStore's form field -->
              <input
                type="text"
                class="form-control"
                id="category_name"
                v-model="categoryStore.addCategoryForm.category_name"
                required
                autocomplete="off"
              />
            </div>
          </div>
          <div class="card-footer text-muted">
            <button
              type="submit"
              class="btn btn-sm btn-outline-success w-25"
              @click.prevent="categoryStore.updateCategory(cat_id)"
            >
              Update
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>
