<template>
    <div>
        <div class="container">
            <article class="card" v-for="products in (this.nbOfProducts)" :key="products.name">
                <div class="card-content" :ref="products">
                    <img v-if="(products % 2) == 1" :src=this.productsImg[products] v-bind:alt=$t(this.getTextAlt(products))
                        class="profile-image-left">
                    <div v-if="!rightPosition" class="profile-info"
                        :style="((products % 2) == 0) ? { 'text-align': 'right' } : { 'text-align': 'left' }">
                        <h3>{{ $t(this.getText(products, '.name')) }} : {{ $t(this.getText(products, '.subtitle')) }}</h3>
                        <p class="category">{{ $t(this.getText(products, '.category')) }}</p>
                        <img :src=this.productsImg[products] v-bind:alt=$t(this.getTextAlt(products)) class="little-media">
                        <p class="description">{{ $t(this.getText(products, '.description')) }}</p>
                    </div>
                    <div v-else class="profile-info" :style="{ 'text-align': 'left' }">
                        <h3>{{ $t(this.getText(products, '.name')) }} : {{ $t(this.getText(products, '.subtitle')) }}</h3>
                        <p class="category">{{ $t(this.getText(products, '.category')) }}</p>
                        <img :src=this.productsImg[products] v-bind:alt=$t(this.getTextAlt(products)) class="little-media">
                        <p class="description">{{ $t(this.getText(products, '.description')) }}</p>
                    </div>

                    <img v-if="(products % 2 == 0)" :src=this.productsImg[products] v-bind:alt=$t(this.getTextAlt(products))
                        class="profile-image-right">
                </div>
            </article>
        </div>
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
            rightPosition: true

        }
    },
    methods: {
        getText(productsNumber: number, value: string) {
            return 'products.product' + String(productsNumber) + value;
        },
        getTextAlt(productsNumber: number) {
            return 'products.product' + String(productsNumber) + '.alt';
        },
        scrollToProduct() {
            const productId = this.$route.params.id;
            if (productId) {
                this.$nextTick(() => {
                    this.$refs[`${productId}`][0].scrollIntoView(!this.rightPosition, {behavior: 'smooth' });
                });
            }
        }
    },
    watch: {
        '$route.params.id': 'scrollToProduct'
    },
    mounted() {
        (this.windowWidth < 830) ? { rightPosition: false } : { rightPosition: true };
        this.scrollToProduct();
    }

}

</script>
  
<style lang="scss">
@import "../style/style.scss";

.little-media {
    display: none;
}

.container {
    padding-top: 15px;
    display: block;
    text-align: left;
}

.card {
    margin: 5% 15% 15px 15%;
}

.card-content {
    display: flex;
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

@media (max-width: 799px) {
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
  