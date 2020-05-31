<template>
  <div class="dropper">
    <input
      type="file"
      multiple
      accept="image/*"
      @change="uploadImages($event.target.files)"
    />
    <span>Drag files here...</span>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: 'UploadForm',
  methods: {
    ...mapActions(['uploadImages'])
  }
};
</script>

<style scoped>
.dropper {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 20vh;
  border: 2px dashed #1c1c1c;
  border-radius: 5px;
  position: relative;
}

.dropper:hover {
  background-color: #eee;
}

input {
  width: 100%;
  height: 20vh;
  position: absolute;
  opacity: 0;
  cursor: pointer;
}
</style>
