<template>
    coucou
    coucou
    coucou
    coucou
    coucou
    coucou
    coucou
    coucou
    coucou
    coucou
    <div id="app">
        <h1>Carrousel de produits</h1>
        <Slider :products="products"></Slider>
    </div>
</template>
  
<script lang="ts">
import Slider from '../components/Slider.vue'

export default {
    name: 'ContactPage',
    components: {
        Slider
    },
    data: {
        products: []
    },
    mounted() {
        fetch('message.json')
            .then(response => response.json())
            .then(data => {
                this.products = data.message;
            });
    }
}
</script>
