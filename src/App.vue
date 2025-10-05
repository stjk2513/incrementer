<script>
export default {
  computed: {
    count() {
      return this.$store.getters.count;
    },
  },
  methods: {
    increment() {
      this.$store.dispatch("increment");
    },
    decrement() {
      this.$store.dispatch("decrement");
    },
    reset() {
      this.$store.dispatch("reset");
    },
  },
};
</script>

<template>
  <h1>{{ count }}</h1>
  <div>
    <button data-testid="increment-btn" @click="increment">+</button>
    <button data-testid="decrement-btn" @click="decrement">-</button>
  </div>
  <div><button data-testid="reset-btn" @click="reset">reset</button></div>
</template>
