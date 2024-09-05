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
        
        async editMenu(id)
        {
            const {data} = await axios.get(`http://localhost:5000/api/get-menu/${id}`);
            this.menuForm.name = data.name;
            this.menuForm.price = data.price;
            this.menuForm.rating = data.rating;
            this.menuForm.category_id = data.category_id.category_id;
            this.menuForm.initial_quantity = data.initial_quantity;
            console.log(data);
            
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