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
    <div class="col-lg-12 col-md-12 mb-30">
        <div class="card">
            <div class="card-body px-4">
                <form action="">
                    <div class="row">
                        <div class="col-md-6">
                            <div class="row mb-2">
                                <div class="col-md-3 col-xs-4 d-flex align-items-center">
                                    <label class="required"> Category Name</label>
                                </div>
                                <div class="col-md-9 col-xs-12">
                                    <input class="form-control" type="text" name="category_name" required
                                    v-model="createCategory.addCategoryForm.category_name">
                                </div>
                            </div>
                           
                            <!-- <div class="row mb-2">
                                <div class="col-md-3 col-xs-4 d-flex align-items-center">
                                    <label class="required">Description</label>
                                </div>
                                <div class="col-md-9 col-xs-12">
                                    <textarea class="form-control" col="15" row="5"  required name="description"
                                    v-model="createCategory.addCategoryForm.description"></textarea>
                                </div>
                            </div> -->
                        </div>
                       
                    </div>
                    
                    <div class="row">
                    
                        <div class="col text-end">
                        <input type="button" class="btn btn-outline-danger my-3" value="Add Task" @click.prevent="createCategory.addCategory">
                            <!-- <button type="submit" class="btn btn--primary btn-global">Save</button> -->
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
</div>
</template>