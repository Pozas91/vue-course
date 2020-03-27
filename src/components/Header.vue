<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">

    <router-link to="/" class="navbar-brand">Stock Trader</router-link>

    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav mr-auto">
        <router-link to="/portfolio" activeClass="active" tag="li" class="nav-item">
          <a class="nav-link">Portfolio</a>
        </router-link>

        <router-link to="/stocks" activeClass="active" tag="li" class="nav-item">
          <a class="nav-link">Stocks</a>
        </router-link>
      </ul>

      <ul class="navbar-nav ml-auto">
        <li class="nav-item">
          <a href="#" @click="endDay" class="nav-link">
            End Day
          </a>
        </li>
        <li class="nav-item dropdown" :class="{open: isDropdownOpen}" @click="isDropdownOpen = !isDropdownOpen">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown"
             aria-haspopup="true" aria-expanded="false">
            Save Data
          </a>
          <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
            <a class="dropdown-item" href="#">Save Data</a>
            <a class="dropdown-item" href="#">Load Data</a>
          </div>
        </li>

        <strong class="navbar-text navbar-right">Funds: {{funds | currency}}</strong>
      </ul>
    </div>
  </nav>
</template>

<script>
  import {mapActions} from 'vuex';

  export default {
    data() {
      return {
        isDropdownOpen: false
      }
    },
    computed: {
      funds() {
        return this.$store.getters.funds;
      }
    },
    methods: {
      ...mapActions([
        'randomizeStocks'
      ]),
      endDay() {
        this.randomizeStocks();
      }
    }
  }
</script>

<style scoped>

</style>
