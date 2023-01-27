<template>
  <div class="cart-item-wrapper">
    <catalog-cart-item
      v-for="(item, idx) in cart_data"
      :key="item.id"
      :cart_item_data="item"
      @deleteFromCart="deleteFromCart(idx)"
    />
  </div>
</template>

<script>
import CatalogCartItem from "@/components/CatalogCartItem.vue";
import { mapActions } from "vuex";
export default {
  name: "CartItemWrapper",
  components: {
    CatalogCartItem,
  },
  props: {
    cart_data: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  methods: {
    ...mapActions(["DELETE_FROM_CART"]),
    deleteFromCart(idx) {
      this.DELETE_FROM_CART(idx);
    },
  },
};
</script>

<style lang="scss"></style>
