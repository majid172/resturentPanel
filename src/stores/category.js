import { defineStore } from "pinia";
import axios from "axios"; 

export const useCategoryStore = defineStore('category', {
    state: () => ({
        categories: [],
        addCategoryForm: {
            category_name: null,
            description: null,
        },
    }),
    getters: {},
    actions: {
        async fetchCategory() {
            try {
                const { data } = await axios.get('http://localhost:4000/api/get-category');
                this.categories = data;
            } catch (error) {
                console.error('Error fetching category', error);
            }
        },
        async addCategory() {
            const { data } = await axios.post('http://localhost:4000/api/add-category', this.addCategoryForm);
                console.log('hello');
                
                this.categories.push(data);
                
                // Reset the form after successful submission
                this.addCategoryForm.category_name = null;
               
                
                console.log('Category added successfully:', data);
        },
    },
});
