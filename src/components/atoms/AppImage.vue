<template>
  <img
    class="app-image"
    :src="image.link"
    :alt="image.name"
  />
</template>

<script>
export default {
  name: 'AppImage',
  props: {
    image: {
      type: Object
    }
  }
};
</script>

<style scoped>
.app-image {
  display: block;
  width: 100%;
}
</style>
