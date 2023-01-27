<template>
  <div class="catalog-wrapper">
    <catalog-main></catalog-main>
    <catalog-cart v-if="CART.length" :cart_data="CART" />
  </div>
</template>

<script>
import CatalogMain from "@/components/CatalogMain.vue";
import CatalogCart from "@/components/CatalogCart.vue";
import { mapGetters } from "vuex";
export default {
  name: "CatalogWrapper",
  components: {
    CatalogMain,
    CatalogCart,
  },
  props: {},
  data() {
    return {};
  },
  computed: {
    ...mapGetters(["CART"]),
  },
  methods: {},
  watch: {},
};
</script>

<style lang="scss">
.catalog-wrapper {
  max-width: 1410px;
  padding: 0 15px;
  margin: 0 auto;
}
</style>
