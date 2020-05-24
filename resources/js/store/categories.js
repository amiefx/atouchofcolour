import axios from 'axios'

export default {
  namespaced: true,

  state: {
    categories: []
  },

  getters: {
    categories (state) {
        return state.categories
      },
  },

  mutations: {
    SET_CATEGORIES (state, categories) {
        state.categories = categories
      },
  },

  actions: {
    async getCategories({ commit }) {
        let response = await axios.get('/api/categories')
        commit('SET_CATEGORIES', response.data.data)
    }
  }

}
