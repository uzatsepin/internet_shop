<template>
  <div class="product-main" v-for="(product, idx) in currentProduct" :key="idx">
    <div v-if="!product" class="product__error">Сторінку оновлено, це баг</div>
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
          <p class="product__available">в наявності</p>
          <p class="product__price">
            Ціна: <span>{{ product.price }}</span>
          </p>
          <p class="product__article">{{ product.aricle }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      currentProduct: [],
    };
  },
  computed: {
    ...mapGetters(["PRODUCTS"]),
  },
  mounted() {
    this.currentProduct.push(
      this.PRODUCTS.find((product) => product.article === this.$route.params.id)
    );
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
  }
  &__descr {
    display: flex;
    flex-direction: column;
    height: 250px;
    justify-content: space-between;
    @media (max-width: 390px) {
      justify-content: unset;
    }
  }
  &__wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    @media (max-width: 390px) {
      flex-direction: column;
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
      width: 330px;
      margin: 0 auto;
    }
  }
  &__price {
    margin-top: 20px;
    font-weight: 500;
    font-size: 30px;
    color: #2f2d40;
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
}
</style>
