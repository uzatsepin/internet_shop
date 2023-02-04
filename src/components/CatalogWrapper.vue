<template>
  <div class="catalog-wrapper">
    <router-view />
  </div>
</template>

<script>
// import CatalogCart from "@/components/CatalogCart.vue";
import { mapGetters } from "vuex";
export default {
  name: "CatalogWrapper",
  components: {},
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
