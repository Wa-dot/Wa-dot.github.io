<template>
    <footer class="footer">
        <div class="container">
            <div class="footer__content">

                <div class="footer__links">
                    <router-link to="/legalNotice" class="footer__link">{{ $t("legalNotice.title") }}</router-link>
                    <router-link to="/CGU" class="footer__link">{{ $t("CGU.title") }}</router-link>
                    <router-link to="/contact" class="footer__link">{{ $t("contact.contactUs") }}</router-link>
                </div>
                <div class="footer__social">
                    <a :href=this.fb class="footer__social-link">
                        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                            viewBox="0,0,256,256" width="50px" height="50px" fill-rule="nonzero">
                            <title>Facebook icon</title>
                            <g fill="#edede5" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt"
                                stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0"
                                font-family="none" font-weight="none" font-size="none" text-anchor="none"
                                style="mix-blend-mode: normal">
                                <g transform="scale(5.12,5.12)">
                                    <path
                                        d="M9,4c-2.74952,0 -5,2.25048 -5,5v32c0,2.74952 2.25048,5 5,5h16.83203c0.10799,0.01785 0.21818,0.01785 0.32617,0h5.67383c0.10799,0.01785 0.21818,0.01785 0.32617,0h8.8418c2.74952,0 5,-2.25048 5,-5v-32c0,-2.74952 -2.25048,-5 -5,-5zM9,6h32c1.66848,0 3,1.33152 3,3v32c0,1.66848 -1.33152,3 -3,3h-8v-14h3.82031l1.40039,-7h-5.2207v-2c0,-0.55749 0.05305,-0.60107 0.24023,-0.72266c0.18718,-0.12159 0.76559,-0.27734 1.75977,-0.27734h3v-5.63086l-0.57031,-0.27149c0,0 -2.29704,-1.09766 -5.42969,-1.09766c-2.25,0 -4.09841,0.89645 -5.28125,2.375c-1.18284,1.47855 -1.71875,3.45833 -1.71875,5.625v2h-3v7h3v14h-16c-1.66848,0 -3,-1.33152 -3,-3v-32c0,-1.66848 1.33152,-3 3,-3zM32,15c2.07906,0 3.38736,0.45846 4,0.70117v2.29883h-1c-1.15082,0 -2.07304,0.0952 -2.84961,0.59961c-0.77656,0.50441 -1.15039,1.46188 -1.15039,2.40039v4h4.7793l-0.59961,3h-4.17969v16h-4v-16h-3v-3h3v-4c0,-1.83333 0.46409,-3.35355 1.28125,-4.375c0.81716,-1.02145 1.96875,-1.625 3.71875,-1.625z">
                                    </path>
                                </g>
                            </g>
                        </svg>
                    </a>
                    <a :href=this.insta class=" footer__social-link">
                        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                            viewBox="0,0,256,256" width="50px" height="50px" fill-rule="nonzero">
                            <title>Instagram icon</title>
                            <g fill="#edede5" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt"
                                stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0"
                                font-family="none" font-weight="none" font-size="none" text-anchor="none"
                                style="mix-blend-mode: normal">
                                <g transform="scale(5.12,5.12)">
                                    <path
                                        d="M16,3c-7.16752,0 -13,5.83248 -13,13v18c0,7.16752 5.83248,13 13,13h18c7.16752,0 13,-5.83248 13,-13v-18c0,-7.16752 -5.83248,-13 -13,-13zM16,5h18c6.08648,0 11,4.91352 11,11v18c0,6.08648 -4.91352,11 -11,11h-18c-6.08648,0 -11,-4.91352 -11,-11v-18c0,-6.08648 4.91352,-11 11,-11zM37,11c-1.10457,0 -2,0.89543 -2,2c0,1.10457 0.89543,2 2,2c1.10457,0 2,-0.89543 2,-2c0,-1.10457 -0.89543,-2 -2,-2zM25,14c-6.06329,0 -11,4.93671 -11,11c0,6.06329 4.93671,11 11,11c6.06329,0 11,-4.93671 11,-11c0,-6.06329 -4.93671,-11 -11,-11zM25,16c4.98241,0 9,4.01759 9,9c0,4.98241 -4.01759,9 -9,9c-4.98241,0 -9,-4.01759 -9,-9c0,-4.98241 4.01759,-9 9,-9z">
                                    </path>
                                </g>
                            </g>
                        </svg>
                    </a>
                </div>
            </div>
            <p>© 2023 Votre entreprise. Tous droits réservés.</p>
        </div>
    </footer>
</template>
  
<script lang="ts">
import { images, information } from '../store';

export default {
    name: 'FootBar',
    data() {
        return {
            fb: information.contact.facebook,
            fbIcon: images.sn[0],
            insta: information.contact.instagram,
            instaIcon: images.sn[2],
        }
    }
}
</script>
  
<style lang="scss">
@import '../style/style.scss';

.footer {
    background-color: $primary-color;
    color: $white;
    padding: 10px 5px 10px 5px;
    margin-top: 5%;



    .container {
        margin: 0 5%;
        text-align: center;
    }

    .footer__content {
        display: flex;
        justify-content: space-between;
        align-items: center;

        .footer__links {
            .footer__link {
                color: $white;
                padding: 10px;
                text-decoration: none;
            }
        }
    }

    .footer__social {
        .footer__social-link {
            padding: 5px;
        }
    }
}</style>
