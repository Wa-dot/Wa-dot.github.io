<template>
    <div class="carousel">
        <div class="carousel-content">
            <!-- <button class="carousel-button -prev" @click="prev"><svg width="50" height="50">
                    <circle cx="25" cy="25" r="20" stroke="black" stroke-width="3" fill="none" />
                    <line x1="40" y1="25" x2="10" y2="25" stroke="black" stroke-width="3" />
                    <line x1="20" y1="15" x2="10" y2="25" stroke="black" stroke-width="3" />
                    <line x1="20" y1="35" x2="10" y2="25" stroke="black" stroke-width="3" />
                </svg>
            </button> -->
            <div class="carousel-track" ref="track">
                <div class="carousel-item" v-for="product in  this.nbOfProducts" :key="product.id">
                    <img :src=this.productsImg[product] v-bind:alt=$t(this.getTextAlt(product)) class="carouselPicture">
                    <h3 class="products-title">{{ $t(this.getText(product, '.name')) }}</h3>
                </div>
            </div>
            <!-- <button class="carousel-button -next" @click="next"><svg width="50" height="50">
                    <circle cx="25" cy="25" r="20" stroke="black" stroke-width="3" fill="none" />
                    <line x1="10" y1="25" x2="40" y2="25" stroke="black" stroke-width="3" />
                    <line x1="30" y1="15" x2="40" y2="25" stroke="black" stroke-width="3" />
                    <line x1="30" y1="35" x2="40" y2="25" stroke="black" stroke-width="3" />
                </svg></button> -->
        </div>
    </div>
</template>
  
<script lang='ts'>
import { images, numberInList } from '../store'

export default {
    name: 'Slider',
    props: {
        products: Array
    },
    data() {
        return {
            currentIndex: 0,
            interval: null,
            nbOfProducts: numberInList.products,
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
@import "../style/style.scss";

.carousel {
    display: flex;
    align-items: center;
    justify-content: center;
    height: fit-content;
}


.carousel-content {
    display: absolute;
    margin: 0% 15% 0% 15%;
    display: flex;

}

.carousel-track {
    display: inline-flex;
    transition: transform 0.5s ease-in-out;
    width: fit-content;
}

.carousel-item {
    width: 20%;
    padding: 15px;
    align-items: center;
    justify-content: center;
}

.carouselPicture {
    width: 100%;
    height: auto;
}

.products-title {
    text-align: center;

}
</style>