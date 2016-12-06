import api from '../../api'
import * as types from '../mutation-types'

const state = {
  user: JSON.parse(sessionStorage.getItem('user')) || {},
}

const mutations = {
  [USER_SIGNIN](state, user) {
    sessionStorage.setItem('user', JSON.stringify(user))
    Object.assign(state, user)
  },
  [USER_SIGNOUT](state) {
    sessionStorage.removeItem('user')
    Object.keys(state).forEach(k => Vue.delete(state, k))
  }
}

const actions = {
  [types.USER_SIGNIN]({ commit }, user) {
    commit(USER_SIGNIN, user)
  },
  [types.USER_SIGNOUT]({ commit }) {
    commit(USER_SIGNOUT)
  }
}