<script setup>
import { onMounted } from 'vue';
import { useCustomerStore } from '@/stores/customer';

const customerStore = useCustomerStore();
onMounted(()=>{
	customerStore.fetchUsers()
});
</script>
<template>
<div class="row ">
    <div class="col-lg-12">
        <div class="card mb-4 card-primary shadow-sm">
            <div class="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                <h6 class="m-0 font-weight-bold text--primary">Search</h6>
            </div>
            <div class="card-body">
                <form action="" method="get">
                    <div class="row">
                        <div class="col-md-2">
                            <div class="form-group">
                                <input placeholder="Name" name="name" value="" type="text" class="form-control form-control-sm">
                            </div>
                        </div>
                        <div class="col-md-2">
                            <div class="form-group">
                                <input placeholder="Phone" name="phone" value="" type="text" class="form-control form-control-sm">
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="form-group">
                                <input placeholder="E-mail" name="email" value="" type="text" class="form-control form-control-sm">
                            </div>
                        </div>
                        <div class="col-md-2">
                            <div class="form-group">
                                <input placeholder="Join Date" name="created_at" id="created_at" value="" type="date" class="form-control form-control-sm" autocomplete="off">
                            </div>
                        </div>
                        
                        <div class="col-md-2">
                            <div class="form-group search-currency-dropdown">
                                <select name="status" class="form-control form-control-sm">
                                    <option value="">All Status</option>
                                    <option value="active">Active</option>
                                    <option value="inactive">Inactive</option>
                                </select>
                            </div>
                        </div>
                        <div class="col-md-2">
                            <div class="form-group">
                                <button type="submit" class="btn btn--primary btn-sm btn-block"><i class="fas fa-search"></i> Search</button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
</div>

<div class="row">
    <div class="col-lg-12">
        <div class="card mb-4 card-primary shadow">
            <div class="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                <h6 class="m-0 font-weight-bold text--primary">User List</h6>
                <a href="" class="btn btn-sm btn-outline--primary"><i
                            class="fas fa-envelope"></i> Send Mail to All</a>
            </div>
            <div class="card-body">
                <div class="table-responsive">
                    <table class="table table-striped table-hover align-items-center table-borderless">
                        <thead class="thead-light">
                        <tr>
                            <th>SL</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Balance</th>
                            <th>User Type</th>
                            <th>Login At</th>
                        
                            <th>Action</th>
                        </tr>
                        </thead>
                        <tbody>
                           
                        <tr v-for="user in customerStore.fetchUsers":key="user.id">
                            <td data-label="SL">
                                {{ user.id }}
                            </td>
                            <td data-label="Name')">
                                <a href="" target="_blank">
                                    <div class=" d-block align-items-center ">
                                        <div class="rounded-circle mr-2 w-40px" data-original-title="">
                                    
                                            <br>
                                            <span class="text-muted font-14"></span>
                                        </div> 
                                    </div>
                                </a>
                            </td>
                            <td data-label="Email')"></td>
                            
                            <td data-label="Balance')">
                               
                            </td>
                            <td>
                                
                            </td>
                            <td data-label="logged in at">
                                
                            </td>

                            <td data-label="Action">
                                
                                <div class="dropdown">
                                    <a class="btn btn--primary dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
                                      More Action'
                                    </a>
                                  
                                    <ul class="dropdown-menu" aria-labelledby="dropdownMenuLink">
                                      <li><a class="dropdown-item" href=""><i class="far fa-edit text--primary mr-1"></i>Details</a></li>
                                      <li><a class="dropdown-item" href=""><i class="fa fa-sign-in-alt text--info mr-1"></i> Login As User</a></li>
                                      <li><a class="dropdown-item" href=""><i class="las la-paper-plane text--warning mr-1"></i> Send Mail</a></li>
                                    </ul>
                                  </div>
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