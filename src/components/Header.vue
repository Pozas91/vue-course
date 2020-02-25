<template>
  <ul class="nav justify-content-center nav-pills">
    <li role="presentation" class="nav-item">
      <router-link to="/" class="nav-link" tag="li" active-class="active" exact>Home</router-link>
    </li>
    <li role="presentation" class="nav-item">
      <router-link to="/user" class="nav-link" tag="li" active-class="active">User</router-link>
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
