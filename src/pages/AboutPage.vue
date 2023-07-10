<template>
    <div>
        <h2>Notre équipe</h2>
        <div class="container">
            <div class="card" v-for="employee in employees" :key="employee.name">
                <img :src="employee.image" :alt="employee.name" style="width:100%">
                <h3>{{ employee.name }}</h3>
                <p>Titre: {{ employee.title }}</p>
                <p>Email: {{ employee.email }}</p>
            </div>
        </div>
    </div>
</template>
  
<script>
export default {
    data() {
        return {
            employees: [
                {
                    name: 'Employee 1',
                    title: 'Directeur',
                    email: 'employee1@example.com',
                    image: 'employee1.jpg'
                },
                {
                    name: 'Employee 2',
                    title: 'Manager',
                    email: 'employee2@example.com',
                    image: 'employee2.jpg'
                },
                {
                    name: 'Employee 3',
                    title: 'Développeur',
                    email: 'employee3@example.com',
                    image: 'employee3.jpg'
                }
            ]
        }
    }
}
</script>
  
<style>
.container {
    display: flex;
    justify-content: center;
}

.card {
    width: 200px;
    margin: 10px;
    text-align: center;
}
</style>
  