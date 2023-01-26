<template>
  <div class="catalog-wrapper">
    <catalog-main></catalog-main>
    <catalog-cart></catalog-cart>
  </div>
</template>

<script>
import CatalogMain from "@/components/CatalogMain.vue";
import CatalogCart from "@/components/CatalogCart.vue";

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
  computed: {},
  methods: {},
  watch: {},
};
</script>

<style lang="scss">
.catalog-wrapper {
  width: 1410px;
  padding: 0 15px;
  margin: 0 auto;
}
</style>
