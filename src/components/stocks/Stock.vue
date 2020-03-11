<template>
  <div class="col-6 col-md-4 mt-3">
    <div class="card">

      <div class="card-header">
        <h5 class="card-title">
          {{stock.name}}
        </h5>

        <h6 class="card-subtitle mb-2 text-muted">Price: {{stock.price}}</h6>
      </div>

      <div class="card-body">
        <div class="form-group">
          <label for="quantity"></label>
          <input type="number" class="form-control" placeholder="Quantity" id="quantity" v-model="quantity"/>
        </div>

        <button class="btn btn-success" @click="buyStock">
          Buy
        </button>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    props: ['stock'],
    data() {
      return {
        quantity: 0
      }
    },
    methods: {
      buyStock() {
        const order = {
          stockId: this.stock.id,
          stockPrice: this.stockPrice,
          quantity: this.quantity
        };

        console.log(order);

        this.quantity = 0;
      }
    }
  }
</script>

<style scoped>
</style>
