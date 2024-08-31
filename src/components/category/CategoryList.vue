<script setup>
import { onMounted } from 'vue';
import { useCategoryStore } from '@/stores/category';

const categoryStore = useCategoryStore();
const handleDelete = async (id) => {
  if (confirm('Are you sure you want to delete this category?')) {
    await categoryStore.deleteCategory(id);
  }
};

onMounted(()=>{
    categoryStore.fetchCategory()
});

</script>
<template>
    <div class="row">
    <div class="col-lg-12">
        <div class="card mb-4 card-primary shadow">
            <div class="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                <h6 class="m-0 font-weight-bold text--primary">Category List</h6>
                <router-link to="/add-category" class="btn btn-sm btn-outline--primary">
                    <i class="las la-plus"></i>Add New Category
                </router-link>
               
            </div>
            <div class="card-body">
                <div class="table-responsive">
                    <table class="table table-striped table-hover align-items-center table-borderless">
                        <thead class="thead-light">
                        <tr>
                            <th>SL</th>
                            <th>Category</th>
                            <!-- <th>Description</th> -->
                            <th>Action</th>
                        </tr>
                        </thead>
                        <tbody>
                           
                        <tr v-for="(category,index) in categoryStore.categories">
                            <td data-label="SL">{{ ++index }}
                            </td>
                            
                            <td data-label="Category">{{ category.category_name }}</td>
                            <!-- <td data-label="description"
                            data-bs-toggle="tooltip" data-bs-placement="top" 
                            :title="category.description">{{ category.description.slice(0, 100) }}...</td> -->

                            <td data-label="Action">
                                <router-link :to="{name:'employeeEdit'}" class="btn btn-outline-success me-2"><i class="las la-pen"></i></router-link>
                                <button class="btn btn-outline-danger me-2"  @click="handleDelete(category._id)"><i class="las la-trash"></i></button>
                            </td>

                        </tr>
                        
                        
                        </tbody>
                    </table>
                </div>
                <div class="card-footer"></div>
            </div>
        </div>
    </div>
</div>
</template>