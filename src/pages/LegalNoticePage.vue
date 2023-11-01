<template>
    <div class="container">
        <h1 class="title">{{ $t("legalNotice.title") }}</h1>
        <article class="card">
            <div v-for="header in 3">
                <div class="row">
                    <p class="category">{{ $t(getTextHeader(header)) }}</p>
                </div>
            </div>
        </article>
        <article class="card" v-for="article in 5">
            <div class="row">
                <h2>{{ $t(getTextArticle(article, "header")) }}</h2>

                <div v-if="article == 2" class="col-12">
                    <div>
                        <p class="bold">{{ $t(getTextArticle(article, "content.access-conditions.title")) }}</p>
                        <p>{{ $t(getTextArticle(article, "content.access-conditions.text")) }}</p>
                    </div>
                    <div>
                        <p class="bold">{{ $t(getTextArticle(article, "content.site-description.title")) }}</p>
                        <p>{{ $t(getTextArticle(article, "content.site-description.text")) }}</p>
                    </div>
                </div>
                <div v-if="article == 4" class="col-12">
                    <div>
                        <p>{{ $t(getTextArticle(article, "content.intro")) }}</p>
                        <div v-for="paragraph in 3">
                            <p>{{ $t(getTextArticle(article, "content.events." + String(paragraph))) }}</p>
                        </div>
                    </div>
                </div>
                <div v-else class="col-12">
                    <p>{{ $t(getTextArticle(article, "content")) }}<a v-if="article == 5" href="mailto:{{email}}">{{ email
                    }}</a></p>
                </div>
            </div>
        </article>

    </div>
</template>

<script lang="ts">
import { information } from '../store'
export default {
    data() {
        return {
            email: information.contact.email,
        }
    },
    methods: {
        getTextHeader(headerNumber: number) {
            return 'legalNotice.header.header' + String(headerNumber);
        },
        getTextArticle(articleNumber: number, part: string) {
            return 'legalNotice.article' + String(articleNumber) + '.' + String(part);
        }
    }

}

</script>

<style lang="scss">
@import "../style/style.scss";
</style>
