const state = {
  images: []
};

const getters = {
  allImages: state => state.images
};

const actions = {
  fetchImages() {}
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
