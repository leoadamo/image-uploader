<template>
  <ul class="image-list">
    <li
      class="image-item"
      v-for="image in allImages"
      :key="image.id"
    >
      <AppImage :image="image" />
    </li>
  </ul>
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
    ...mapGetters(['allImages'])
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
</style>
