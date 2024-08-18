<script setup>
import { onMounted } from 'vue';
import { useMenuStore } from '@/stores/menu';
import { useOrderStore } from '@/stores/order';
const menuStore = useMenuStore();
const orderStore = useOrderStore();
onMounted(()=>{
    menuStore.fetchMenus();
})
</script>

<template>
<div class="row mb-none-30">
    <div class="col-lg-12 col-md-12 mb-30">
        <div class="card">
            <div class="card-header">
                <h4>Create New Order</h4>
            </div>
            <div class="card-body px-4">
                <form action="" @submit.prevent="submitForm">
                    <div class="row">
                        <div class="col-md-6">
                            <div class="row mb-2">
                                <div class="col-md-3 col-xs-4 d-flex align-items-center">
                                    <label class="required"> Quantity</label>
                                </div>
                                <div class="col-md-9 col-xs-12 ">
                                    <input class="form-control" type="text" v-model="quantity" name="quantity" required
                                        value="" placeholder="Enter menu quantity">
                                </div>
                            </div>
                            <div class="row mb-2">
                                <div class="col-md-3 col-xs-4 d-flex align-items-center">
                                    <label class="required">Menus</label>
                                </div>
                                <div class="col-md-9 col-xs-12">
                                    <select v-model="menu_id" class="form-control" type="text" required>
                                        
                                        <option v-for="item in menuStore.menus" :key="item.id" :value="item.id">{{item.name}} - ({{ item.initial_quantity }})</option>
                                        
                                        </select>
                                </div>
                            </div>
                            <div class="row mb-2">
                                <div class="col-md-3 col-xs-4 d-flex align-items-center">
                                    <label class="required">Price</label>
                                </div>
                                <div class="col-md-9 col-xs-12">
                                    <input v-model="totalPrice" class="form-control" type="text" name="price" placeholder="Enter menu price" required>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="row mb-2">
                                <div class="col-md-3 col-xs-4 d-flex align-items-center">
                                    <label class="required"> Customer Name</label>
                                </div>
                                <div class="col-md-9 col-xs-12 ">
                                    <input v-model="customerName" class="form-control" type="text" name="customerName" required
                                    placeholder="Enter Customer name">
                                </div>
                            </div>
                            <div class="row mb-2">
                                <div class="col-md-3 col-xs-4 d-flex align-items-center">
                                    <label class="required">Status</label>
                                </div>
                                <div class="col-md-9 col-xs-12">
                                    <select class="form-control" type="text" v-model="status" name="category_id" required
                                        value="">
                                        <option value="">Choose Status</option>
                                        <option value="Pending">Pending</option>
                                        <option value="Accepted">Accepted</option>
                                        <option value="Rejected">Rejected</option>
                                        
                                        </select>
                                </div>
                            </div>
                            <div class="row mb-2">
                                <div class="col-md-3 col-xs-4 d-flex align-items-center">
                                    <label class="required">Order Date</label>
                                </div>
                                <div class="col-md-9 col-xs-12">
                                    <input v-model="orderDate" class="form-control" type="date" name="orderDate" placeholder="Enter menu date" required>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div class="row">
                        <div class="col text-end">
                        <input type="button" class="btn btn-outline-danger my-3" value="Add Task" @click.prevent="orderStore.createOrder">
                            <!-- <button type="submit" class="btn btn--primary btn-global">Save</button> -->
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
</div>
</template>