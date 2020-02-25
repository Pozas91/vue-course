<template>
  <ul class="nav justify-content-center nav-pills">
    <li role="presentation" class="nav-item">
      <router-link to="/" class="nav-link active">
        Home
      </router-link>
    </li>
    <li role="presentation" class="nav-item">
      <router-link to="/user" class="nav-link">
        User
      </router-link>
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
