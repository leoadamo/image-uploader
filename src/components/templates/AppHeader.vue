<template>
  <header class="ui secondary pointing menu">
    <a href="/" class="active item">Image Uploader</a>

    <div class="right menu">
      <a v-if="!isLoggedIn" class="ui item" @click="login">
        Login
      </a>

      <div v-else class="row">
        <a class="item">
          Gallery
        </a>
        <a class="item">
          Upload
        </a>
        <a class="item" @click="logout">
          Logout
        </a>
      </div>
    </div>
  </header>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
  name: 'AppHeader',
  methods: {
    ...mapActions(['login', 'logout'])
  },
  computed: {
    ...mapGetters(['isLoggedIn'])
  }
};
</script>

<style scoped>
.row {
  display: flex;
  flex-direction: row;
}
</style>
