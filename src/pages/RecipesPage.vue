<template>
    <div>
      <table class="table borderless">
        <thead>
          <tr>
            <th scope="col">Ingrédients</th>
            <th scope="col">Quantités</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(ingredient, index) in ingredients" :key="index">
            <td>{{ ingredient.name }}</td>
            <td>{{ ingredient.quantity }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        ingredients: [
          { name: 'Poulet entier', quantity: '1' },
          { name: 'Beurre', quantity: '50g' },
          // Ajoutez plus d'ingrédients ici...
        ],
      };
    },
  };
  </script>
  
  <style scoped>
  .table.borderless td,
  .table.borderless th {
    border: none;
  }
  @media screen and (max-width: 1029px) {
    
  }
  </style>
  