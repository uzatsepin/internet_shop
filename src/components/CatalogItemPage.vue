<template>
  <div class="product-main" v-for="(product, idx) in currentProduct" :key="idx">
    <div v-if="product" class="product">
      <h3 class="product__title">{{ product.name }}</h3>
      <div class="product__wrapper">
        <div class="product__img">
          <div class="product__img-wrap">
            <img :src="product.image" alt="image" />
          </div>
        </div>
        <div class="product__descr">
          <p class="product__category">
            Категорія: <span> {{ product.category }}</span>
          </p>
          <p class="product__article">
            Артикул: <span>{{ product.article }}</span>
          </p>
          <p class="product__available">в наявності</p>
          <p class="product__price">
            Ціна: <span>{{ product.price }}</span>
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
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  data() {
    return {
      currentProduct: [],
    };
  },
  computed: {
    ...mapGetters(["PRODUCTS"]),
  },
  methods: {
    ...mapActions(["GET_PRODUCTS_FROM_API"]),
  },
  mounted() {
    this.GET_PRODUCTS_FROM_API().then(() => {
      this.currentProduct.push(
        this.PRODUCTS.find(
          (product) => product.article === this.$route.params.id
        )
      );
    });
  },
};
</script>

<style lang="scss">
.product-main {
  background-color: #ffffff;
  border-radius: 15px;
}
.product {
  margin-top: 60px;
  &__error {
    text-align: center;
    color: red;
    font-size: 24px;
    margin-top: 20px;
  }
  &__title {
    color: #2f2d40;
    font-weight: 500;
    font-size: 36px;
    margin-bottom: 40px;
    text-align: center;
    @media (max-width: 390px) {
      font-size: 28px;
      margin-bottom: 20px;
    }
  }
  &__descr {
    display: flex;
    flex-direction: column;
    height: 250px;
    justify-content: space-between;
    @media (max-width: 390px) {
      justify-content: unset;
      margin-top: 20px;
    }
  }
  &__wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    @media (max-width: 390px) {
      flex-direction: column;
      align-items: baseline;
    }
  }
  &__img {
    width: 50%;
    @media (max-width: 390px) {
      width: 100%;
    }
    & img {
      width: 100%;
      height: 100%;
      object-fit: scale-down;
    }
  }
  &__img-wrap {
    width: 490px;
    height: 490px;
    border-radius: 8px;
    overflow: hidden;
    @media (max-width: 390px) {
      width: 250px;
      margin: 0 auto;
      height: auto;
    }
  }
  &__price {
    margin-top: 20px;
    font-weight: 500;
    font-size: 30px;
    color: #2f2d40;
    margin-bottom: 20px;
    & span {
      font-size: 34px;
    }
  }
  &__available {
    margin-top: 20px;
    padding: 10px 15px;
    text-align: center;
    background-color: #00a354;
    border-radius: 30px;
    color: #ffffff;
  }
  &__category span {
    padding: 5px 10px;
    background-color: #5d6578;
    color: #ffffff;
    border-radius: 30px;
  }
  &__article {
    margin-top: 15px;
  }
  &__article span {
    padding: 5px 10px;
    background-color: #424242;
    color: #ffffff;
    border-radius: 30px;
  }
}
</style>
