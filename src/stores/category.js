import { ref,computed } from "vue";
import { defineStore } from "pinia";
import axios from "axios"; 

export const useCategoryStore = defineStore('category',{
    state: ()=>({
        categories:[],
        addCategoryForm:{
            category : null,
            description : null
        }
    }),
    getters:{},
    actions:{
        async fetchCategory(){
            try{
                const {data} = await axios.get('./src/assets/api/category.json');
                console.log(data);
                this.categories = data.categories;
            }catch(error)
            {
                console.error('Error fetching category:', error);
            }
        },
        async addCategory(){
        console.log(this.addCategoryForm);
        try{
        const {data} = await axios.post('./src/assets/api/category',this.addCategoryForm);
            this.categories.push(data);
            this.addCategoryForm.category = null;
            this.addCategoryForm.description = null;
            console.log(data);
        }
        catch(error){
        console.log(error);
        }
            
        }
    }
})