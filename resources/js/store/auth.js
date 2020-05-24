import axios from 'axios'

export default {
  namespaced: true,

  state: {
    token: null,
    user: null,
  },

  getters: {
    authenticated (state) {

        if (state.user) {
            return state.token && state.user.id != null
        } else {
            return false;
        }

    },

    admin (state) {
        if (state.user) {
            return state.token && state.user.role == 'Administrator'
        } else {
            return false;
        }

    },

    user (state) {
      return state.user
    }
  },

  mutations: {
    SET_TOKEN (state, token) {
      state.token = token
    },

    SET_USER (state, data) {
      state.user = data
    }
  },

  actions: {
    async signIn ({ dispatch }, credentials) {
      let response = await axios.post('/api/login', credentials)

      return dispatch('attempt', response.data.token)
    },

    async attempt ({ commit, state }, token) {
      if (token) {
        commit('SET_TOKEN', token)
      }

      if (!state.token) {
        return
      }

      try {
        let response = await axios.get('/api/me')
        commit('SET_USER', response.data.data)
      } catch (e) {
        commit('SET_TOKEN', null)
        commit('SET_USER', null)
      }
    },

    signOut ({ commit }) {
      return axios.post('/api/logout').then(() => {
        commit('SET_TOKEN', null)
        commit('SET_USER', null)
      })
    }
  }
}
