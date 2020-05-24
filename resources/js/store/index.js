import Vue from 'vue'
import Vuex from 'vuex'
import auth from './auth'
import categories from './categories'
import home from './home'
import social from './social'
import cart from './cart'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    //
  },

  getters: {
    //
  },

  mutations: {
    //
  },

  actions: {
    //
  },

  modules: {
    auth,
    categories,
    home,
    social,
    cart
  }
})
