<template>
    <div id="app">
            <div class="popup" v-show="showPopup">
                <div class="popup-content">
                    <slot>
                        <h2 class="title-popup">Bienvenue au Champagne Xavier Laluc</h2>

                        Pour accéder au site, vous devez être en âge de consommer de l'alcool selon la législation en
                        vigueur dans votre lieu de résidence, ou être âgé de 21 ans minimum.

                        <p class="sub-popup">Pour plus d'information sur les cookies, veuillez consulter notre politique de
                            confidentialité.</p>
                    </slot>
                    <div class=btn>
                        <button @click="closePopup" class="allow">Je peux entrer</button>
                        <a href="https://www.vinetsociete.fr/portailprevention">
                            <button class="underAge">Je n'ai pas encore l'âge légale</button>
                        </a>
                    </div>
                </div>
            </div>
    </div>
</template>

<script lang="ts">
export default
    {
        name: "Popup",
        data() {
            return {
                showPopup: true
            }
        },
        mounted() {
            var objetStr = localStorage.getItem("showPopup");
            if (objetStr) {
                var objet = JSON.parse(objetStr);
                if (new Date().getTime() > objet.expiration) {
                    localStorage.removeItem("showPopup");
                    this.showPopup = true;
                    document.body.style.overflow = "hidden";
                }
                else {
                    this.showPopup = false;
                    document.body.style.overflow = "visible";
                }
            }
        },
        methods: {
            closePopup() {
                this.showPopup = false;
                var objet = {
                    value: "false", expiration: new Date().getTime() + 1000 * 60 * 60,
                };
                localStorage.setItem("showPopup", JSON.stringify(objet));
                document.body.style.overflow = "visible";
            },
            closePopupTest() {
                this.showPopup = false;
            }
        },
    }; </script>

<style lang="scss">
@import "../style/style.scss";

.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.5s;
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}

.popup {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 2000;
    background-color: rgba(0, 0, 0, 0.5);
}

.popup-content {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: $white;
    border-radius: 10px;
    padding: 20px;
}

.popup-overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
}

.btn {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 20px;
}

.allow,
.underAge {
    padding: 10px 20px;
    border: 1px solid $white;
    border-radius: 5px;
    font-size: 16px;
    cursor: pointer;
}

.allow {
    background-color: $primary-color;
    color: $white;
    margin-right: 30px;
}

.underAge {
    background-color: $white;
    color: $primary-color;
}

.underAge:hover {
    border: 1px solid $primary-color;

}

.allow:hover {
    background-color: $white;
    color: $primary-color;
    border: 1px solid $primary-color;
}

.sub-popup {
    font-size: 12px;
    color: $grey;
    margin-top: 10px;
}

.title-popup {
    font-size: 30px;
    font-weight: bold;
    margin-bottom: 10px;
}
</style>