<script setup lang="ts">
import NavBar from './components/NavBar.vue';
</script>


<style lang="scss">
@import './style/style.scss'
</style>


<template>
  <Navbar :navLinks="[
    {
      name: 'Home',
      link: '/home',
      dropdown: false,
    },

    { name: 'About', link: '/about', dropdown: false },

    {
      name: 'Contacts',
      link: '/contact',
      dropdown: true,
    },
    {
      name: 'Projects',
      link: '/projects',
      dropdown: true,
      dropdownLinks: [
        { name: 'C', link: '/pA', dropdown: false },
        { name: 'D', link: '/pB', dropdown: false },
      ],
    },
  ]" />

  <RouterView />
</template>
