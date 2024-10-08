import { defineStore } from "pinia";
import axios from "axios";

export const useOrderStore = defineStore('order', {
    state: () => ({
        orders: [],
        orderForm: {
            menuItems: [
                {
                    menu: "",        // The ID or name of the menu item
                    quantity: ""     // The quantity of this specific menu item
                }
            ],
            customerName: "",
            orderDate: "",
            status: "",
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
                // console.log(this.orderForm.menuItems);
            
                const { data } = await axios.post('http://localhost:5000/api/add-order', this.orderForm);
                // console.log(data);
                this.orders.push(data);
                this.orders.reverse();
                this.resetOrderForm();
            } catch (error) {
                console.error("Error creating order:", error);
            }
        },
        async deleteOrder(id){
            
            try {
                await axios.delete(`http://localhost:5000/api/delete-order/${id}`);
                await this.orderList();
                } catch (error) {
                    console.error("Failed to delete employee:", error);
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
