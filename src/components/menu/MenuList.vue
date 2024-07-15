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
                        
                            <th>Action</th>
                        </tr>
                        </thead>
                        <tbody>
                           
                        <tr>
                            <td data-label="SL">
                        
                            </td>
                            <td data-label="Name">
                                <a href="" target="_blank">
                                    <div class=" d-block align-items-center ">
                                        <div class="rounded-circle mr-2 w-40px" data-original-title="">
                                           
                                            <br>
                                            <span class="text-muted font-14"></span>
                                        </div> 
                                    </div>
                                </a>
                            </td>
                            <td data-label="Category"></td>
                            
                            <td data-label="Price">
                               
                            </td>

                            <td data-label="Action">
                                
                                <div class="dropdown">
                                    <a class="btn btn--primary dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
                                      More Action
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