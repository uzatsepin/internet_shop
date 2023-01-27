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
          <span>
            Купити
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M8.5 19C9.32843 19 10 19.6716 10 20.5C10 21.3284 9.32843 22 8.5 22C7.67157 22 7 21.3284 7 20.5C7 19.6716 7.67157 19 8.5 19ZM17.5 19C18.3284 19 19 19.6716 19 20.5C19 21.3284 18.3284 22 17.5 22C16.6716 22 16 21.3284 16 20.5C16 19.6716 16.6716 19 17.5 19ZM3 2H5C5.4556 2 5.84831 2.30684 5.96506 2.73774L5.98837 2.84794L6.4733 6H21C21.5998 6 22.0549 6.52068 21.9951 7.10035L21.9762 7.21693L20.3242 14.6508C20.0325 15.9637 18.9059 16.9143 17.5779 16.9945L17.3957 17H8.71584C7.29435 17 6.07697 16.0044 5.78265 14.6299L5.75072 14.4562L4.14208 4H3C2.44772 4 2 3.55228 2 3C2 2.48716 2.38604 2.06449 2.88338 2.00673L3 2H5H3ZM19.7534 8H6.781L7.72747 14.1521C7.79674 14.6024 8.15973 14.9438 8.60337 14.9937L8.71584 15H17.3957C17.8253 15 18.2021 14.7265 18.3402 14.3285L18.3718 14.2169L19.7534 8Z"
              />
            </svg>
          </span>
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
  transition: all 0.3s ease-in-out;
  cursor: pointer;
  &:hover {
    transform: scale(1.02);
  }
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
    color: #111827;
    border: 2px solid #1d4ed8;
    background-color: #ffffff;
    font-weight: 500;
    border-radius: 40px;
    font-size: 1.245rem;
    line-height: 1.25rem;
    padding: 10px 20px;
    text-align: center;
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
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
      gap: 10px;
      color: #1d4ed8;
      transition: all 0.3s ease-in-out;
      & svg {
        fill: #1d4ed8;
        transition: all 0.3s ease-in-out;
      }
      &:hover {
        color: #fff;
        & svg {
          fill: #ffffff;
        }
      }
    }
  }
}
</style>
