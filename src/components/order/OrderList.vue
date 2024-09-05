<script setup>
import { onMounted } from 'vue';
import { useOrderStore } from '@/stores/order';
const orderStore = useOrderStore();
const handleDelete = async (id) => {
  if (confirm('Are you sure you want to delete this order?')) {
    await orderStore.deleteOrder(id);
  }
};
onMounted(()=>{
    orderStore.orderList();
})
</script>
<template>
<div class="row">
<div class="col-lg-12">
<div class="card">
    <div class="card-header py-3 d-flex flex-row align-items-center justify-content-between">
        <h6 class="m-0 font-weight-bold text--primary">Order List</h6>
        <router-link :to="{name:'addOrder'}" class="btn btn-sm btn-outline--primary">
            <i class="las la-plus me-1"></i>Add Order
        </router-link>
    </div>
    <div class="card-body ">
        <div class="table-responsive">
        <table class="table">
  <thead>
    <tr>
      
      <th scope="col">SL No.</th>
      <th scope="col">Order No.</th>
      <th scope="col">Item</th>

      <th scope="col">Customer</th>
      <th scope="col">Date</th>
      <th scope="col">Price</th>
      <th scope="col">Quantity</th>
      <th scope="col">Status</th>
      <th scope="col">Action</th>
    </tr>
  </thead>
  <tbody>
    <tr v-for="(order,index) in orderStore.orders" :key="order._id">
      <td scope="row">{{++index}}</td>
      <td scope="row">#{{order.order_id}}</td>
      <td v-for="item in order.menuItems" >
              {{ item.menu.name }}
            </td>
     
      <td>{{order.customerName}}</td>
      <td>{{order.orderDate}}</td>
      <td>{{order.totalPrice}}</td>
      <td v-for="item in order.menuItems">{{item.quantity}}</td>
      <td>
        <span class="badge bg-info" v-if="order.status === 'Pending'">{{ order.status }}</span>
        <span class="badge bg-success" v-else-if="order.status === 'Accepted'">{{ order.status }}</span>
        <span v-else>{{ order.status }}</span>
      </td>
    
      <td>
      <div class="dropdown">
      <a
        class=" dropdown-toggle"
        href="javascript:void(0)"
        role="button"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        <i class="las la-ellipsis-v"></i>
      </a>
      <ul class="dropdown-menu">
        
        <li><a class="dropdown-item text-info" href="javascript"><i class="las la-info-circle"></i> Details</a></li>
        <li><a class="dropdown-item text-success" href="javascript"><i class="las la-edit"></i> Edit</a></li>
        <li><a class="dropdown-item text-danger" href="javascript" @click.prevent="handleDelete(order._id)"><i class="las la-trash"></i> Delete</a></li>
      </ul>
    </div>
  </td>

    </tr>
    
  </tbody>
</table>
                      </div>
                  </div>
              </div>
    
</div>
</div>

</template> 