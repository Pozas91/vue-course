<template>
  <div class="container">
    <div class="row">
      <div class="col-12">
        <h1>Filters & Mixins</h1>
        <p>{{text | toUppercase | toLowercase }}</p>
        <hr/>
        <input v-model="filterText">
        <ul>
          <li v-for="fruit in filteredFruits">{{fruit}}</li>
        </ul>
        <hr/>
        <app-list></app-list>
      </div>
    </div>
  </div>
</template>

<script>
  import List from "./List";

  export default {
    data() {
      return {
        text: 'Hello there!',
        fruits: ['Apple', 'Banana', 'Mango', 'Melon'],
        filterText: ''
      }
    },
    filters: {
      toUppercase(value) {
        return value.toUpperCase();
      }
    },
    computed: {
      filteredFruits() {
        return this.fruits.filter((element) => {
          return element.match(this.filterText);
        });
      }
    },
    components: {
      appList: List
    }
  }
</script>

<style>
</style>
