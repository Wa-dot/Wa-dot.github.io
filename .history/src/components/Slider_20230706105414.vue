<template>
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

  <div class="carousel">
    <input type="radio" id="carousel-1" name="carousel[]" checked>
    <input type="radio" id="carousel-2" name="carousel[]">
    <input type="radio" id="carousel-3" name="carousel[]">
    <input type="radio" id="carousel-4" name="carousel[]">
    <input type="radio" id="carousel-5" name="carousel[]">
    <ul class="carousel__items">
      <li class="carousel__item">fdgsdfg</li>
      <li class="carousel__item">azertyu</li>
      <li class="carousel__item">mlkj</li>
      <li class="carousel__item">vcxdsf</li>
      <li class="carousel__item">kyhkuh</li>
    </ul>
    <div class="carousel__prev">
      <label for="carousel-1"></label>
      <label for="carousel-2"></label>
      <label for="carousel-3"></label>
      <label for="carousel-4"></label>
      <label for="carousel-5"></label>
    </div>
    <div class="carousel__next">
      <label for="carousel-1"></label>
      <label for="carousel-2"></label>
      <label for="carousel-3"></label>
      <label for="carousel-4"></label>
      <label for="carousel-5"></label>
    </div>
    <div class="carousel__nav">
      <label for="carousel-1"></label>
      <label for="carousel-2"></label>
      <label for="carousel-3"></label>
      <label for="carousel-4"></label>
      <label for="carousel-5"></label>
    </div>
  </div>
</template>

<script lang="ts">

export default {
  name: 'Slider',
  data() {
    return {
      nbOfProducts: 5,
      productId: ['slide-1'],
      productIdLink: ['#slide-1']
    }
  },
  methods: {
    parse(parametre: string, productNumber: number) {
      return 'product.product' + productNumber + '.' + parametre;
    },
  },
  mounted: function () {
    for (let i = 1; i < this.nbOfProducts; i++) {
      this.productId.push('slide-' + i);
      this.productIdLink.push('#slide-' + i);
    }
  }
}
</script>

<style lang="scss">
@import '../style/.variables.scss';

.text-box {
  color: $white;
}
.carousel{
  background-color: $grey;
}
@import 'carousel.scss';

@include carousel(5);
</style>
