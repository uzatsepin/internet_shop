<template>
  <div class="catalog-item">
    <div class="catalog-item__image-wrap">
      <img
        class="catalog-item__image"
        :src="product_data.image"
        alt="Product"
      />
    </div>
    <p class="catalog-item__name">{{ product_data.name }}</p>
    <p class="catalog-item__price">Ціна: {{ product_data.price }} грн.</p>
    <button @click="addToCart" class="catalog-item__btn">Add to cart</button>
  </div>
</template>

<script>
export default {
  name: "CatalogItem",
  components: {},
  props: {
    product_data: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  methods: {
    addToCart() {
      this.$emit("sendName", this.product_data.name);
    },
  },
};
</script>

<style lang="scss">
.catalog-item {
  flex-basis: 25%;
  box-shadow: 0 0 4px 0 #e8e8e8;
  padding: 16px;
  margin: 0 auto 16px;
  min-width: 150px;
  @media (max-width: 470px) {
    padding: 8px;
  }

  &__image-wrap {
    width: 200px;
    overflow: hidden;
    margin: 0 auto;
  }

  &__image {
    object-fit: cover;
    object-position: center;
    width: 100%;
    height: 100%;
  }
}
</style>
