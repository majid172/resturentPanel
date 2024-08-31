import { defineStore } from "pinia";
import axios from "axios";

export const useEmployeeStore = defineStore('employee',{
    state:()=>({
        employees:[],
        employeeForm:{
          employee_name:null,
          employee_phone_number:'',
          employee_salary:""
        }
        
    }),
    getters:{},
    actions:{
        async employeeList(){
            const {data} = await axios.get('http://localhost:5000/api/get-employees');
            console.log(data);
            this.employees = data;
            this.employees.reverse();
            
        },
        async createEmployee(){
            // console.log(this.employeeForm);
            const {data} = await axios.post('http://localhost:5000/api/add-employee',this.employeeForm);
            //   console.log(data);
              this.employees.push(data);
            //   this.todos.reverse();
            //   this.todoForm.title = null;
            
        },
        async deleteEmployee(id) {
            try {
                await axios.delete(`http://localhost:5000/api/delete-employee/${id}`);
        
                await this.employeeList();
            } catch (error) {
                console.error("Failed to delete employee:", error);
            }
        }
        
    }
})