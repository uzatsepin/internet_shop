<template>
  <div class="catalog-cart">
    <h1>catalog-cart</h1>
    <catalog-item></catalog-item>
  </div>
</template>

<script>
import CatalogItem from "@/components/CatalogItem.vue";

export default {
  name: "CatalogCart",
  components: {
    CatalogItem,
  },
  props: {},
};
</script>

<style></style>
