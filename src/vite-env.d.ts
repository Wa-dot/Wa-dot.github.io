/// <reference types="vite/client" />
import Vue from 'vue'
import { ComponentCustomProperties } from 'vue';
import { VueI18n } from 'vue-i18n';

declare module '@vue/runtime-core' {
    interface ComponentCustomProperties {
        $t: VueI18n['t'];
        $i18n: VueI18n;
    }
}
