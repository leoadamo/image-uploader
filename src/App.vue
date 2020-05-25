<template>
  <div>
    <AppHeader />
    <router-view />
  </div>
</template>

<script>
import AppHeader from '@/components/templates/AppHeader';

export default {
  name: 'App',
  components: {
    AppHeader
  }
};
</script>

<style></style>
