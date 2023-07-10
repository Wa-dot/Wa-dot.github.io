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

  <!-- <div class="carousel">
    <input type="radio" id="carousel-1" name="carousel[]" checked>
    <input type="radio" id="carousel-2" name="carousel[]">
    <input type="radio" id="carousel-3" name="carousel[]">
    <input type="radio" id="carousel-4" name="carousel[]">
    <input type="radio" id="carousel-5" name="carousel[]">
    <ul class="carousel__items">
      <li class="carousel__item">fdgsdfg</li>
      <li class="carousel__item">azertyu</li>
      <li class="carousel__item">mlkj</li>
      <li class="carousel__item">vcxdsf</li>
      <li class="carousel__item">kyhkuh</li>
    </ul>
    <div class="carousel__prev">
      <label for="carousel-1"></label>
      <label for="carousel-2"></label>
      <label for="carousel-3"></label>
      <label for="carousel-4"></label>
      <label for="carousel-5"></label>
    </div>
    <div class="carousel__next">
      <label for="carousel-1"></label>
      <label for="carousel-2"></label>
      <label for="carousel-3"></label>
      <label for="carousel-4"></label>
      <label for="carousel-5"></label>
    </div>
    <div class="carousel__nav">
      <label for="carousel-1"></label>
      <label for="carousel-2"></label>
      <label for="carousel-3"></label>
      <label for="carousel-4"></label>
      <label for="carousel-5"></label>
    </div>
  </div> -->

  <div class="center">
    <div class="wrapper">
      <div class="inner">
        <div class="card">
          <img src="https://colorlib.com/preview/theme/seogo/img/case_study/1.png">
          <div class="content">
            <h1>Product Design</h1>
            <h3>UI/UX, Design</h3>
          </div>
        </div>
        <div class="card">
          <img src="https://colorlib.com/preview/theme/seogo/img/case_study/2.png">
          <div class="content">
            <h1>Custom Website</h1>
            <h3>UI/UX, Design</h3>
          </div>
        </div>
        <div class="card">
          <img src="https://colorlib.com/preview/theme/seogo/img/case_study/3.png">
          <div class="content">
            <h1>Digital Marketing</h1>
            <h3>UI/UX, Design</h3>
          </div>
        </div>
        <div class="card">
          <img src="https://colorlib.com/preview/theme/seogo/img/case_study/1.png">
          <div class="content">
            <h1>Digital Marketing</h1>
            <h3>UI/UX, Design</h3>
          </div>
        </div>
        <div class="card">
          <img src="https://colorlib.com/preview/theme/seogo/img/case_study/2.png">
          <div class="content">
            <h1>Digital Marketing</h1>
            <h3>UI/UX, Design</h3>
          </div>
        </div>
        <div class="card">
          <img src="https://colorlib.com/preview/theme/seogo/img/case_study/3.png">
          <div class="content">
            <h1>Digital Marketing</h1>
            <h3>UI/UX, Design</h3>
          </div>
        </div>
        <div class="card">
          <img src="https://colorlib.com/preview/theme/seogo/img/case_study/1.png">
          <div class="content">
            <h1>Digital Marketing</h1>
            <h3>UI/UX, Design</h3>
          </div>
        </div>
        <div class="card">
          <img src="https://colorlib.com/preview/theme/seogo/img/case_study/2.png">
          <div class="content">
            <h1>Digital Marketing</h1>
            <h3>UI/UX, Design</h3>
          </div>
        </div>
        <div class="card">
          <img src="https://colorlib.com/preview/theme/seogo/img/case_study/3.png">
          <div class="content">
            <h1>Digital Marketing</h1>
            <h3>UI/UX, Design</h3>
          </div>
        </div>
      </div>
    </div>

    <div class="map">
      <button class="active first"></button>
      <button class="second"></button>
      <button class="third"></button>
    </div>
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
    else {
      console.log("buttonsWrapper or slides is null");
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
