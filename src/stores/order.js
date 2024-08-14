import { defineStore } from "pinia";
import axios from "axios";

export const useOrderStore = defineStore('order',{
    state:()=>({
        orders:[]
    }),
    getters:{},
    actions:{
        async orderList(){
            const {data}= await axios.get('http://localhost:4000/api/get-order');
            this.orders = data;
            console.log(data);
            
        }
    }
})