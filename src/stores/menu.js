import { defineStore } from "pinia";
import axios from "axios";

export const useMenuStore = defineStore('menu',{
    state:()=>({
        menus:[],
        
    }),
    getters:{},
    actions:{
        async fetchMenus(){
            const {data} = await axios.get('http://localhost:4000/api/get-menus');
            console.log(data);
            this.menus = data;
            
        }
    }
})