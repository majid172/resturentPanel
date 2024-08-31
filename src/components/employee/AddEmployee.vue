<script setup>
import { onMounted } from 'vue';
import { useEmployeeStore } from '@/stores/employee';
const employeeStore = useEmployeeStore();

</script>
<template>
<div class="row mb-none-30">
    <div class="col-lg-12 col-md-12 mb-30">
        <div class="card">
        <div class="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                <h6 class="m-0 font-weight-bold text--primary">Create New Employee</h6>
                <router-link :to="{name:'employeeList'}" class="btn btn-sm btn-outline--primary">
                    <i class="las la-bars"></i>Show List
                </router-link>
               
            </div>
            <div class="card-body px-4">
                <form>
            
            <div class="row">
            <div class="col-lg-6">
                <div class="mb-3">
                    <label for="name" class="form-label">Employee Name</label>
                    <input type="text" v-model="employeeStore.employeeForm.employee_name" class="form-control" id="name" aria-describedby="name" placeholder="Enter employee name">
                    
                </div>
            </div>
            <div class="col-lg-6">
                <div class="mb-3">
                <label for="role" class="form-label">Role</label>
                <select class="form-control" v-model="employeeStore.employeeForm.employee_role" id="role" aria-describedby="role">
                    <option value="">Choose Employee Role</option>
                    <option value="Chef">Chef</option>
                    <option value="Waiter">Waiter</option>
                    <option value="Cleaner">Cleaner</option>
                </select>
                </div>
                
            </div>
            </div>
            <div class="row">
                <div class="col-6">
                    <div class="mb-3">
                        <label for="phone" class="form-label">Contact Number</label>
                        <input type="text" v-model="employeeStore.employeeForm.employee_phone_number" class="form-control" id="phone" aria-describedby="name" placeholder="Enter Contact Number">
                
                  </div>
                </div>
                <div class="col-6">
                    <div class="mb-3">
                        <label for="salary" class="form-label">Salary</label>
                        <input type="number" v-model="employeeStore.employeeForm.employee_salary" class="form-control" id="salary" aria-describedby="name" placeholder="Enter employee salary">
                
                    </div>
                </div>
            </div>
            
                    
                    <div class="row">
                        <div class="col text-end">
                        <input type="button" class="btn btn-outline-info my-3" value="Add Task" @click.prevent="employeeStore.createEmployee">
                            <!-- <button type="submit" class="btn btn--primarybtn-global" @click.prevent="employeeStore.createEmployee">Save</button> -->
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
</div>
</template>