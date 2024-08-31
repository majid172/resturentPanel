import { defineStore } from "pinia";
import axios from "axios";

export const useMenuStore = defineStore('menu',{
    state:()=>({
        menus:[],
        menuForm:{
            name:null,
            price:null,
            initial_quantity: null,
            ingredients: ["Dough","Cheese","Tomato Sauce"],
            category_id: null,
            rating: null,
        }
        
    }),
    getters:{},
    actions:{
        async createMenu()
        {
            
            const { data } = await axios.post('http://localhost:5000/api/add-menus', this.menuForm);
            this.menus.push(data);
            this.resetForm();
            
        },
        async fetchMenus(){
            const {data} = await axios.get('http://localhost:5000/api/get-menus');
            console.log(data);
            this.menus = data;
            this.menus.reverse();
        },
        
        async deleteMenu(id){
            await axios.delete(`http://localhost:5000/api/delete-menus/${id}`);
            await this.fetchMenus();
        }
        ,
        resetForm(){
            this.menuForm={
                name:null,
                price:null,
                initial_quantity: null,
                ingredients: null,
                category_id: null,
                rating: null,
            }
        }
    }
})