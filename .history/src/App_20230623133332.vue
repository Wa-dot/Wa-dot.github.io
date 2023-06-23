<template>
  <div id="app">
    <Navbar/>
  </div>
  <RouterView/>
</template>

<script lang="ts">
import Navbar from './components/Navbar.vue'

export default {
  name: 'App',
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body{
  overflow-x: hidden;
}
</style>