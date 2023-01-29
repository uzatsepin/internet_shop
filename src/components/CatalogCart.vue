<template>
  <div class="catalog-cart">
    <div class="catalog-cart__empty" v-if="!CART.length">
      <h3 class="catalog-cart__title">Корзина порожня 😞</h3>
      <p class="catalog-cart__descr">
        Скоріш за все, ви ще нічого не додали у корзину <br />
        Для того, щоб щось купити, поверніться на голову на оберіть товар
      </p>
      <img
        class="catalog-cart__img"
        src="../assets/img/empty-cart.png"
        alt="Cart Empty"
      />
      <router-link class="catalog-cart__btn" :to="{ name: 'catalog' }">
        Назад
      </router-link>
    </div>
    <cart-item-wrapper v-if="CART.length" :cart_data="CART" />
  </div>
</template>

<script>
import CartItemWrapper from "@/components/CartItemWrapper.vue";
import { mapGetters } from "vuex";
export default {
  name: "CatalogCart",
  components: {
    CartItemWrapper,
  },
  computed: {
    ...mapGetters(["CART"]),
  },
};
</script>

<style lang="scss">
.catalog-cart {
  padding-top: 30px;
  &__empty {
    margin: 80px auto;
    widows: 620px;
    text-align: center;
  }
  &__title {
    font-size: 36px;
    font-weight: 700;
    margin-bottom: 15px;
  }
  &__descr {
    font-size: 20px;
    line-height: 145.4%;
    letter-spacing: 0.01rem;
    color: #777777;
  }
  &__img {
    display: block;
    width: 500px;
    margin: 45px auto 60px;
    @media (max-width: 520px) {
      width: 350px;
    }
  }
  &__btn {
    padding: 12px 0 14px;
    width: 230px;
    margin: 0 auto;
    font-weight: 600;
    font-size: 18px;
    background-color: #1e40af;
    display: inline-block;
    border-radius: 30px;
    min-width: 100px;
    text-align: center;
    cursor: pointer;
    transition: background-color 0.3s ease-in-out, border-color 0.3s ease-in-out;
    border: 1px solid transparent;
    text-decoration: none;
    color: #ffffff;
    &:hover {
      background-color: #ffffff;
      color: #1f2937;
      border: 2px solid #1e40af;
    }
  }
}
</style>
