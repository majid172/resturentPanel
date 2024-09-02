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
            <div class="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                <h6 class="m-0 font-weight-bold text--primary">Create New Order</h6>
                <router-link :to="{name:'orderList'}" class="btn btn-sm btn-outline--primary">
                    <i class="las la-bars me-1"></i>Show List
                </router-link>
               
            </div>
            <div class="card-body px-4">
                <form >
                    <div class="row">
                        <div class="col-lg-6">
                            <div class="row mb-2">
                        <div class="col-md-3 col-xs-4 d-flex align-items-center">
                            <label class="required">Menus</label>
                        </div>
                        <div class="col-md-9 col-xs-12">
                            <select v-model="orderStore.orderForm.menuItems[0].menu" class="form-control" required>
                                <option v-for="item in menuStore.menus" :key="item._id" :value="item._id">{{item.name}} - ({{ item.initial_quantity }})</option>
                            
                            </select>
                        </div>
                            </div>
                            
                            <div class="row mb-2">
                                <div class="col-md-3 col-xs-4 d-flex align-items-center">
                                    <label>Price</label>
                                </div>
                                <div class="col-md-9 col-xs-12">
                                    <input class="form-control" type="text" v-model="orderStore.orderForm.totalPrice" placeholder="Enter menu price" required>
                                </div>
                            </div>
                            <div class="row mb-2">
                                <div class="col-md-3 col-xs-4 d-flex align-items-center">
                                    <label class="required"> Quantity</label>
                                </div>
                                <div class="col-md-9 col-xs-12 ">
                                    <input class="form-control" type="text" v-model="orderStore.orderForm.menuItems[0].quantity" required
                                         placeholder="Enter menu quantity">
                                </div>
                            </div>
                        </div>
                        
                        <div class="col-md-6">
                            <div class="row mb-2">
                                <div class="col-md-3 col-xs-4 d-flex align-items-center">
                                    <label class="required"> Customer Name</label>
                                </div>
                                <div class="col-md-9 col-xs-12 ">
                                    <input v-model="orderStore.orderForm.customerName" class="form-control" type="text" name="customerName" required
                                    placeholder="Enter Customer name">
                                </div>
                            </div>
                            <div class="row mb-2">
                                <div class="col-md-3 col-xs-4 d-flex align-items-center">
                                    <label class="required">Status</label>
                                </div>
                                <div class="col-md-9 col-xs-12">
                                    <select class="form-control" type="text" v-model="orderStore.orderForm.status" required
                                        >
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
                                    <input v-model="orderStore.orderForm.orderDate" class="form-control" type="date" placeholder="Enter menu date" required>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col text-end">
                        <input type="button" class="btn btn-outline-success my-3" value="Add Task" @click.prevent="orderStore.createOrder">
                        
                        </div>
                    </div>
                </form>
            
                
            </div>
        </div>
    </div>
</div>
</template>