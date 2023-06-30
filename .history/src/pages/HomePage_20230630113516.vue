<template>
    <section id="cover">
        <h1>{{ $t('home.header') }}</h1>
    </section>
    <section id="product-home">
        <div class="container reveal">
            <h2>{{$t("product.header")}}</h2>
            <div class="text-container">
                <div class="text-box">
                    <h3>{{ $t('product.about-us') }}</h3>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
                        eius molestiae perferendis eos provident vitae iste.
                    </p>
                </div>
                <div class="text-box">
                    <h3>{{ $t("nav.product") }}</h3>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
                        eius molestiae perferendis eos provident vitae iste.
                    </p>
                </div>
                <div class="text-box">
                    <h3>{{ $t("nav.terroir") }}</h3>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
                        eius molestiae perferendis eos provident vitae iste.
                    </p>
                </div>
            </div>
        </div>
    </section>

    <section id="terroir-home">
        <div class="container reveal">
            <h2>Caption</h2>
            <div class="text-container">
                <div class="text-box">
                    <h3>Section Text</h3>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
                        eius molestiae perferendis eos provident vitae iste.
                    </p>
                </div>
                <div class="text-box">
                    <h3>Section Text</h3>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
                        eius molestiae perferendis eos provident vitae iste.
                    </p>
                </div>
                <div class="text-box">
                    <h3>Section Text</h3>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
                        eius molestiae perferendis eos provident vitae iste.
                    </p>
                </div>
            </div>
        </div>
    </section>

    <section id="about-us-home">
        <div class="container reveal">
            <h2>Caption</h2>
            <div class="text-container">
                <div class="text-box">
                    <h3>Section Text</h3>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
                        eius molestiae perferendis eos provident vitae iste.
                    </p>
                </div>
                <div class="text-box">
                    <h3>Section Text</h3>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
                        eius molestiae perferendis eos provident vitae iste.
                    </p>
                </div>
                <div class="text-box">
                    <h3>Section Text</h3>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
                        eius molestiae perferendis eos provident vitae iste.
                    </p>
                </div>
            </div>
        </div>
    </section>
</template>

<script lang="ts">
function reveal() {
  var reveals = document.querySelectorAll(".reveal");

  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 150;

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
}

window.addEventListener("scroll", reveal);

</script>

<style lang="scss">
@import "./HomePage.scss";
</style>

