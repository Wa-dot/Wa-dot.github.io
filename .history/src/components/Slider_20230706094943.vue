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
  <div id="carouselExampleDark" class="carousel carousel-dark slide">
    <div class="carousel-indicators">
      <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" class="active" aria-label="Slide 1"
        aria-current="true"></button>
      <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"
        class=""></button>
      <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"
        class=""></button>
    </div>
    <div class="carousel-inner">
      <div class="carousel-item active" data-bs-interval="10000">
        <svg class="bd-placeholder-img bd-placeholder-img-lg d-block w-100" width="800" height="400"
          xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: First slide"
          preserveAspectRatio="xMidYMid slice" focusable="false">
          <title>Placeholder</title>
          <rect width="100%" height="100%" fill="#f5f5f5"></rect><text x="50%" y="50%" fill="#aaa" dy=".3em">First
            slide</text>
        </svg>
        <div class="carousel-caption d-none d-md-block">
          <h5>First slide label</h5>
          <p>Some representative placeholder content for the first slide.</p>
        </div>
      </div>
      <div class="carousel-item" data-bs-interval="2000">
        <svg class="bd-placeholder-img bd-placeholder-img-lg d-block w-100" width="800" height="400"
          xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Second slide"
          preserveAspectRatio="xMidYMid slice" focusable="false">
          <title>Placeholder</title>
          <rect width="100%" height="100%" fill="#eee"></rect><text x="50%" y="50%" fill="#bbb" dy=".3em">Second
            slide</text>
        </svg>
        <div class="carousel-caption d-none d-md-block">
          <h5>Second slide label</h5>
          <p>Some representative placeholder content for the second slide.</p>
        </div>
      </div>
      <div class="carousel-item">
        <svg class="bd-placeholder-img bd-placeholder-img-lg d-block w-100" width="800" height="400"
          xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Third slide"
          preserveAspectRatio="xMidYMid slice" focusable="false">
          <title>Placeholder</title>
          <rect width="100%" height="100%" fill="#e5e5e5"></rect><text x="50%" y="50%" fill="#999" dy=".3em">Third
            slide</text>
        </svg>
        <div class="carousel-caption d-none d-md-block">
          <h5>Third slide label</h5>
          <p>Some representative placeholder content for the third slide.</p>
        </div>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div></template>

<script>
$('.carousel').carousel()
export default {
  name: 'Slider'
}
</script>
