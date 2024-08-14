<script setup>
import { onMounted } from 'vue';
import { useCategoryStore } from '@/stores/category';
const categoryStore = useCategoryStore();
onMounted(()=>{
    categoryStore.fetchCategory();
})
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
                                    <label class="required"> Menu Name</label>
                                </div>
                                <div class="col-md-9 col-xs-12 ">
                                    <input class="form-control" type="text" name="name" required
                                        value="" placeholder="Enter menu name">
                                </div>
                            </div>
                            <div class="row mb-2">
                                <div class="col-md-3 col-xs-4 d-flex align-items-center">
                                    <label class="required">Category</label>
                                </div>
                                <div class="col-md-9 col-xs-12">
                                    <select class="form-control" type="text" name="category_id" required
                                        value="">
                                        <option value="">Choose Category</option>
                                        <option value="" v-for="item in categoryStore.categories">{{ item.category_name }}</option>
                                        </select>
                                </div>
                            </div>
                            <div class="row mb-2">
                                <div class="col-md-3 col-xs-4 d-flex align-items-center">
                                    <label class="required">Price</label>
                                </div>
                                <div class="col-md-9 col-xs-12">
                                    <input class="form-control" type="text" name="price" placeholder="Enter menu price" required>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="row mb-2">
                                <div class="col-md-3 col-xs-4 d-flex align-items-center">
                                    <label class="required"> Quantity</label>
                                </div>
                                <div class="col-md-9 col-xs-12 ">
                                    <input class="form-control" type="text" name="initial_quantity" required
                                        value="" placeholder="Enter menu quantity">
                                </div>
                            </div>
                            <div class="row mb-2">
                                <div class="col-md-3 col-xs-4 d-flex align-items-center">
                                    <label class="required">Ingredients</label>
                                </div>
                                <div class="col-md-9 col-xs-12">
                                    <select class="form-control" type="text" name="cur_text" required
                                        value="">
                                        <option value="">Choose Category</option>
                                        <option v-for="item in categoryStore.categories" value="{{ item.category_id }}" >{{ item.category_name }}</option>
                                        </select>
                                </div>
                            </div>
                            <div class="row mb-2">
                                <div class="col-md-3 col-xs-4 d-flex align-items-center">
                                    <label class="required">Ratings</label>
                                </div>
                                <div class="col-md-9 col-xs-12">
                                    <input class="form-control" type="text" name="rating" placeholder="Enter menu rating" required>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div class="row">
                        <div class="col text-end">
                            <button type="submit" class="btn btn--primary btn-global">Save</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
</div>
</template>