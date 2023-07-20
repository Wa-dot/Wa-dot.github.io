<template>
    <div>
        <h2 class="title-page">{{ $t('about-us.header2') }}</h2>
        <div class="container">
            <article class="card" v-for="employee in this.nbOfEmlpoyee" :key="employee.name">
                <div class="card-content">
                    <img :src=this.employeesImg[employee] v-bind:alt=$t(this.getTextAlt(employee)) class="profile-image">
                    <div class="profile-info">
                        <h3>{{ $t(this.getText(employee, '.name')) }}</h3>
                        <p>Titre: {{ $t(this.getText(employee, '.title')) }}</p>
                        <p>Email: {{ $t(this.getText(employee, '.email')) }}</p>
                        <p class="description">{{ $t(this.getText(employee, '.description')) }}</p>
                    </div>
                </div>
            </article>
        </div>
    </div>
</template>
  
<script lang="ts">
import { images, numberInList } from '../store'
export default {
    data() {
        return {
            nbOfEmlpoyee: numberInList.employee,
            employeesImg: images.employee
        }
    },
    methods: {
        getText(employeeNumber: number, value: string) {
            return 'about-us.employee' + String(employeeNumber) + value;
        },
        getTextAlt(employeeNumber: number) {
            return 'about-us.employee' + String(employeeNumber) + '.alt';
        }
    }
}

</script>
  
<style lang="scss">
@import "../style/style.scss";

.container {
    display: block;
}

.card {
    margin: 5% 15% 15px 15%;
}

.card-content {
    display: flex;
}

.profile-image {
    width: 10em;
}

.profile-info {
    margin-left: 20px;
}

.description {
    font-size: larger;
    text-align: justify;
}
</style>
  