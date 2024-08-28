<script setup>
import { onMounted } from 'vue';
import { useEmployeeStore } from '@/stores/employee';

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
                <router-link to="/add-category" class="btn btn-sm btn-outline--primary">
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
                                    <a href="javascript:void(0)" class="btn btn-sm btn-outline-info me-2"><i class="las la-pen"></i></a>
                                    
                                    <a href="javascript:void(0)" class="btn btn-sm btn-outline-danger "@click="handleDelete(item._id)"><i class="las la-trash"></i></a>
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