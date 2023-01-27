<template>
  <div class="catalog-item">
    <div class="catalog-item__image-wrap">
      <a href="#">
        <img
          class="catalog-item__image"
          :src="product_data.image"
          alt="Product"
      /></a>
    </div>
    <div class="catalog-item__info">
      <a href="#">
        <p class="catalog-item__name">{{ product_data.name }}</p>
      </a>
      <div class="catalog-item__action">
        <p class="catalog-item__price">
          {{ product_data.price }}
          <span>грн</span>
        </p>
        <button @click="addToCart" class="catalog-item__btn">
          <span>Купити</span>
        </button>
      </div>
    </div>
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
      this.$emit("addToCart", this.product_data);
    },
  },
};
</script>

<style lang="scss">
.catalog-item {
  width: 100%;
  max-width: 24rem;
  border: 1px solid #e5e7eb;
  border-radius: 0.5rem;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
  min-height: 450.57px;
  display: flex;
  flex-direction: column;
  @media (max-width: 390px) {
    max-width: 375px;
  }

  &__image-wrap {
    padding: 2rem;
    margin: 0 auto;
  }

  &__image {
    max-height: 180px;
  }

  &__info {
    padding: 1.2rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 202px;

    & a {
      text-decoration: none;
      color: #1f2937;
      font-weight: bold;
      transition: color 0.3s ease;

      &:hover {
        color: #1e40af;
      }
    }
  }

  &__action {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  &__name {
    font-size: 22px;
    text-align: center;
    text-decoration: none;
  }

  &__price {
    font-size: 24px;
    line-height: 24px;
    font-weight: 700;
    color: #111827;
  }

  &__btn {
    color: #ffffff;
    background-color: #1d4ed8;
    font-weight: 500;
    border-radius: 0.5rem;
    font-size: 1.245rem;
    line-height: 1.25rem;
    padding: 0.625rem 1.25rem;
    text-align: center;
    border: none;
    transition: background-color 0.3s ease;
    cursor: pointer;

    &:hover {
      background-color: #1e40af;
    }

    &:focus {
      box-shadow: var(--tw-ring-inset) 0 0 0
        calc(4px + var(--tw-ring-offset-width)) var(--tw-ring-color);
    }

    & span {
      padding-right: 34px;
      display: inline-block;
      background: url("../assets/img/cart.svg") right no-repeat;
      color: white;
    }
  }
}
</style>
