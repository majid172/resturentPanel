import { defineStore } from "pinia";
import axios from "axios";

export const useEmployeeStore = defineStore('employee',{
    state:()=>({
        employees:[],
        
    }),
    getters:{},
    actions:{
        async employeeList(){
            const {data} = await axios.get('http://localhost:5000/api/get-employees');
            console.log(data);
            this.employees = data;
            
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