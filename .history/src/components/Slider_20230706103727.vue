<template>
  <div class="slider-container">
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
          <a class="slide__prev" :href='this.productIdLink[items+1]' title="Prev"></a>
          <a class="slide__next" :href='this.productIdLink[items-1]' title="Next"></a>
        </div>
      </div>
      <div class="slider__nav">
        <a class="slider__navlink" href="#slides__1"></a>
        <a class="slider__navlink" href="#slides__2"></a>
        <a class="slider__navlink" href="#slides__3"></a>
        <a class="slider__navlink" href="#slides__4"></a>
      </div>
  </div>
  </div>
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

<template></template>

<script>
export default {
  name: 'Slider'
}
</script>
