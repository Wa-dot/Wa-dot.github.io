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
        <Slider :products="this.products"></Slider>
    </div>
</template>
  
<script lang="ts">
import Slider from '../components/Slider.vue'
import products from '../storage/products.json'

export default {
    name: 'ContactPage',
    components: {
        Slider
    },
    mounted(){}
        console.log(this.product)
    }
}
</script>
