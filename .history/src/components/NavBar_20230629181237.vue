<template>
    <nav>
        <div id="logo">
            <router-link to="/"><img src='/logo.svg' alt="logo" />{{ $t('nav.name') }}</router-link>
        </div>

        <ul class="nav-links">
            <li @click="closeMobileNav()">
                <router-link to="/about-us" class="unline-center">{{ $t("nav.about-us") }}</router-link>
            </li>
            <li @click="closeMobileNav()">
                <router-link to="/" class="unline-center">{{ $t("nav.product") }}</router-link>
            </li>
            <li @click="closeMobileNav()">
                <router-link to="/contact" class="unline-center">{{ $t("nav.terroir") }}</router-link>
            </li>
            <img v-if="$i18n.locale === 'fr'" src="/us.svg" alt="lang fr" class="lang" @click="changeLanguage()">
            <img v-else src="/france.svg" alt="lang us" class="lang" @click="changeLanguage()">
        </ul>

        <div @click="openMobileNav()" id="burger">
            <div class="line1"></div>
            <div class="line2"></div>
            <div class="line3"></div>
        </div>
    </nav>
</template>
              
<script lang="ts">
import 'vue-i18n';
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
        closeMobileNav() {
            const burger = document.getElementById('burger')!
            const nav = document.querySelector('.nav-links')!
            const navLinks = document.querySelectorAll('.nav-links li')!
            nav.classList.remove('nav-active')
            burger.classList.remove('toggle')
            navLinks.forEach((link, index) => {
                link.style.webkitAnimation = `navLinkFade 0.5s ease forwards ${index / 7
                    }s`
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7}s`
            })
        },
        changeLanguage() {
            console.log("this.$i18n.locale");
            if (this.$i18n.locale === 'fr') {
                this.$i18n.locale = 'en';
            } else {
                this.$i18n.locale = 'fr';
            }
        }
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