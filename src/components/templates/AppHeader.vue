<template>
  <header class="ui secondary pointing menu">
    <a href="/" class="active item">Image Uploader</a>

    <div class="right menu">
      <a href="#" class="ui item" @click="login">Login</a>
    </div>
  </header>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
  name: 'AppHeader',
  methods: {
    ...mapActions(['login'])
  },
  computed: {
    ...mapGetters(['isLoggedIn'])
  }
};
</script>

<style></style>
