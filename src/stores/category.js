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
                const { data } = await axios.get('http://localhost:6000/api/get-category');
                console.log(data);
                this.categories = data;
                
                
            } catch (error) {
                console.error('Error fetching category:', error);
            }
        },
        async addCategory() {
            try {
                const { data } = await axios.post('http://localhost:6000/api/add-category', this.addCategoryForm);
                this.categories.push(data);
                this.addCategoryForm.category_name = null;
                // this.addCategoryForm.description = null;
                console.log(data);
            } catch (error) {
                console.error('Error adding category:', error);
            }
        },
    },
});
