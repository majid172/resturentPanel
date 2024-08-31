<script setup>
import { onMounted } from 'vue';
import { useEmployeeStore } from '@/stores/employee';
import 'bootstrap';

const employeeStore = useEmployeeStore();
onMounted(()=>{
    employeeStore.employeeList();
});
const handleDelete = async (id) => {
  if (confirm('Are you sure you want to delete this employee?')) {
    await employeeStore.deleteEmployee(id);
  }
};
</script>
<template>
    <div class="row">
        <div class="col-lg-12">
        <div class="card mb-4 card-primary shadow">
            <div class="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                <h6 class="m-0 font-weight-bold text--primary">Employee List</h6>
                <router-link to="/add-employee" class="btn btn-sm btn-outline--primary">
                    <i class="las la-plus"></i>Add New Employee
                </router-link>
               
            </div>
            <div class="card-body">
                <div class="table-responsive">
                    <table class="table table-striped table-hover align-items-center table-borderless">
                        <thead class="thead-light">
                        <tr>
                            <th>SL</th>
                            <th>Employee</th>
                            <th>Phone</th>
                            <th>Salary</th>
                            <th>Role</th>
                            <!-- <th>Description</th> -->
                            <th>Action</th>
                        </tr>
                        </thead>
                        <tbody>
                           <tr v-for="(item,index) in employeeStore.employees">
                                <td>{{ ++index }}</td>
                                <td>{{ item.employee_name }}</td>
                                <td>{{ item.employee_phone_number }}</td>
                                <td>{{ item.employee_salary }}</td>
                                <td>{{ item.employee_role }}</td>
                                <td>
                                <router-link :to="{name:'employeeEdit'}" class="btn btn-outline-success me-2"><i class="las la-pen"></i></router-link>
                                <!-- <a  class="btn btn-outline-success me-2" data-employee = "{{ item }}" data-bs-toggle="modal" data-bs-target="#exampleModal">
</a> -->
                                
                                    <a href="javascript:void(0)" class="btn btn-sm btn-outline-danger " @click="handleDelete(item._id)"><i class="las la-trash"></i></a>
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
    
    <!-- Button trigger modal -->


<!-- Modal -->
<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Update Employee Info</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <form action="">
            <div class="mb-3">
                <label for="name" class="form-label">Employee Name</label>
                <input type="text" v-model="employee_name" class="form-control" id="name" aria-describedby="name" placeholder="Enter employee name">
                
              </div>
            <div class="row">
                <div class="col-6">
                    <div class="mb-3">
                        <label for="name" class="form-label">Contact Number</label>
                        <input type="text" v-model="employee_phone_number" class="form-control" id="name" aria-describedby="name" placeholder="Enter Contact Number">
                
                  </div>
                </div>
                <div class="col-6">
                    <div class="mb-3">
                        <label for="name" class="form-label">Salary</label>
                        <input type="text" v-model="employee_salary" class="form-control" id="name" aria-describedby="name" placeholder="Enter employee salary">
                
                    </div>
                </div>
            </div>
            
            <div class="mb-3">
                <label for="name" class="form-label">Role</label>
                <select class="form-control" id="name" aria-describedby="name">
                    <option value="">Choose Employee Role</option>
                    <option value="">Chef</option>
                    <option value="">Waiter</option>
                    <option value="">Cleaner</option>
                </select>
                
            </div>
        </form>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-sm btn-outline-danger" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-outline-info btn-sm">Update</button>
      </div>
    </div>
  </div>
</div>
</template>