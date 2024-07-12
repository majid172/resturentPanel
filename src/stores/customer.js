import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import axios from 'axios'

export const useCustomerStore = defineStore('customer', {
  state: () => ({
    users: [],
    // poster: "https://m.media-amazon.com/images/M/MV5BNTIwMjE2Mjc1MF5BMl5BanBnXkFtZTYwNzI0OTI3._V1_SX300.jpg"
  }),
  getters: {},
  actions: {
    async fetchUsers() {
      try {
        const { data } = await axios.get('https://jsonplaceholder.typicode.com/todos');
        this.users = data;
        console.log(data);
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    },
  }
})
