<template>
  <div class="container">
    <div class="row">
      <div class="col-12">
        <h1>Filters & Mixins</h1>
        <p>{{text | toUppercase }}</p>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        text: 'Hello there!'
      }
    },
    filters: {
      toUppercase(value) {
        return value.toUpperCase();
      }
    }
  }
</script>

<style>
</style>
