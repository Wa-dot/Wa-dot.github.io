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
  mounted: function () {
    const buttonsWrapper = document.querySelector(".map");
    const slides = document.querySelector(".inner");
    if (buttonsWrapper != null && slides != null) {
      buttonsWrapper.addEventListener("click", e => {
        if (e.target.nodeName === "BUTTON") {
          Array.from(buttonsWrapper.children).forEach(item =>
            item.classList.remove("active")
          );
          if (e.target.classList.contains("first")) {
            slides.style.transform = "translateX(-0%)";
            e.target.classList.add("active");
          } else if (e.target.classList.contains("second")) {
            slides.style.transform = "translateX(-33.33333333333333%)";
            e.target.classList.add("active");
          } else if (e.target.classList.contains('third')) {
            slides.style.transform = 'translatex(-66.6666666667%)';
            e.target.classList.add('active');
          }
        }
      });
    }
  }
}



</script>

<style lang="scss">
// @import '../style/.variables.scss';

// .text-box {
//   color: $white;
// }
// .carousel{
//   background-color: $grey;
//   color: $white;
// }
// @import 'carousel.scss';

// @include carousel(5);

@mixin circle($i) {
  border-radius: 100%;
  height: $i;
  width: $i;
}

$bgBlue: #001d38;
$cardBlue: #0a2640;
$font: "Poppins";

html,
body {
  height: 100%;
}

body {
  background: $bgBlue;
  font-family: $font, sans-serif;
  overflow: hidden;
}

.center {
  align-items: center;
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: center;
}

.wrapper {
  display: flex;
  grid-gap: 1em;
  overflow: hidden;
  width: 55em;

  &>.inner {
    display: flex;
    grid-gap: 1em;
    transition: all 1s ease-in-out;
  }
}

.card {
  border-radius: 0.5em;
  box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.5);

  &>img {
    border-top-right-radius: inherit;
    border-top-left-radius: inherit;
    display: block;
    width: 17.5em;
  }

  &>.content {
    background: $cardBlue;
    border-bottom-left-radius: inherit;
    border-bottom-right-radius: inherit;
    padding: 1em;
    text-align: center;

    &>h1,
    &>h3 {
      margin: 0.35em 0;
    }

    &>h1 {
      color: #fff;
      font-size: 1.25rem;
      line-height: 1;
    }

    &>h3 {
      color: #ccc;
      font-size: 0.9rem;
      font-weight: 300;
    }
  }
}

.map {
  margin-top: 1em;

  &>button {
    all: unset;
    background: lighten($cardBlue, 10);
    cursor: pointer;
    margin: 0 0.125em;
    position: relative;
    user-select: none;
    @include circle(1em);

    &.active {
      &:after {
        background: $bgBlue;
        content: "";
        left: 50%;
        position: absolute;
        transform: translate(-50%, -50%);
        top: 50%;
        @include circle(0.5em);
      }
    }
  }
}
</style>
