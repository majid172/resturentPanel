<script setup>
import { onMounted } from 'vue';
import { useMenuStore } from '@/stores/menu';

const menuStore = useMenuStore();
onMounted(()=>{
    menuStore.fetchMenus();
});
const handleDelete= async(id)=>{
    if(confirm('Are you confirm to delete this menus ?')){
        await menuStore.deleteMenu(id);
    }
}
</script>
<template>
<div class="row">
    <div class="col-lg-12">
        <div class="card mb-4 card-primary shadow">
            <div class="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                <h6 class="m-0 font-weight-bold text--primary">Menu List</h6>
                <router-link to="/add-menu" class="btn btn-sm btn-outline--primary">
                    <i class="las la-plus"></i>Add Menu
                </router-link>
               
            </div>
            <div class="card-body">
                <div class="table-responsive">
                    <table class="table table-striped table-hover align-items-center table-borderless">
                        <thead class="thead-light">
                        <tr>
                            <th>SL</th>
                            <th>Name</th>
                            <th>Category</th>
                            <th>Price</th>
                            <th>Quantity</th>
                            <th>Ingredients</th>
                            <th>Ratings</th>
                            <th>Action</th>
                        </tr>
                        </thead>
                        <tbody>
                           
                        <tr v-for="(menu,index) in menuStore.menus">
                            <td data-label="SL">
                                {{ ++index }}
                            </td>
                            <td data-label="Name">
                                <a href="" target="_blank">
                                    <div class=" d-block align-items-center ">
                                        <div class="rounded-circle mr-2 w-40px" data-original-title="">
                                           {{ menu.name }}
                                            <br>
                                            <span class="text-muted font-14"></span>
                                        </div> 
                                    </div>
                                </a>
                            </td>
                            <td data-label="Category">{{ menu.category_id.category_name }}</td>
                            
                            <td data-label="Price">
                               {{ menu.price }}
                            </td>
                            <td data-label="Price">
                               {{ menu.initial_quantity }}
                            </td>
                            <td data-label="Price">
                               {{ menu.ingredients.toString() }}
                            </td>
                            <td data-label="Price">
                               {{ menu.rating }}
                            </td>

                            <td data-label="Action">    
                                <router-link :to="{name:'employeeEdit'}" class="btn btn-outline-success me-2"><i class="las la-pen"></i></router-link>
                                <!-- <a  class="btn btn-outline-success me-2" data-employee = "{{ item }}" data-bs-toggle="modal" data-bs-target="#exampleModal">
</a> -->
                                
                                    <a href="javascript:void(0)" class="btn btn-sm btn-outline-danger "@click="handleDelete(menu._id)"><i class="las la-trash"></i></a>
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