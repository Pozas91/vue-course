<template>
  <div>
    <h1>Edit the User</h1>
    <p>Locale: {{$route.query.locale}}</p>
    <p>Analytics: {{$route.query.q}}</p>
    <hr/>
    <button class="btn btn-primary">Confirm</button>
    <div style="height: 700px"></div>
    <p id="data">Some extra Data</p>
  </div>
</template>

<script>
  export default {
    name: "UserEdit"
  }
</script>

<style scoped>

</style>
