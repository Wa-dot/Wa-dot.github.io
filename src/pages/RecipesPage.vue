<template>
  <div>
      <div class="container">
          
      </div>
  </div>
</template>

<script lang="ts">
export default {
  

}

</script>

<style lang="scss">
@import "../style/style.scss";

.little-media {
  display: none;
}

.container {
  padding-top: 15px;
  display: block;
  text-align: left;
}

.card {
  margin: 5% 15% 15px 15%;
}

.card-content {
  display: flex;
}

.profile-image-right {
  margin-left: 20px;
}

.profile-image-left {
  margin-right: 20px;
}

.category {
  color: $grey;
  font-size: small;
}

.description {
  padding-top: 20px;
  text-align: justify;
}

@media (max-width: 799px) {
  .card-content {
      padding: 20px 5px 20px 5px;
      text-align: center;
  }

  .profile-info {
      position: flex;
      text-align: left;
  }

  .little-media {
      text-align: center;
      margin: auto;
      display: flex;
      width: max-content;
  }

  .profile-image-right,
  .profile-image-left {
      display: none;
  }

  .card {
      margin: 5% 5% 15px 5%;
  }
}
</style>
