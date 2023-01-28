import { createApp } from "vue";
import { createStore } from "vuex";
import axios from "axios";

const store = createStore({
  state: {
    products: [],
    cart: [],
    sumPrice: 0,
  },
  mutations: {
    SET_PRODUCTS_TO_STATE: (state, products) => {
      state.products = products;
    },
    SET_CART: (state, product) => {
      if (state.cart.length) {
        let isProductExists = false;
        state.cart.map(function (item) {
          if (item.id === product.id) {
            isProductExists = true;
            item.quantity++;
          }
        });
        if (!isProductExists) {
          state.cart.push(product);
        }
      } else {
        state.cart.push(product);
      }
    },
    REMOVE_FROM_CART: (state, id) => {
      state.cart.splice(id, 1);
    },
    SUM_PRICE: (state) => {
      state.sumPrice = state.cart.map((el) => el.price * el.quantity);
    },
  },
  actions: {
    GET_PRODUCTS_FROM_API({ commit }) {
      return axios
        .get("https://63d2e50806556a0fdd4685ef.mockapi.io/Products", {
          method: "GET",
        })
        .then((products) => {
          commit("SET_PRODUCTS_TO_STATE", products.data);
          return products;
        })
        .catch((error) => {
          console.log(error);
          return error;
        });
    },
    ADD_TO_CART({ commit }, product) {
      commit("SET_CART", product);
    },
    DELETE_FROM_CART({ commit }, id) {
      commit("REMOVE_FROM_CART", id);
    },
    SUM_PRICE({ commit }, sumPrice) {
      commit("SUM_PRICE", sumPrice);
    },
  },
  getters: {
    PRODUCTS(state) {
      return state.products;
    },
    CART(state) {
      return state.cart;
    },
    SUM(state) {
      return state.sumPrice;
    },
  },
});

export default store;

const app = createApp({});

app.use(store);
