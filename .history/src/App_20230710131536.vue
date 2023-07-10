<template>
  <head>
  </head>
  <div id="app">
    <Navbar />
  </div>
  <RouterView />
</template>

<script lang="ts">
import Navbar from './components/Navbar.vue'

export default {
  name: 'App',
  components: {
    Navbar,
  },
}
</script>
<style lang="scss">

</style>