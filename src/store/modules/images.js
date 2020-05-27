import api from '../../api/imgur';

const state = {
  images: []
};

const getters = {
  allImages: state => state.images
};

const actions = {
  async fetchImages({ rootState }) {
    const { token } = rootState.auth;
    const response = await api.fetchImages(token);
    console.log(response);
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
