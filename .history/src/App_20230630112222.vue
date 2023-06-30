<template>
  <div id="app">
    <Navbar />
  </div>
  <RouterView />
</template>

<script lang="ts">

export default {
  name: 'App',
  components: {
    Navbar,
  },
}
</script>
<style lang="scss">
@import './style/style.scss';
</style>