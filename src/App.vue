<template>
  <div class="container">
    <div class="row">
      <div class="col-12">
        <h1>Http</h1>
        <div class="form-group">
          <label>Username</label>
          <input class="form-control" type="text" v-model="user.username"/>
        </div>
        <div class="form-group">
          <label>Mail</label>
          <input type="text" class="form-control" v-model="user.email"/>
        </div>
        <button class="btn btn-primary" @click="submit">Submit</button>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        user: {
          username: '',
          email: ''
        }
      };
    },
    methods: {
      submit() {
        this.$http
          .post('https://curso-vue-cd4c5.firebaseio.com/data.json', this.user)
          .then(response => {
            console.log(response);
          }, error => {
            console.log(error);
          });
      }
    }
  }
</script>

<style>
</style>
