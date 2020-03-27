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
          <input type="number" class="form-control" placeholder="Quantity" id="quantity" v-model.number="quantity"
                 step="1" :class="{danger: insufficientFunds}"/>
        </div>

        <button class="btn btn-success" @click="buyStock"
                :disabled="insufficientFunds || quantity <= 0 || !Number.isInteger(quantity)">
          {{insufficientFunds ? 'Insufficient Funds' : 'Buy'}}
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
    computed: {
      funds() {
        return this.$store.getters.funds;
      },
      insufficientFunds() {
        return (this.quantity * this.stock.price) > this.funds;
      }
    },
    methods: {
      buyStock() {
        const order = {
          stockId: this.stock.id,
          stockPrice: this.stock.price,
          quantity: this.quantity
        };

        console.log(order);
        this.$store.dispatch('buyStock', order);
        this.quantity = 0;
      }
    }
  }
</script>

<style scoped>
  .danger {
    border: 1px solid red;
  }
</style>
