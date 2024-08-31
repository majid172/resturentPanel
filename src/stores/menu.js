import { defineStore } from "pinia";
import axios from "axios";

export const useMenuStore = defineStore('menu',{
    state:()=>({
        menus:[],
        
    }),
    getters:{},
    actions:{
        async fetchMenus(){
            const {data} = await axios.get('http://localhost:5000/api/get-menus');
            console.log(data);
            this.menus = data;
            this.menus.reverse();
        },
        async deleteMenu(id){
        console.log(id);
        
            await axios.delete(`http://localhost:5000/api/delete-menus/${id}`);
            await this.fetchMenus();
        }
        
    }
})