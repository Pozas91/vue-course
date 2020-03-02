<template>
  <ul class="nav justify-content-center nav-pills">
    <li role="presentation" class="nav-item">
      <router-link to="/" class="nav-link" tag="li" active-class="active" exact>Home</router-link>
    </li>
    <li role="presentation" class="nav-item">
      <router-link to="/user/1" class="nav-link" tag="li" active-class="active">User 1</router-link>
    </li>
    <li role="presentation" class="nav-item">
      <router-link to="/user/2" class="nav-link" tag="li" active-class="active">User 2</router-link>
    </li>
  </ul>
</template>

<script>
  export default {
    name: "Header"
  }
</script>

<style scoped>

</style>
