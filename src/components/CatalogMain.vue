<template>
  <div class="catalog">
    <router-link :to="{ name: 'cart' }">
      <div class="catalog__link">Cart: {{ CART.length }}</div>
    </router-link>
    <h1>Список товарів</h1>
    <div class="catalog__list">
      <catalog-item
        v-for="product in PRODUCTS"
        :key="product.id"
        :product_data="product"
        @addToCart="addToCart"
      />
    </div>
  </div>
</template>

<script>
import CatalogItem from "@/components/CatalogItem.vue";
import { mapActions, mapGetters } from "vuex";

export default {
  name: "CatalogMain",
  components: {
    CatalogItem,
  },
  data() {
    return {};
  },
  computed: {
    ...mapGetters(["PRODUCTS", "CART"]),
  },
  methods: {
    ...mapActions(["GET_PRODUCTS_FROM_API", "ADD_TO_CART"]),
    addToCart(data) {
      this.ADD_TO_CART(data);
    },
  },
  mounted() {
    this.GET_PRODUCTS_FROM_API();
  },
};
</script>

<style lang="scss">
.catalog {
  padding-top: 60px;

  &__list {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    gap: 50px;
  }
  &__link {
    position: absolute;
    top: 80px;
    right: 21%;
    padding: 16px;
    border: 1px solid #ddd;
    cursor: pointer;
  }
}
</style>
