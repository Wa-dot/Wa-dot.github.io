<template>
    <div>
        <div class="container">
            <h1 class="title">{{ $t("CGU.title") }}</h1>
            <article class="card">
                <p>{{ $t("CGU.made-by") }} {{ $t("CGU.made-by-name.name") }}<br>
                    {{ $t("CGU.made-by-name.publication-director") }}</p>
                <p>{{ $t("CGU.contact.reasons") }} : <a href="mailto:{{email}}">{{ email }}</a></p>
                <p>{{ $t("CGU.hosting.company") }}</p>
                <p>{{ $t("CGU.terms-of-use.text") }}</p>
            </article>
        </div>
    </div>
</template>

<script lang="ts">
import { information } from '../store'
export default {
    data() {
        return {
            email: information.contact.email,
        }
    }
}
</script>
<style lang="scss">
.container {
    bottom: 0px;
}
</style>
