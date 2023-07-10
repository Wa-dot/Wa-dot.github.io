<!-- <template> -->
  <!-- <div class="slider-container">
    <div class="slider">
      <div class="slides"> -->
        <!-- <div class="text-container">
    <div class="text-box" v-for="items in this.nbOfProducts" :id=items>
      <h3>{{ $t(this.parse("name", items)) }}</h3>
      <p class="slide__text">
        {{ $t(this.parse("description", items)) }}
      </p>
      <a class="slide__prev" href="{{'#' + items++ }}" title="Next"></a>
      <a class="slide__next" href="{{'#' + items-- }}" title="Next"></a>

    </div>
  </div> -->
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
<!-- </template> -->
<!-- 
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

</script> -->

<template>
  <div>
    <b-carousel
      id="carousel-1"
      v-model="slide"
      :interval="4000"
      controls
      indicators
      background="#ababab"
      img-width="1024"
      img-height="480"
      style="text-shadow: 1px 1px 2px #333;"
      @sliding-start="onSlideStart"
      @sliding-end="onSlideEnd"
    >
      <!-- Text slides with image -->
      <b-carousel-slide
        caption="First slide"
        text="Nulla vitae elit libero, a pharetra augue mollis interdum."
        img-src="https://picsum.photos/1024/480/?image=52"
      ></b-carousel-slide>

      <!-- Slides with custom text -->
      <b-carousel-slide img-src="https://picsum.photos/1024/480/?image=54">
        <h1>Hello world!</h1>
      </b-carousel-slide>

      <!-- Slides with image only -->
      <b-carousel-slide img-src="https://picsum.photos/1024/480/?image=58"></b-carousel-slide>

      <!-- Slides with img slot -->
      <!-- Note the classes .d-block and .img-fluid to prevent browser default image alignment -->
      <b-carousel-slide>
        <template #img>
          <img
            class="d-block img-fluid w-100"
            width="1024"
            height="480"
            src="https://picsum.photos/1024/480/?image=55"
            alt="image slot"
          >
        </template>
      </b-carousel-slide>

      <!-- Slide with blank fluid image to maintain slide aspect ratio -->
      <b-carousel-slide caption="Blank Image" img-blank img-alt="Blank image">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse eros felis, tincidunt
          a tincidunt eget, convallis vel est. Ut pellentesque ut lacus vel interdum.
        </p>
      </b-carousel-slide>
    </b-carousel>

    <p class="mt-4">
      Slide #: {{ slide }}<br>
      Sliding: {{ sliding }}
    </p>
  </div>
</template>

<script>
  export default {
    name: 'Slider'
    data() {
      return {
        slide: 0,
        sliding: null
      }
    },
    methods: {
      onSlideStart(slide) {
        this.sliding = true
      },
      onSlideEnd(slide) {
        this.sliding = false
      }
    }
  }
</script>
