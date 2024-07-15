import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import axios from 'axios'

export const useCustomerStore = defineStore('customer', {
  state: () => ({
    users: [],
    currentPage: 1,
    totalPages: 1,
    itemsPerPage: 15,  // Define the number of items per page
  }),
  getters: {
    paginatedUsers(state) {
      return state.users.slice(
        (state.currentPage - 1) * state.itemsPerPage,
        state.currentPage * state.itemsPerPage
      );
    },
  },
  actions: {
    async fetchUsers(page = 1) {
      try {
        const { data } = await axios.get('https://dummyjson.com/users', {
          params: {
            page,
            limit: this.itemsPerPage,
          },
        });
        this.users = data.users;
        this.totalPages = Math.ceil(data.total / this.itemsPerPage);
        this.currentPage = page;
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    },
    setPage(page) {
      if (page > 0 && page <= this.totalPages) {
        this.fetchUsers(page);
      }
    },
  },
});
