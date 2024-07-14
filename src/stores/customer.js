import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import axios from 'axios'

export const useCustomerStore = defineStore('customer', {
  state: () => ({
    users: [],
  
  }),
  getters: {},
  actions: {
    async fetchUsers() {
      const {data} = await axios.get('https://dummyjson.com/users');
      this.users = data.users;
      console.log(data);
    },
  }
})
