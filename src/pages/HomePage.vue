<template>
    <section id="cover">
        <h1>{{ $t("home.header") }}</h1>

    </section>
    <section id="product-home">
        <div class="container reveal">
            <h2 class="home-section-name">{{ $t("products.header") }}</h2>
            <Slider />
        </div>
    </section>


    <section id="terroir-home">
        <div class="container reveal .top">
            <h2 class="home-section-name">{{ $t("terroir.title") }}</h2>
            <div class="text-container">
                <div class="text-box">
                    <p>
                        {{ $t("terroir.intro") }}
                    </p>
                </div>
            </div>
        </div>
    </section>
    <section id="terroir-home">
        <div class="container reveal .top">
            <h2 class="home-section-name">{{ $t("histoire.title") }}</h2>
            <div class="text-container">
                <div class="text-box">
                    <p>
                        {{ $t("histoire.intro") }}
                    </p>
                </div>
            </div>
        </div>
    </section>
</template>

<script lang="ts">
import Slider from "../components/Slider.vue"

function reveal() {
    var reveals = document.querySelectorAll(".reveal");

    for (var i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = reveals[i].getBoundingClientRect().top;
        var elementVisible = 120;
        reveals[i].classList.toggle("active", elementTop < windowHeight - elementVisible);
    }

}

window.addEventListener("scroll", reveal);

export default {

    components: {
        Slider
    }

} 
</script>

<style lang="scss">
 @import "../style/style.scss";

 #content {
     margin-top: 0;
 }

 #cover {
     background-image: $bg-cover;
     background-repeat: no-repeat;
     background-size: cover;
     font: 3vw $logo-font;
     color: $white;
     text-shadow: 5px 5px 10px $black;
 }

 .home-section-name {
     text-align: center;
     text-transform: uppercase;
     color: $primary-color;
     font-weight: bold;
     font-size: 3vw;
     margin-bottom: 1ev;
 }

 .text-box {
     color: $primary-color;
     font-size: 150%;
     text-align: justify;
 }

 section {
     min-height: 100vh;
     display: flex;
     justify-content: center;
     align-items: center;
 }

 section .container {
     margin: 50px;
 }

 section .text-container {
     display: flex;
 }

 section .text-container .text-box {
     margin: 20px;
     padding: 20px;
 }

 section .text-container .text-box h3 {
     font-size: 30px;
     text-align: center;
     text-transform: uppercase;
     margin-bottom: 10px;
 }

 .reveal {
     opacity: 0;
     transform: translateY(50px) scale(0.9);
     transition: 0.5s ease-in-out;
 }

 .reveal.active {
     transform: translateY(0) scale(1);
     opacity: 1;
 }
</style>