<template>
  <div id="app">
    <Navbar />
  </div>
  <div id="content">
    <RouterView />
  </div>
  <FootBar />
</template>

<script lang="ts">
import FootBar from './components/FootBar.vue';
import Navbar from './components/NavBar.vue';
import { useI18n } from 'vue-i18n';

export default {
  name: 'App',
  components: {
    Navbar,
    FootBar
  },
  setup() {
    // use global scope
    const { t, locale } = useI18n();
    return { t, locale }
  }
}
</script>

<style lang="scss">
@import "./style/style.scss"
</style>