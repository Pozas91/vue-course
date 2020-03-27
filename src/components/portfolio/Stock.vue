<template>
  <div class="col-6 col-md-4 mt-3">
    <div class="card">

      <div class="card-header">
        <h5 class="card-title">
          {{stock.name}}
        </h5>

        <h6 class="card-subtitle mb-2 text-muted">(Price: {{stock.price}} | Quantity: {{stock.quantity}})</h6>
      </div>

      <div class="card-body">
        <div class="form-group">
          <label for="quantity"></label>
          <input type="number" class="form-control" placeholder="Quantity" id="quantity" v-model.number="quantity"
                 step="1" :class="{danger: insufficientQuantity}"/>
        </div>

        <button class="btn btn-success" @click="sellStock"
                :disabled="insufficientQuantity || quantity <= 0 || !Number.isInteger(quantity)">
          {{insufficientQuantity ? 'Not enough Stock' : 'Sell'}}
        </button>
      </div>
    </div>
  </div>
</template>

<script>
  import {mapActions} from 'vuex';

  export default {
    props: ['stock'],
    data() {
      return {
        quantity: 0
      }
    },
    computed: {
      insufficientQuantity() {
        return this.quantity > this.stock.quantity;
      }
    },
    methods: {
      ...mapActions({
        placeSellOrder: 'sellStock'
      }),
      sellStock() {
        const order = {
          stockId: this.stock.id,
          stockPrice: this.stock.price,
          quantity: this.quantity
        };

        this.placeSellOrder(order);
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
