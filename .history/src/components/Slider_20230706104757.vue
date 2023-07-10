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
  </div>
</template>

<script lang="ts">

export default {
  name: 'Slider',
  data() {
    return {
      nbOfProducts: 5,
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

<style lang="scss">
@import '../style/.variables.scss';

.text-box {
  color: $white;
}

/**
 * Carousel.sass
 * @author: Dang Van Thanh
 * @email: dangvanthanh@dangthanh.org
 * @description: A Simple Carousel Pure CSS Using Sass
 * @version: 0.1.0
 */
%animation-default {
  opacity: 1 !important;
  z-index: 3;
}

@mixin carousel($items, $animation: 'default') {
  .carousel {
    width: 100%;
    position: relative;
    overflow: hidden;

    >input[type="radio"] {
      position: absolute;
      top: 0;
      left: 0;
      opacity: 0;

      &:checked {

        ~.carousel__items .carousel__item,
        ~.carousel__prev>label,
        ~.carousel__next>label {
          opacity: 0;
        }
      }

      @for $i from 1 through $items {
        &:nth-child(#{$i}) {
          &:checked {
            ~.carousel__items .carousel__item {
              @if $animation =='default' {
                &:nth-child(#{$i}) {
                  opacity: 1;
                }
              }
            }

            ~.carousel__prev {
              >label {
                @if $i ==1 {
                  &:nth-child(#{$items}) {
                    @extend %animation-default;
                  }
                }

                @else if $i ==$items {
                  &:nth-child(#{$items - 1}) {
                    @extend %animation-default;
                  }
                }

                @else {
                  &:nth-child(#{$i - 1}) {
                    @extend %animation-default;
                  }
                }
              }
            }

            ~.carousel__next {
              >label {
                @if $i ==$items {
                  &:nth-child(1) {
                    @extend %animation-default;
                  }
                }

                @else {
                  &:nth-child(#{$i + 1}) {
                    @extend %animation-default;
                  }
                }
              }
            }

            ~.carousel__nav {
              >label {
                &:nth-child(#{$i}) {
                  background: #ccc;
                  cursor: default;
                  pointer-events: none;
                }
              }
            }
          }
        }
      }
    }

    &__items {
      margin: 0;
      padding: 0;
      list-style-type: none;
      width: 100%;
      height: 600px;
      position: relative;
    }

    &__item {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      z-index: 1;
      transition: opacity 2s;
      -webkit-transition: opacity 2s;

      img {
        width: 100%;
        vertical-align: middle;
      }
    }

    &__prev,
    &__next {
      >label {
        border: 1px solid #fff;
        border-radius: 50%;
        cursor: pointer;
        display: block;
        width: 40px;
        height: 40px;
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        -webkit-transform: translateY(-50%);
        transition: all .3s ease;
        -webkit-transition: all .3s ease;
        opacity: 0;
        z-index: 2;

        &:hover,
        &:focus {
          opacity: .5 !important;
        }

        &:before,
        &:after {
          content: "";
          position: absolute;
          width: inherit;
          height: inherit;
        }

        &:before {
          background: linear-gradient(to top, #fff 0%, #fff 10%, rgba(51, 51, 51, 0) 10%), linear-gradient(to left, #fff 0%, #fff 10%, rgba(51, 51, 51, 0) 10%);
          width: 60%;
          height: 60%;
          top: 20%;
        }
      }
    }

    &__prev {
      >label {
        left: 2%;

        &:before {
          left: 35%;
          top: 20%;
          transform: rotate(135deg);
          -webkit-transform: rotate(135deg);
        }
      }
    }

    &__next {
      >label {
        right: 2%;

        &:before {
          left: 10%;
          transform: rotate(315deg);
          -webkit-transform: rotate(315deg);
        }
      }
    }

    &__nav {
      position: absolute;
      bottom: 3%;
      left: 0;
      text-align: center;
      width: 100%;
      z-index: 3;

      >label {
        border: 1px solid #fff;
        display: inline-block;
        border-radius: 50%;
        cursor: pointer;
        margin: 0 .125%;
        width: 20px;
        height: 20px;
      }
    }
  }
}</style>
