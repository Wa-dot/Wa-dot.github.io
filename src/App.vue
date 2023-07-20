<template>
  <head>
  </head>
  <div id="app">
    <Navbar />
  </div>
  <div id="content">
    <RouterView />
  </div>
  <FootBar />
</template>

<script lang="ts">
import Navbar from './components/Navbar.vue'
import FootBar from './components/FootBar.vue'

export default {
  name: 'App',
  components: {
    Navbar,
    FootBar
  },
}
</script>

<style lang="scss">
#content{
  margin-top: 3%;
}

@media screen and (max-width: 768px) {
  #content{
  margin-top: 5%;
}
}
</style>