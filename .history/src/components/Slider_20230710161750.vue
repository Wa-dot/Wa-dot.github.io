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
    <div class="carousel">
        <div class="carousel-content">
            <button class="carousel-button -prev" @click="prev"><svg width="50" height="50">
                    <circle cx="25" cy="25" r="20" stroke="black" stroke-width="3" fill="none" />
                    <line x1="40" y1="25" x2="10" y2="25" stroke="black" stroke-width="3" />
                    <line x1="20" y1="15" x2="10" y2="25" stroke="black" stroke-width="3" />
                    <line x1="20" y1="35" x2="10" y2="25" stroke="black" stroke-width="3" />
                </svg>
            </button>
            <div class="carousel-track" ref="track">
                <div class="carousel-item" v-for="product in  this.nbOfProducts " :key="product.id">
                    <img :src=this.productsImg[product] v-bind:alt=$t(this.getTextAlt(product))>
                    <h3>{{ $t(this.getText(product, '.name')) }}</h3>
                </div>
            </div>
            <button class="carousel-button -next" @click="next"><svg width="50" height="50">
                    <circle cx="25" cy="25" r="20" stroke="black" stroke-width="3" fill="none" />
                    <line x1="20" y1="25" x2="40" y2="25" stroke="black" stroke-width="3" />
                    <line x1="30" y1="30" x2="40" y2="25" stroke="black" stroke-width="3" />
                    <line x1="30" y1="70" x2="40" y2="25" stroke="black" stroke-width="3" />
                </svg></button>
        </div>
    </div>
</template>
  
<script lang='ts'>
import { images } from './store'

export default {
    name: 'Slider',
    props: {
        products: Array
    },
    data() {
        return {
            currentIndex: 0,
            interval: null,
            nbOfProducts: 4,
            productsImg: [],
            products: {}
        }
    },
    beforeDestroy() {
        clearInterval(this.interval);
    },
    mounted() {
        this.productsImg = images.products;
    },
    methods: {
        next() {
            this.currentIndex += 1;
            if (this.currentIndex >= this.nbOfProducts - 2) {
                this.currentIndex = 0;
            }
            this.moveCarousel();
        },
        prev() {
            this.currentIndex -= 1;
            if (this.currentIndex < 0) {
                this.currentIndex = this.nbOfProducts - 3;
            }
            this.moveCarousel();
        },
        goTo(index) {
            this.currentIndex = index;
            this.moveCarousel();
        },
        moveCarousel() {
            const track = this.$refs.track;
            track.style.transform = `translateX(-${this.currentIndex * 100 / 3}%)`;
        },
        getText(productNumber: number, value: string) {
            return 'products.product' + String(productNumber) + value;
        },
        getTextAlt(productNumber: number) {
            return 'products.product' + String(productNumber) + '.img.alt';
        }
    }
}
</script>
  
<style lang="scss">
@import "./Slider.scss";
</style>
  