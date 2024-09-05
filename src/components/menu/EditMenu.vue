<script setup>
import { onMounted } from 'vue';
import { useCategoryStore } from '@/stores/category';
import { useMenuStore } from '@/stores/menu';

const categoryStore = useCategoryStore();
const menuStore = useMenuStore();
onMounted(()=>{
    categoryStore.fetchCategory();
})

</script>

<template>
<div class="row mb-none-30">
    <div class="col-lg-12 col-md-12 mb-30">
        <div class="card">
            <div class="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                <h6 class="m-0 font-weight-bold text--primary">Update Menu</h6>
                <router-link :to="{name:'menuList'}" class="btn btn-sm btn-outline--primary">
                    <i class="las la-bars me-1"></i>Show List
                </router-link>
               
            </div>
            <div class="card-body px-4">
                <form>
                    <div class="row">
                        <div class="col-md-6">
                            <div class="row mb-2">
                                <div class="col-md-3 col-xs-4 d-flex align-items-center">
                                    <label class="required"> Menu Name</label>
                                </div>
                                <div class="col-md-9 col-xs-12 ">
                                    <input class="form-control" type="text" v-model="menuStore.menuForm.name" required
                                     placeholder="Enter menu name">
                                </div>
                            </div>
                            <div class="row mb-2">
                                <div class="col-md-3 col-xs-4 d-flex align-items-center">
                                    <label class="required">Category</label>
                                </div>
                                <div class="col-md-9 col-xs-12">
                                    <select class="form-control" type="text" v-model="menuStore.menuForm.category_id" required>
                                        <option value="">Choose Category</option>
                                        <option v-for="item in categoryStore.categories" :value="item._id">{{ item.category_name }}</option>
                                        </select>
                                </div>
                            </div>
                            <div class="row mb-2">
                                <div class="col-md-3 col-xs-4 d-flex align-items-center">
                                    <label class="required">Price</label>
                                </div>
                                <div class="col-md-9 col-xs-12">
                                    <input class="form-control" type="text" v-model="menuStore.menuForm.price" placeholder="Enter menu price" required>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="row mb-2">
                                <div class="col-md-3 col-xs-4 d-flex align-items-center">
                                    <label class="required"> Quantity</label>
                                </div>
                                <div class="col-md-9 col-xs-12 ">
                                    <input class="form-control" type="text" v-model="menuStore.menuForm.initial_quantity" required placeholder="Enter menu quantity">
                                </div>
                            </div>
                            <div class="row mb-2">
                                <div class="col-md-3 col-xs-4 d-flex align-items-center">
                                    <label class="required">Ingredients</label>
                                </div>
                                <div class="col-md-9 col-xs-12">
                                    <input class="form-control" type="text" v-model="menuStore.menuForm.ingredients" required multiple>
                                        
                                </div>
                            </div>
                            <div class="row mb-2">
                                <div class="col-md-3 col-xs-4 d-flex align-items-center">
                                    <label class="required">Ratings</label>
                                </div>
                                <div class="col-md-9 col-xs-12">
                                    <input class="form-control" type="number" v-model="menuStore.menuForm.rating" placeholder="Enter menu rating" required>

                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div class="row">
                        <div class="col text-end">
                            <button type="submit" class="btn btn--primary btn-global" @click.prevent="menuStore.createMenu">Save</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
</div>
</template>