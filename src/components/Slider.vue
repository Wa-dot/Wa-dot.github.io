<template>
    <div class="carousel">
        <div class="carousel-content">
            <div class="carousel-item" v-for="product in  nbOfProducts" :key="product">
                <router-link :to="`/products/` + product" class="btn">
                    <img :src=productsImg[product] v-bind:alt=$t(getTextAlt(product)) class="carouselPicture">
                    <h3 class="products-title">{{ $t(getText(product, '.name')) }}</h3>
                </router-link>
            </div>
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
            products: {},
            productsImg: [] as string[]
        }
    },
    beforeDestroy() {
        clearInterval(this.interval!);
    },
    mounted() {
        this.productsImg = images.products;
    },
    methods: {
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

.carousel-content {
    display: absolute;
    margin: 0% 15% 0% 15%;
    display: flex;
}


.carousel-item {
    width: 20%;
    margin: 15px;
    padding: 15px;
    align-items: center;
    justify-content: center;
}

.carouselPicture {
    width: 100%;
    height: auto;
    border-radius: 10px;
}

.products-title {
    text-align: center;
    text-decoration: none;
}
</style>