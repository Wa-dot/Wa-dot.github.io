<template>
    <div>
        <h1>Dernier post de ma page Facebook</h1>
        <div v-if="loading">
            Chargement...
        </div>
        <div v-else>
            <h2>{{ post.from.name }}</h2>
            <p>{{ post.message }}</p>
        </div>
    </div>
</template>
  
<script>
import axios from 'axios';
import FB from 

export default {
    name: 'Feedfb',
    data() {
        return {
            loading: true,
            post: null
        };
    },
    async created() {
        try {
            await FB.api(
                '/me',
                'GET',
                { "fields": "id,name,feed{description,full_picture}", "transport": "cors" },
                function (response) {
                    console.log("coucou")
                }
            );
            this.post = response.data.data[0];
        } catch (error) {
            console.error(error);
        } finally {
            this.loading = false;
        }
    }

};
</script>
  