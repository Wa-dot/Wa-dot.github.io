<template>
    <div class="carousel">
        <div class="carousel-content">
            <div class="carousel-track" ref="track">
                <div class="carousel-item" v-for="product in  this.nbOfProducts " :key="product.id">
                    <img :src=this.productsImg[product] v-bind:alt=$t(this.getTextAlt(product))>
                    <h3>{{ $t(this.getText(product, '.name')) }}</h3>
                    <p>{{ $t(this.getText(product, '.description')) }}</p>
                </div>
            </div>
            <button class="carousel-button carousel-button--prev" @click="prev">Précédent</button>
            <button class="carousel-button carousel-button--next" @click="next">Suivant</button>
            <div class="carousel-dots">
                <button class="carousel-dot" v-for="( product, index ) in  products " :key="product.id"
                    @click="goTo(index)" :class="{ 'carousel-dot--active': index === currentIndex }"></button>
            </div>
        </div>
    </div>
</template>

<script lang='ts'>
import {images} from './store'

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
            if (this.currentIndex >= this.nbOfProducts / 3) {
                this.currentIndex = 0;
            }
            this.moveCarousel();
        },
        prev() {
            this.currentIndex -= 1;
            if (this.currentIndex < 0) {
                this.currentIndex = (this.nbOfProducts / 3) - 1;
            }
            this.moveCarousel();
        },
        goTo(index) {
            this.currentIndex = index;
            this.moveCarousel();
        },
        moveCarousel() {
            const track = this.$refs.track;
            track.style.transform = `translateX(-${this.currentIndex * 300}%)`;
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
.carousel{
    display: flex;
    align-items: center;
    justify-content: center;
    height: fit-content;
}


.carousel-content {
    overflow: hidden;
    border: 1px solid black;
    margin: 10px;
    height: 20%;
    width: 50%;
    border-radius: 7px;
}

.carousel-button {
    position: absolute;
    top: calc(50% - 20px);
}

.carousel-button--prev {
    position:initial
}

.carousel-button--next {
    position: initial;

}

.carousel-track {
    display: flex;
    transition: transform 0.5s ease-in-out;
}

.carousel-item {
    flex: none;
    width: calc(100% / 3);
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
}
</style>
