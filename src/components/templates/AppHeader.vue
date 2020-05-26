<template>
  <header class="ui secondary pointing menu">
    <router-link :to="{ name: 'home' }" class="active item">
      Image Uploader
    </router-link>

    <div class="right menu">
      <a v-if="!isLoggedIn" class="ui item" @click="login">
        Login
      </a>

      <div v-else class="row">
        <router-link :to="{ name: 'home' }" class="item">
          Gallery
        </router-link>

        <router-link :to="{ name: 'upload' }" class="item">
          Upload
        </router-link>

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
