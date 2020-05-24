import axios from 'axios'

export default {
  namespaced: true,

state: {
    home_sections: [],
    home_slides: [],
    home_products: []
  },


getters: {

    home_sections (state) {
      return state.home_sections
    },

    home_slides (state) {
      return state.home_slides
    },

    home_products (state) {
      return state.home_products
    },

  },


mutations: {

    SET_HOME_SECTIONS (state, home_sections) {
      state.home_sections = home_sections
    },

    SET_HOME_SLIDES (state, home_slides) {
      state.home_slides = home_slides
    },

    SET_HOME_PRODUCTS (state, home_products) {
      state.home_products = home_products
    },

  },


actions: {

    async getHomeSection({ commit }) {
      let response = await axios.get('/api/categories/home-section')
      commit('SET_HOME_SECTIONS', response.data.data)

      return response
    },

    async getHomeSlide({ commit }) {
      let response = await axios.get('/api/home-slides')
      commit('SET_HOME_SLIDES', response.data.homeslides)

      return response
    },

    async getHomeProducts({ commit }) {
      let response = await axios.get('/api/products/get-home-products')
      commit('SET_HOME_PRODUCTS', response.data)
      return response
    }

  }

}
