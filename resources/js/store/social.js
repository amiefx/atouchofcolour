import axios from 'axios'

export default {
  namespaced: true,

state: {
    social: [],
  },


getters: {

    social (state) {
      return state.social
    },

  },


mutations: {

    SET_SOCIAL (state, social) {
      state.social = social
    },

  },


actions: {

    async getSocial({ commit }) {
      let response = await axios.get('/api/social')
      commit('SET_SOCIAL', response.data.social)
    }

  }

}
