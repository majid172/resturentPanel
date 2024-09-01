import { defineStore } from "pinia";
import axios from "axios";

export const useOrderStore = defineStore('order', {
    state: () => ({
        orders: [],
        orderForm: {
            menuItems: [
                { menu: "", quantity: 1 }
            ],
            // menuItems: [
            //     { menu: [{
            //         id:''
            //     }], quantity: 1 }
            // ],
            customerName: "",
            orderDate: "",
            status: "",
            quantity: "",
            totalPrice: "",
        }
    }),
    getters: {},
    actions: {
        async orderList() {
            const { data } = await axios.get('http://localhost:5000/api/get-order');
            this.orders = data;
            console.log(data);
        },
        
        async createOrder() {
            try {
                console.log(this.orderForm.menuItems.menu.id);
                
                // const { data } = await axios.post('http://localhost:5000/api/add-order', this.orderForm);
                // console.log(data);
                // this.orders.push(data);
                // this.orders.reverse();
                // this.resetOrderForm();
            } catch (error) {
                console.error("Error creating order:", error);
            }
        },
        
        resetOrderForm() {
            this.orderForm = {
                order_id: "",
                menuItems: [],
                totalPrice: "",
                customerName: "",
                orderDate: "",
                status: ""
            };
        }
    }
});
