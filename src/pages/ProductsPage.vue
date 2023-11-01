<template>
    <div class="container">
        <h1 class="title">
            {{ $t("products.header") }}
        </h1>
        <article class="card" v-for="products in nbOfProducts" :key="products">
            <div class="card-content">
                <img v-if="(products % 2) == 1" :src=productsImg[products] v-bind:alt=$t(getTextAlt(products))
                    class="profile-image-left">
                <div class="profile-info"
                    :style="((products % 2) == 0) ? { 'text-align': 'right' } : { 'text-align': 'left' }">
                    <h3 :style="((products % 2) == 0) ? { 'text-align': 'right' } : { 'text-align': 'left' }">{{
                        $t(getText(products, '.name')) }} : {{ $t(getText(products, '.subtitle')) }}</h3>
                    <p class="category">{{ $t(getText(products, '.category')) }}</p>
                    <img :src=productsImg[products] v-bind:alt=$t(getTextAlt(products)) class="little-media">
                    <p class="description">{{ $t(getText(products, '.description')) }}</p>
                </div>
                <img v-if="(products % 2 == 0)" :src=productsImg[products] v-bind:alt=$t(getTextAlt(products))
                    class="profile-image-right">
            </div>
        </article>
    </div>
</template>
  
<script lang="ts">
import { images, numberInList } from '../store'
export default {
    data() {
        return {
            nbOfProducts: numberInList.products,
            productsImg: images.products,
            windowWidth: window.innerWidth,
            rightPosition: true,
            productId: [] as string | string[]

        }
    },
    methods: {
        getText(productsNumber: number, value: string) {
            return 'products.product' + String(productsNumber) + value;
        },
        getTextAlt(productsNumber: number) {
            return 'products.product' + String(productsNumber) + '.alt';
        }
    },
    mounted() {
        this.productId = 'product' + this.$route.params.id;
    }

}

</script>
  
<style lang="scss">
@import "../style/style.scss";

.little-media {
    display: none;
}



.profile-image-right {
    margin-left: 20px;
}

.profile-image-left {
    margin-right: 20px;
}

.category {
    color: $grey;
    font-size: small;
}

.description {
    padding-top: 20px;
    text-align: justify;
}

@media (max-width: 999px) {
    .card-content {
        padding: 20px 5px 20px 5px;
        text-align: center;
    }

    .profile-info {
        position: flex;
        text-align: left;
    }

    .little-media {
        text-align: center;
        margin: auto;
        display: flex;
        width: max-content;
    }

    .profile-image-right,
    .profile-image-left {
        display: none;
    }

    .card {
        margin: 5% 5% 15px 5%;
    }
}
</style>
  