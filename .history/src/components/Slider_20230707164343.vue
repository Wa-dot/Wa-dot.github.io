<!-- <template> -->
  <!-- <div class="slider-container">
    <div class="slider">
      <div class="slides">
        <div class="text-container">
          <div class="text-box" v-for="items in this.nbOfProducts" :id=items>
            <h3>{{ $t(this.parse("name", items)) }}</h3>
            <p class="slide__text">
              {{ $t(this.parse("description", items)) }}
            </p>
            <a class="slide__prev" href="{{'#' + items++ }}" title="Next"></a>
            <a class="slide__next" href="{{'#' + items-- }}" title="Next"></a>

          </div>
        </div>
        <div v-for="items in this.nbOfProducts" :id=this.productId[items] class="slide">
          <span class="slide__text">{{ $t(this.parse("name", items)) }}</span>
          <a class="slide__prev" :href='this.productIdLink[items + 1]' title="Prev"></a>
          <a class="slide__next" :href='this.productIdLink[items - 1]' title="Next"></a>
        </div>
      </div>
      <div class="slider__nav">
        <a class="slider__navlink" href="#slides__1"></a>
        <a class="slider__navlink" href="#slides__2"></a>
        <a class="slider__navlink" href="#slides__3"></a>
        <a class="slider__navlink" href="#slides__4"></a>
      </div>
    </div>
  </div> -->
<template>
    <div id="app">
        <h1>Carrousel de produits</h1>
        <product-carousel :products="products"></product-carousel>
    </div>
</template>

<script>
import ProductCarousel from './components/ProductCarousel.vue'

export default {
    name: 'App',
    components: {
        ProductCarousel
    },
    data() {
        return {
            products: [
                {
                    id: 1,
                    name: 'Livre',
                    description: 'Un livre passionnant sur le développement web',
                    image: 'https://images.unsplash.com/photo-1512820790803-83ca734da794?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Ym9va3N8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
                },
                {
                    id: 2,
                    name: 'Ordinateur',
                    description: 'Un ordinateur performant pour coder en toute sérénité',
                    image: 'https://images.unsplash.com/photo-1517430816045-df4b7de11d1d?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bGFwdG9wfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
                },
                {
                    id: 3,
                    name: 'Casque',
                    description: 'Un casque audio pour écouter de la musique en travaillant',
                    image: 'https://images.unsplash.com/photo-1586953208448-b95a79798e8a?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aGVhZHBob25lc3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
                },
                {
                    id: 4,
                    name: 'Café',
                    description: 'Un café chaud pour se réveiller le matin',
                    image: 'https://images.unsplash.com/photo-1511920170033-f8396924c348?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Y29mZmVlfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
                }
            ]
        }
    }
}
</script>
