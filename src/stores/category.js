import { ref,computed } from "vue";
import { defineStore } from "pinia";
import axios from "axios"; 

export const useCategoryStore = defineStore('category',{
    state: ()=>({
        categories:[],
    }),
    getters:{},
    actions:{
        async fetchCategory(){
            try{
                const {data} = await axios.get('./src/assets/api/category.json');
                console.log(data);
                this.categories = data.categories;
            }catch(error){
            console.error('Error fetching category:', error);
            }
        },
    }
})