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
@import "../../node_modules/bourbon/core/_bourbon.scss";
@import "../style/.variables.scss";
/*---- NUMBER OF SLIDE CONFIGURATION ----*/

.wrapper {
    max-width: 60em;
    margin: 1em auto;
    position: relative;
}

input {
    display: none;
}

.inner {
    width: percentage($num-of-slide);
    line-height: 0;
}

article {
    width: percentage($divNumSlide);
    float: left;
    position: relative;

    img {
        width: 100%;
    }
}

/*---- SET UP CONTROL ----*/
.slider-prev-next-control {
    height: 50px;
    position: absolute;
    top: 50%;
    width: 100%;
    

    label {
        display: none;
        width: 40px;
        height: 40px;
        border-radius: 50%;
        background: #fff;
        opacity: 0.7;

        &:hover {
            opacity: 1;
        }
    }
}

.slider-dot-control {
    position: absolute;
    width: 100%;
    bottom: 0;
    text-align: center;

    label {
        cursor: pointer;
        border-radius: 5px;
        display: inline-block;
        width: 10px;
        height: 10px;
        background: #bbb;
        @include transition(all 0.3s);

        &:hover {
            background: #ccc;
            border-color: #777;
        }
    }
}

/* Info Box */
.info {
    position: absolute;
    font-style: italic;
    line-height: 20px;
    opacity: 0;
    color: #000;
    text-align: left;
    @include transition(all 1000ms ease-out 600ms);

    h3 {
        color: #fcfff4;
        margin: 0 0 5px;
        font-weight: normal;
        font-size: 1.5em;
        font-style: normal;
    }

    &.top-left {
        top: 30px;
        left: 30px;
    }

    &.top-right {
        top: 30px;
        right: 30px;
    }

    &.bottom-left {
        bottom: 30px;
        left: 30px;
    }

    &.bottom-right {
        bottom: 30px;
        right: 30px;
    }
}

/* Slider Styling */
.slider-wrapper {
    width: 100%;
    overflow: hidden;
    border-radius: 5px;
    box-shadow: 1px 1px 4px #666;
    background: #fff;
    background: #fcfff4;
    @include transform(translateZ(0));
    @include transition(all 500ms ease-out);

    .inner {
        @include transform(translateZ(0));
        @include transition(all 800ms cubic-bezier(0.77, 0, 0.175, 1));
    }
}

/*---- SET POSITION FOR SLIDE ----*/
%bind-prev-next-button {
    font-family: FontAwesome;
    font-style: normal;
    font-weight: normal;
    text-decoration: inherit;
    margin: 0;
    line-height: 38px;
    font-size: 3em;
    display: block;
    color: #777;
}

%bind-next-button {
    @extend %bind-prev-next-button;
    content: "\f105";
    padding-left: 15px;
}

%bind-next-label {
    display: block;
    float: right;
    margin-right: 5px;
}

%bind-prev-label {
    display: block;
    float: left;
    margin-left: 5px;
}

%bind-prev-button {
    @extend %bind-prev-next-button;
    content: "\f104";
    padding-left: 8px;
}

%bind-background-active-dot {
    background: #333;
}

%bind-opacity-info {
    opacity: 1;
}

@for $i from 1 through $num-of-slide {
    #slide#{$i}:checked {
        & ~ .slider-wrapper .inner {
            margin-left: percentage(1 - $i);
        }

        & ~ .slider-dot-control label:nth-child(#{$i}) {
            @extend %bind-background-active-dot;
        }

        & ~ .slider-wrapper article:nth-child(#{$i}) .info {
            @extend %bind-opacity-info;
        }
    }
}

@for $i from 1 through ($num-of-slide - 1) {
    #slide#{$i}:checked {
        & ~ .slider-prev-next-control label:nth-child(#{$i (+1)}) {
            @extend %bind-next-label;

            &::after {
                @extend %bind-next-button;
            }
        }
    }
}

#slide#{$num-of-slide}:checked ~ .slider-prev-next-control label:nth-child(1) {
    @extend %bind-next-label;

    &::after {
        @extend %bind-next-button;
    }
}

@for $i from 2 through $num-of-slide {
    #slide#{$i}:checked {
        & ~ .slider-prev-next-control label:nth-child(#{$i - 1}) {
            @extend %bind-prev-label;

            &::after {
                @extend %bind-prev-button;
            }
        }
    }
}

#slide#{1}:checked ~ .slider-prev-next-control label:nth-child(#{$num-of-slide}) {
    @extend %bind-prev-label;

    &::after {
        @extend %bind-prev-button;
    }
}

/*---- TABLET ----*/
@media only screen and (max-width: 850px) and (min-width: 450px) {
    .slider-wrapper {
        border-radius: 0;
    }
}

/*---- MOBILE----*/
@media only screen and (max-width: 450px) {
    .slider-wrapper {
        border-radius: 0;
    }

    .slider-wrapper .info {
        opacity: 0;
    }
}

@media only screen and (min-width: 850px) {
    body {
        padding: 0 80px;
    }
}
</style>
