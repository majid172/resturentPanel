import { defineStore } from "pinia";
import axios from "axios"; 

export const useCategoryStore = defineStore('category', {
    state: () => ({
        categories: [],
        addCategoryForm: {
            category_name: null,
            // description: null,
        },
    }),
    getters: {},
    actions: {
        async fetchCategory() {
            try {
                const { data } = await axios.get('http://localhost:5000/api/get-category');
                this.categories = data;
                console.log(data);
                
            } catch (error) {
                console.error('Error fetching category', error);
            }
        },
        async addCategory() {
            const { data } = await axios.post('http://localhost:5000/api/add-category', this.addCategoryForm);
            this.categories.push(data);
            this.resetForm();
        },
        
        async deleteCategory(id){
            try {
                await axios.delete(`http://localhost:5000/api/delete-category/${id}`);
                await this.fetchCategory();
            } catch (error) {
                console.error("Failed to delete employee:", error);
            }
            
        },
        resetForm(){
            this.addCategoryForm={
                category_name: null,
            }
        }
        
    },
});
