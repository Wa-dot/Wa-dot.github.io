import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import i18n from "./i18n"
import { BootstrapVue } from 'bootstrap-vue'
import './app.scss'

createApp(App).
    use(router).
    use(i18n).
    use(BootstrapVue).
    mount('#app')