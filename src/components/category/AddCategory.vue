<script setup>
import { onMounted } from 'vue';
import {useCategoryStore} from '@/stores/category';

const createCategory = useCategoryStore();
// onMounted(()=>{
//     createCategory.addCategory()
// })
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
                                    <input class="form-control" type="text" name="category" required
                                    v-model="createCategory.addCategoryForm.category">
                                </div>
                            </div>
                           
                            <div class="row mb-2">
                                <div class="col-md-3 col-xs-4 d-flex align-items-center">
                                    <label class="required">Description</label>
                                </div>
                                <div class="col-md-9 col-xs-12">
                                    <textarea class="form-control" col="15" row="5"  required name="description"
                                    v-model="createCategory.addCategoryForm.description"></textarea>
                                </div>
                            </div>
                        </div>
                       
                    </div>
                    
                    <div class="row">
                        <div class="col text-end">
                            <button type="submit" class="btn btn--primary btn-global" @click="createCategory.addCategory">Save</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
</div>
</template>