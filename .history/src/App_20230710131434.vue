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
  data() {
    return {
      messages: []
    }
  },
  mounted() {
    fetch('messages.json')
      .then(response => response.json())
      .then(data => {
        this.messages = data.messages;
      });
  }
}
</script>
<style lang="scss">

</style>