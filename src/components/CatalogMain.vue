<template>
  <div class="catalog">
    <div class="catalog__wrapper">
      <router-link :to="{ name: 'cart' }">
        <div class="catalog__link button button--cart">
          <span>{{ SUM.toString() }} ₴</span>
          <div class="button__delimiter"></div>
          <svg
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6.33333 16.3333C7.06971 16.3333 7.66667 15.7364 7.66667 15C7.66667 14.2636 7.06971 13.6667 6.33333 13.6667C5.59695 13.6667 5 14.2636 5 15C5 15.7364 5.59695 16.3333 6.33333 16.3333Z"
              stroke="white"
              stroke-width="1.8"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
            <path
              d="M14.3333 16.3333C15.0697 16.3333 15.6667 15.7364 15.6667 15C15.6667 14.2636 15.0697 13.6667 14.3333 13.6667C13.597 13.6667 13 14.2636 13 15C13 15.7364 13.597 16.3333 14.3333 16.3333Z"
              stroke="white"
              stroke-width="1.8"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
            <path
              d="M4.78002 4.99999H16.3334L15.2134 10.5933C15.1524 10.9003 14.9854 11.176 14.7417 11.3722C14.4979 11.5684 14.1929 11.6727 13.88 11.6667H6.83335C6.50781 11.6694 6.1925 11.553 5.94689 11.3393C5.70128 11.1256 5.54233 10.8295 5.50002 10.5067L4.48669 2.82666C4.44466 2.50615 4.28764 2.21182 4.04482 1.99844C3.80201 1.78505 3.48994 1.66715 3.16669 1.66666H1.66669"
              stroke="white"
              stroke-width="1.8"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
          </svg>
          <span>{{ CART.length }}</span>
        </div>
      </router-link>
      <input
        class="catalog__link-input"
        type="text"
        placeholder="Пошук товарів..."
        v-model="filter"
      />
      <h1>Список товарів</h1>
    </div>
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
    return {
      filter: "",
    };
  },
  computed: {
    ...mapGetters(["PRODUCTS", "CART", "SUM"]),
  },
  methods: {
    ...mapActions(["GET_PRODUCTS_FROM_API", "ADD_TO_CART", "SUM_PRICE"]),

    addToCart(data) {
      this.ADD_TO_CART(data);
      this.$store.commit("SUM_PRICE");
      console.log(this.$store.state.sumPrice);
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
  &__wrapper {
    display: flex;
    flex-direction: row-reverse;
    justify-content: space-between;
    margin-bottom: 30px;
    @media (max-width: 390px) {
      flex-direction: column;
      align-items: center;
      gap: 20px;
    }
  }
  &__list {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    gap: 40px;
  }
  &__link {
    display: flex;
    align-items: center;
    cursor: pointer;
  }
  &__link-input {
    box-sizing: border-box;
    height: 50px;
    width: 250px;
    padding: 12.5px;
    outline: none;
    border: none;
    border-radius: 25px;
    box-shadow: 0 2px 5px rgba(15, 15, 51, 0.4);
    font-size: 18px;
    color: #262c37;
    background-color: #ffffff;
    transition: 0.4s;
    &:hover,
    :focus {
      width: 300px;
      border-radius: 10px;
      box-shadow: 0 5px 5px rgba(15, 15, 51, 0.4);
    }

    &:not(:placeholder-shown) {
      margin-bottom: 10px;
      border-bottom: 6px solid #1e40af;
      height: 69px;
    }
  }
}
</style>
