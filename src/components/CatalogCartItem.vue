<template>
  <div class="catalog-cart-item">
    <div class="catalog-cart-item__wrap">
      <img
        :src="cart_item_data.image"
        alt="Product"
        class="catalog-cart-item__image"
      />
      <div class="catalog-cart-item__info">
        <h3 class="catalog-cart-item__title">{{ cart_item_data.name }}</h3>
        <p class="catalog-cart-item__subtitle">
          Артикул: {{ cart_item_data.article }}
        </p>
      </div>
    </div>

    <div class="catalog-cart-item__inner">
      <div class="catalog-cart-item__quantity">
        <button
          class="button button--outline button--circle cart__item-count-minus"
        >
          <svg
            width="10"
            height="2"
            viewBox="0 0 10 2"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M4.04019 0.0399933H8.84019C9.37035 0.0399933 9.80019 0.469833 9.80019 0.999993C9.80019 1.53015 9.37035 1.95999 8.84019 1.95999H4.04019H1.1602C0.630035 1.95999 0.200195 1.53015 0.200195 0.999993C0.200195 0.469833 0.630035 0.0399933 1.1602 0.0399933H4.04019Z"
              fill="#FE5F1E"
            />
          </svg>
        </button>
        <b>{{ cart_item_data.quantity }}</b>
        <button
          class="button button--outline button--circle cart__item-count-plus"
        >
          <svg
            width="10"
            height="10"
            viewBox="0 0 10 10"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M5.92001 3.84V5.76V8.64C5.92001 9.17016 5.49017 9.6 4.96001 9.6C4.42985 9.6 4.00001 9.17016 4.00001 8.64L4 5.76L4.00001 3.84V0.96C4.00001 0.42984 4.42985 0 4.96001 0C5.49017 0 5.92001 0.42984 5.92001 0.96V3.84Z"
              fill="#EB5A1E"
            ></path>
            <path
              d="M5.75998 5.92001L3.83998 5.92001L0.959977 5.92001C0.429817 5.92001 -2.29533e-05 5.49017 -2.29301e-05 4.96001C-2.2907e-05 4.42985 0.429817 4.00001 0.959977 4.00001L3.83998 4L5.75998 4.00001L8.63998 4.00001C9.17014 4.00001 9.59998 4.42985 9.59998 4.96001C9.59998 5.49017 9.17014 5.92001 8.63998 5.92001L5.75998 5.92001Z"
              fill="#EB5A1E"
            ></path>
          </svg>
        </button>
      </div>
      <div class="catalog-cart-item__price">
        <b>{{ cart_item_data.price }}</b>
      </div>
      <div class="catalog-cart-item__remove">
        <button
          class="button button--outline button--circle button--delete"
          @click="deleteFromCart"
        >
          <svg
            width="10"
            height="9"
            viewBox="0 0 10 9"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M8.74791 6.95572L6.49931 4.70712L8.74791 2.45852C9.16184 2.04459 9.16184 1.37338 8.74791 0.959454C8.33398 0.545525 7.66277 0.545525 7.24884 0.959454L5.00024 3.20805L2.75164 0.959454C2.33771 0.545525 1.66651 0.545525 1.25258 0.959454C0.838648 1.37338 0.838648 2.04459 1.25258 2.45852L3.50118 4.70712L1.25258 6.95572C0.838649 7.36965 0.838649 8.04086 1.25258 8.45479C1.66651 8.86872 2.33772 8.86872 2.75164 8.45479L5.00024 6.20619L7.24884 8.45479C7.66277 8.86872 8.33398 8.86872 8.74791 8.45479C9.16184 8.04086 9.16184 7.36965 8.74791 6.95572Z"
              fill="#D0D0D0"
            />
          </svg>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CatalogCartItem",
  components: {},
  props: {
    cart_item_data: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  methods: {
    deleteFromCart() {
      this.$emit("deleteFromCart");
    },
  },
};
</script>

<style lang="scss">
@import "../assets/styles/styles.scss";
.catalog-cart-item {
  max-width: 960px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 30px 0;
  border-bottom: 1px solid #262c37;
  @media (max-width: 520px) {
    display: block;
  }
  &__wrap {
    display: flex;
    align-items: center;
    gap: 20px;
  }
  &__inner {
    display: flex;
    gap: 20px;
    align-items: center;
    @media (max-width: 520px) {
      justify-content: center;
    }
  }
  &__image {
    width: 100px;
  }
  &__title {
    color: $black;
    margin-bottom: 10px;
    max-width: 330px;
  }
  &__subtitle {
    color: #8d8d8d;
    font-size: 18px;
  }
  &__quantity {
    display: flex;
    align-items: center;
    gap: 12px;
    @media (max-width: 520px) {
      justify-content: center;
    }
  }
  b {
    font-size: 22px;
    font-weight: 700;
    line-height: 27px;
    letter-spacing: 0.01em;
  }
  &__price {
    & b {
      font-size: 24px;
    }
  }
}
</style>
