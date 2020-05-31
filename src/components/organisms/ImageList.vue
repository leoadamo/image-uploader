<template>
  <div v-if="isLoggedIn">
    <ul class="image-list" v-if="allImages.length">
      <li
        class="image-item"
        v-for="image in allImages"
        :key="image.id"
      >
        <AppImage :image="image" />
      </li>
    </ul>
    <p class="message" v-else>
      {{ allImages.length }} images Founded!
    </p>
  </div>
  <div v-else>
    <h2 class="app-title">Please, login to get start!</h2>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import AppImage from '@/components/atoms/AppImage';

export default {
  name: 'ImageList',
  components: {
    AppImage
  },
  computed: {
    ...mapGetters(['allImages', 'isLoggedIn'])
  },
  methods: {
    ...mapActions(['fetchImages'])
  },
  created() {
    this.fetchImages();
  }
};
</script>

<style scoped>
.image-list {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  margin: 0 15px;
  padding: 0;
}

.image-item {
  display: flex;
  align-items: stretch;
  list-style: none;
}

.message {
  width: 100%;
  height: 90vh;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
}

.app-title {
  width: 100%;
  height: 90vh;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
}
</style>
