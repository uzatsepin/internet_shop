<template>
  <div class="cart-item-wrapper">
    <div class="cart-item-inner">
      <catalog-cart-item
        v-for="(item, idx) in cart_data"
        :key="item.id"
        :cart_item_data="item"
        @deleteFromCart="deleteFromCart(idx)"
        @incrementItem="incrementItem(idx)"
        @decrementItem="decrementItem(idx)"
      />
    </div>
    <div class="cart-item-wrapper__total">
      <p class="cart-item-wrapper__total-title">Загальна вартість:</p>
      <p class="cart-item-wrapper__total-price">{{ cartTotalCost }} грн</p>
    </div>
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
    ...mapActions([
      "DELETE_FROM_CART",
      "INCREMENT_CART_ITEM",
      "DECREMENT_CART_ITEM",
    ]),
    decrementItem(idx) {
      this.DECREMENT_CART_ITEM(idx);
    },
    incrementItem(idx) {
      this.INCREMENT_CART_ITEM(idx);
    },
    deleteFromCart(idx) {
      this.DELETE_FROM_CART(idx);
    },
  },
  computed: {
    cartTotalCost() {
      let cartTotalCost = [];

      for (let item of this.cart_data) {
        cartTotalCost.push(item.price * item.quantity);
      }
      cartTotalCost = cartTotalCost.reduce(function (sum, el) {
        return sum + el;
      });
      return cartTotalCost;
    },
  },
};
</script>

<style lang="scss">
@import "../assets/styles/variables.scss";
.cart-item-wrapper {
  display: flex;
  flex-direction: column;
  &__total {
    margin: 40px auto 0 auto;
    display: flex;
    font-size: 22px;
  }
  &__total-price {
    margin-left: 10px;
    font-weight: bold;
    color: $mainBlue;
    font-size: 24px;
  }
}
</style>
