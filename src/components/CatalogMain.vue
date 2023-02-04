<template>
  <div class="catalog">
    <div class="catalog__wrapper">
      <router-link :to="{ name: 'cart' }">
        <div class="catalog__link button button--cart">
          <span>{{ cartTotalCost }} ₴</span>
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
      <div class="catalog__search">
        <span class="catalog__search-icon"><fa icon="search"></fa></span>
        <input
          type="search"
          id="search"
          placeholder="Пошук.."
          v-model="filter"
          @keydown.enter="onSearch"
        />
      </div>
      <h1>Список товарів</h1>
    </div>
    <div class="catalog__list">
      <catalog-item
        v-for="product in filterProduct"
        :key="product.id"
        :product_data="product"
        @addToCart="addToCart"
      />
      <div class="catalog__empty" v-if="filterProduct.length <= 0">
        <h2 class="catalog__empty-title">
          Нічого не знайдено Повторіть свій запит
        </h2>
        <img
          src="../assets/img/search-empty.webp"
          alt="empty cart"
          class="catalog__empty-img"
        />
      </div>
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
    ...mapGetters(["PRODUCTS", "CART"]),
    filterProduct() {
      return this.PRODUCTS.filter((products) =>
        products.name.toLowerCase().includes(this.filter.toLowerCase())
      );
    },
    cartTotalCost() {
      let cartTotalCost = [0];

      for (let item of this.CART) {
        cartTotalCost.push(item.price * item.quantity);
      }
      cartTotalCost = cartTotalCost?.reduce(function (sum, el) {
        return sum + el;
      });
      return cartTotalCost;
    },
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
  &__search {
    position: relative;
    vertical-align: middle;
    white-space: nowrap;
    & input#search {
      width: 70px;
      height: 50px;
      background: #eaeaea;
      border: none;
      font-size: 16px;
      float: left;
      padding-left: 35px;
      -webkit-border-radius: 5px;
      -moz-border-radius: 5px;
      border-radius: 5px;
      color: #262c37;
      -webkit-transition: width 0.55s ease;
      -moz-transition: width 0.55s ease;
      -ms-transition: width 0.55s ease;
      -o-transition: width 0.55s ease;
      transition: width 0.55s ease;
      &:focus,
      &:active {
        outline: none;
        width: 250px;
      }
      &:hover {
        outline: none;
      }
    }
  }
  &__search-icon {
    position: absolute;
    top: 0;
    margin-left: 10px;
    margin-top: 16px;
    z-index: 1;
    color: #4f5b66;
  }
  &__empty {
    margin-top: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  &__empty-title {
    text-align: center;
  }
}
</style>
