<template>
  <!-- <div class="slider-container">
    <div class="slider">
      <div class="slides"> -->
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
  <!-- <div v-for="items in this.nbOfProducts" :id=this.productId[items] class="slide">
          <span class="slide__text">{{ $t(this.parse("name", items)) }}</span>
          <a class="slide__prev" :href='this.productIdLink[items+1]' title="Prev"></a>
          <a class="slide__next" :href='this.productIdLink[items-1]' title="Next"></a>
        </div>
      </div>
      <div class="slider__nav">
        <a class="slider__navlink" href="#slides__1"></a>
        <a class="slider__navlink" href="#slides__2"></a>
        <a class="slider__navlink" href="#slides__3"></a>
        <a class="slider__navlink" href="#slides__4"></a>
      </div> -->
  <!-- </div>
  </div> -->
</template>

<script lang="ts">

export default {
  name: 'Slider',
  data() {
    return {
      nbOfProducts: 3,
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


// --------------


.slider-container {
  background: linear-gradient(149deg, rgb(247, 0, 255) 0%, rgb(255, 145, 0) 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
}

.slider {
  width: 100%;
  max-width: 600px;
  height: 400px;
  margin: 20px;
  text-align: center;
  border-radius: 20px;
  overflow: hidden;
  position: relative;
  width: 500px;
}

.slides {
  display: flex;
  overflow-x: scroll;
  position: relative;
  scroll-behavior: smooth;
  scroll-snap-type: x mandatory;
}

.slide:nth-of-type(even) {
  background-color: rgb(250, 246, 212);
}

.slide {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  width: 100%;
  height: 400px;
  margin-right: 0px;
  box-sizing: border-box;
  background: white;
  transform-origin: center center;
  transform: scale(1);
  scroll-snap-align: center;
}

.slide__text {
  font-size: 40px;
  font-weight: bold;
  font-family: sans-serif;
}

.slide a {
  background: none;
  border: none;
}

a.slide__prev,
.slider::before {
  transform: rotate(135deg);
  -webkit-transform: rotate(135deg);
  left: 5%;
}

a.slide__next,
.slider::after {
  transform: rotate(-45deg);
  -webkit-transform: rotate(-45deg);
  right: 5%;
}

.slider::before,
.slider::after,
.slide__prev,
.slide__next {
  position: absolute;
  top: 48%;
  width: 35px;
  height: 35px;
  border: solid black;
  border-width: 0 4px 4px 0;
  padding: 3px;
  box-sizing: border-box;
}

.slider::before,
.slider::after {
  content: '';
  z-index: 1;
  background: none;
  pointer-events: none;
}

.slider__nav {
  box-sizing: border-box;
  position: absolute;
  bottom: 5%;
  left: 50%;
  width: 200px;
  margin-left: -100px;
  text-align: center;
}

.slider__navlink {
  display: inline-block;
  height: 15px;
  width: 15px;
  border-radius: 50%;
  background-color: black;
  margin: 0 10px 0 10px;
}



.read-article {
  position: absolute;
  top: 10px;
  left: 10px;
  z-index: 999;
  color: #000;
  background: white;
  padding: 10px 20px;
  border-radius: 10px;
  font-family: arial;
  text-decoration: none;
  box-shadow: rgb(50 50 93 / 25%) 0 0 100px -20px, rgb(0 0 0 / 30%) 0 0 60px -15px;
}

.read-article:hover {
  background: #d5d5d5;
  box-shadow: rgb(50 50 93 / 25%) 0 0 100px -20px, rgb(0 0 0 / 30%) 0 0 60px 0px;
}

iframe[sandbox] .read-article {
  display: none;
}
</style>