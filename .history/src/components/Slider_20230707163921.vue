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
        <button class="carousel-button carousel-button--prev" @click="prev">Précédent</button>
        <div class="carousel-track" ref="track">
            <div class="carousel-item" v-for="product in products" :key="this.product.id">
                <img :src="product.image" :alt="this.product.name">
                <h3>{{ this.product.name }}</h3>
                <p>{{ this.product.description }}</p>
            </div>
        </div>
        <button class="carousel-button carousel-button--next" @click="next">Suivant</button>
        <div class="carousel-dots">
            <button class="carousel-dot" v-for="(product, index) in products" :key="product.id" @click="goTo(index)"
                :class="{ 'carousel-dot--active': index === currentIndex }"></button>
        </div>
    </div>
</template>
  
<script lang="ts">
export default {
    name: 'Slider',
    props: {
        products: Array
    },
    data() {
        return {
            currentIndex: 0,
            interval: null
        }
    },
    mounted() {
        this.startCarousel();
    },
    beforeDestroy() {
        clearInterval(this.interval);
    },
    methods: {
        startCarousel() {
            this.interval = setInterval(() => {
                this.next();
            }, 3000);
        },
        next() {
            this.currentIndex += 1;
            if (this.currentIndex >= this.products.length) {
                this.currentIndex = 0;
            }
            this.moveCarousel();
        },
        prev() {
            this.currentIndex -= 1;
            if (this.currentIndex < 0) {
                this.currentIndex = this.products.length - 1;
            }
            this.moveCarousel();
        },
        goTo(index) {
            this.currentIndex = index;
            this.moveCarousel();
        },
        moveCarousel() {
            const track = this.$refs.track;
            track.style.transform = `translateX(-${this.currentIndex * 100}%)`;
        }
    }
}
</script>
  
<style lang="scss">
html {
    color: red;
}
.carousel {
    position: relative;
    overflow: hidden;
}

.carousel-button {
    position: absolute;
    top: calc(50% - 20px);
}

.carousel-button--prev {
    left: 10px;
}

.carousel-button--next {
    right: 10px;
}

.carousel-track {
    display: flex;
    transition: transform 0.5s ease-in-out;
}

.carousel-item {
    flex: none;
    width: 100%;
}

.carousel-dots {
    display: flex;
    justify-content: center;
}

.carousel-dot {
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background-color: lightgray;
}

.carousel-dot--active {
    background-color: black;
}</style>
  