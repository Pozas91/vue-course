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
        <hr/>
        <button class="btn btn-primary" @click="fetchData">Get Data</button>
        <ul class="list-group">
          <li class="list-group-item" v-for="u in users">{{u.username}} - {{u.email}}</li>
        </ul>
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
        },
        users: []
      };
    },
    methods: {
      submit() {
        this.$http
          .post('', this.user)
          .then(response => {
            console.log(response);
          }, error => {
            console.log(error);
          });
      },
      fetchData() {
        this.$http
          .get('')
          .then(response => {
            const data = response.json();
            return data;
          })
          .then(data => {
            const resultArray = [];

            for (let key in data) {
              resultArray.push(data[key])
            }

            this.users = resultArray;
          });
      }
    }
  }
</script>

<style>
</style>
