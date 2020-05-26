import { router } from '../../router/';
import api from '../../api/imgur';
import qs from 'qs';

const state = {
  token: window.localStorage.getItem('imgur_token')
};

const getters = {
  isLoggedIn: state => !!state.token
};

const actions = {
  login: () => {
    api.login();
  },
  finalizeLogin({ commit }, hash) {
    const query = qs.parse(hash.replace('#', ''));

    commit('SET_TOKEN', query.access_token);
    window.localStorage.setItem('imgur_token', query.access_token);
    router.push('/');
  },
  logout: ({ commit }) => {
    commit('SET_TOKEN', null);
    window.localStorage.removeItem('imgur_token');
  }
};

const mutations = {
  SET_TOKEN: (state, token) => {
    state.token = token;
  }
};

export default {
  state,
  getters,
  actions,
  mutations
};
