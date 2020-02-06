<template>
  <div class="container">
    <app-new-quote @quoteAdded="newQuote"></app-new-quote>
    <app-quote-grid :quotes="quotes"></app-quote-grid>
  </div>
</template>

<script>
  import QuoteGrid from "./components/QuoteGrid";
  import NewQuote from "./components/NewQuote";

  export default {
    data: function () {
      return {
        quotes: [
          'Just a Quote to see something'
        ],
        maxQuotes: 10
      }
    },
    methods: {
      newQuote(quote) {
        this.quotes.push(quote);
      }
    },
    components: {
      appQuoteGrid: QuoteGrid,
      appNewQuote: NewQuote
    }
  }
</script>

<style>
</style>
