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

  <div class="wrapper">
  <input checked type=radio name="slider" id="slide1" />
  <input type=radio name="slider" id="slide2" />
  <input type=radio name="slider" id="slide3" />
  <input type=radio name="slider" id="slide4" />
  <input type=radio name="slider" id="slide5" />

  <div class="slider-wrapper">
    <div class=inner>
      <article>
        <div class="info top-left">
          <h3>Malacca</h3></div>
        <img src="https://farm9.staticflickr.com/8059/28286750501_dcc27b1332_h_d.jpg" />
      </article>

      <article>
        <div class="info bottom-right">
          <h3>Cameron Highland</h3></div>
        <img src="https://farm6.staticflickr.com/5812/23394215774_b76cd33a87_h_d.jpg" />
      </article>

      <article>
        <div class="info bottom-left">
          <h3>New Delhi</h3></div>
        <img src="https://farm8.staticflickr.com/7455/27879053992_ef3f41c4a0_h_d.jpg" />
      </article>

      <article>
        <div class="info top-right">
          <h3>Ladakh</h3></div>
        <img src="https://farm8.staticflickr.com/7367/27980898905_72d106e501_h_d.jpg" />
      </article>

      <article>
        <div class="info bottom-left">
          <h3>Nubra Valley</h3></div>
        <img src="https://farm8.staticflickr.com/7356/27980899895_9b6c394fec_h_d.jpg" />
      </article>
    </div>
    <!-- .inner -->
  </div>
  <!-- .slider-wrapper -->

  <div class="slider-prev-next-control">
    <label for=slide1></label>
    <label for=slide2></label>
    <label for=slide3></label>
    <label for=slide4></label>
    <label for=slide5></label>
  </div>
  <!-- .slider-prev-next-control -->

  <div class="slider-dot-control">
    <label for=slide1></label>
    <label for=slide2></label>
    <label for=slide3></label>
    <label for=slide4></label>
    <label for=slide5></label>
  </div>
  <!-- .slider-dot-control -->
</div>
</template>
<script lang="ts">

export default {
  name: 'Slider',
  // data() {
  //   return {
  //     nbOfProducts: 5,
  //     productId: ['slide-1'],
  //     productIdLink: ['#slide-1']
  //   }
  // },
  // methods: {
  //   parse(parametre: string, productNumber: number) {
  //     return 'product.product' + productNumber + '.' + parametre;
  //   },
  // },
  // mounted: function () {
  //   for (let i = 1; i < this.nbOfProducts; i++) {
  //     this.productId.push('slide-' + i);
  //     this.productIdLink.push('#slide-' + i);
  //   }
  // }

  // https://colorlib.com/preview/theme/seogo/
}



</script>

<style lang="scss">
</style>
