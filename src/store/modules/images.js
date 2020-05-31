import api from '../../api/imgur';
import router from '../../router';

const state = {
  images: [],
  status: null
};

const getters = {
  allImages: state => state.images
};

const actions = {
  async fetchImages({ rootState, commit }) {
    const { token } = rootState.auth;
    const { data } = await api.fetchImages(token);
    commit('SET_IMAGES', data.data);
  },
  async uploadImages({ rootState }, images) {
    const { token } = rootState.auth;
    await api.uploadImages(images, token);
    router.push('/');
  }
};

const mutations = {
  SET_IMAGES: (state, images) => {
    state.images = images;
  }
};

export default {
  state,
  getters,
  actions,
  mutations
};
