<template>
  <div>
    <h1>Edit the User</h1>
    <p>Locale: {{$route.query.locale}}</p>
    <p>Analytics: {{$route.query.q}}</p>
  </div>
</template>

<script>
  export default {
    name: "UserEdit"
  }
</script>

<style scoped>

</style>
