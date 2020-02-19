<template>
  <div class="container">
    <div class="row">
      <div class="col-12">
        <h1>Animations and Transitions</h1>
        <hr>
        <button class="btn btn-primary" @click="show = !show">Show Alert</button>
        <br/> <br/>
        <transition name="fade">
          <div class="alert alert-info" v-if="show">This is some info</div>
        </transition>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        show: false
      }
    }
  }
</script>

<style>
  .fade-enter {
    opacity: 0;
  }

  .fade-enter-active {
    transition: opacity 1s;
  }

  .fade-leave {
    /*opacity: 0;*/
  }

  .fade-leave-active {
    transition: opacity 1s;
    opacity: 0;
  }
</style>
