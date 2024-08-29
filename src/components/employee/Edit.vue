<script setup>
</script>
<template>
    <div class="row mb-none-30">
    <div class="col-lg-12 col-md-12 mb-30">
        <div class="card">
            <div class="card-body px-4">
                <form action="">
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
                    
                    <div class="row">
                        <div class="col text-end">
                            <button type="submit" class="btn btn--primary btn-global">Save</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
</div>
</template>