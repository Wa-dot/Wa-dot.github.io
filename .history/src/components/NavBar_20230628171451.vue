<template>
    <nav>
        <div id="logo">
            <router-link to="/"><img src='/logo.svg' alt="logo" />{{ $t('nav.name') }}</router-link>
        </div>

        <ul class="nav-links">
            <li>
                <router-link to="/" class="unline-center">{{ $t("nav.home") }}</router-link>
            </li>
            <li>
                <router-link to="/about" class="unline-center">{{ $t("nav.about") }}</router-link>
            </li>
            <li>
                <router-link to="/contact" class="unline-center">{{ $t("nav.contact") }}ds</router-link>
            </li>
            <li class="lang"><img src="/france.svg" alt="lang fr"> FR</li>
        </ul>

        <div v-on:click="openMobileNav()" id="burger">
            <div class="line1"></div>
            <div class="line2"></div>
            <div class="line3"></div>
        </div>
    </nav>
</template>
              
<script lang="ts">
export default {
    name: 'Navbar',
    props: ['name', 'logoImg', 'navLinks'],
    methods: {
        openMobileNav() {
            const burger = document.getElementById('burger')!
            const nav = document.querySelector('.nav-links')!
            const navLinks = document.querySelectorAll('.nav-links li')!

            nav.classList.toggle('nav-active')
            burger.classList.toggle('toggle')

            // Animate navigation links
            navLinks.forEach((link, index) => {
                if (link.style.animation || link.style.webkitAnimation) {
                    link.style.animation = ''
                    link.style.webkitAnimation = ''
                } else {
                    link.style.webkitAnimation = `navLinkFade 0.5s ease forwards ${index / 7
                        }s`
                    link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7}s`
                }
            })
        },
    },
    mounted() {
        if (window.innerWidth < 768) {
            this.countClicksOnMobileDropdown()
        }
    },
}
</script>

<style lang="scss">
@import './NavBar.scss';
</style>