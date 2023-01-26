<template>
  <div class="catalog">
    <h1>Список товарів</h1>
    <div class="catalog__list">
      <catalog-item
        v-for="product in PRODUCTS"
        :key="product.id"
        :product_data="product"
        @sendName="showName"
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
    ...mapGetters(["PRODUCTS"]),
  },
  methods: {
    ...mapActions(["GET_PRODUCTS_FROM_API"]),
    showName(data) {
      console.log(data);
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
}
</style>
