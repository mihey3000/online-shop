<template>
  <div id="app" class="shop_wrapper">
    <router-view />
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "App",
  created() {
    this.getProducts();
  },
  methods: {
    ...mapActions(["getProducts"]),
  },
};
</script>

<style lang="scss">
html {
  height: 100%;
  font-size: 18px;
  box-sizing: border-box;
  font-weight: normal;
  margin: 0;
  padding: 0;
}

button {
  cursor: pointer;
}

.shop_wrapper {
  max-width: 1200px;
  height: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  padding: 10px 10px 20px;
}
</style>
