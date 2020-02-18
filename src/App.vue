<template>
  <div class="container">
    <div class="row">
      <div class="col-12">
        <h1>Filters & Mixins</h1>
        <p>{{text | toUppercase | toLowercase }}</p>
        <hr/>
        <button @click="fruits.push('Berries')">Add New Item</button>
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
  import {fruitMixin} from "./fruitMixin";

  export default {
    mixins: [fruitMixin],
    data() {
      return {
        text: 'Hello there!',
      }
    },
    filters: {
      toUppercase(value) {
        return value.toUpperCase();
      }
    },
    components: {
      appList: List
    }
  }
</script>

<style>
</style>
