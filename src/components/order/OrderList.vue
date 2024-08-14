<script setup>
import { onMounted } from 'vue';
import { useOrderStore } from '@/stores/order';
const orderStore = useOrderStore();
onMounted(()=>{
    orderStore.orderList();
})
</script>
<template>
<div class="row">
<div class="col-lg-12">
<div class="card">
              <div class="card-header">
                 Order List
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
        class="btn btn-outline-success dropdown-toggle"
        href="javascript:void(0)"
        role="button"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        <i class="las la-ellipsis-v"></i>
      </a>
      <ul class="dropdown-menu">
        <li><a class="dropdown-item" href="#">Processing</a></li>
        <li><a class="dropdown-item" href="#">Complete</a></li>
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