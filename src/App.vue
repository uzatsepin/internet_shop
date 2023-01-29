<template>
  <header class="header">
    <div class="header__container">
      <router-link :to="{ name: 'catalog' }" class="header__logo">
        Apple
      </router-link>
      <nav class="header__menu menu">
        <div class="menu__body">
          <Slide noOverlay>
            <router-link to="/" id="home">
              <span>Додому</span>
            </router-link>
            <a href="#" id="home">
              <span>Товари</span>
            </a>
            <a href="#" id="home">
              <span>Корзина</span>
            </a>
          </Slide>
          <ul class="menu__list">
            <li class="menu__item">
              <router-link to="/" class="menu__link">Додому</router-link>
            </li>
            <li class="menu__item">
              <a href="#" class="menu__link">Товари</a>
            </li>
            <li class="menu__item">
              <a href="#" class="menu__link">Корзина</a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  </header>
  <catalog-wrapper></catalog-wrapper>
</template>

<script>
import CatalogWrapper from "@/components/CatalogWrapper.vue";
import { Slide } from "vue3-burger-menu";
import "./assets/styles/styles.scss";

export default {
  name: "App",
  components: {
    CatalogWrapper,
    Slide,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
}

.bm-menu {
  background-color: #262c37;
}

.bm-burger-button {
  position: static;
  width: 36px;
  height: 30px;
  top: 20px;
  cursor: pointer;
  left: 85%;
  display: none;
}
@media (max-width: 530px) {
  .bm-burger-button {
    display: block;
  }
}
.bm-burger-bars {
  background-color: #fff;
}

.header {
  width: 100%;
  height: 70px;
  background-color: #262c37;
  border-bottom: 1px solid #394252;
}

.header__container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 15px;
  padding-top: 10px;
  padding-bottom: 10px;
  min-height: 71px;
}

.header__logo {
  font-weight: 700;
  font-size: 24px;
  color: #fff;
  position: relative;
  z-index: 5;
  text-decoration: none;
}

.menu__body {
  position: relative;
  z-index: 5;
}

.menu__list {
  display: flex;
  align-items: center;
  column-gap: 80px;
  row-gap: 5px;
  flex-wrap: wrap;
}

@media (max-width: 530px) {
  .menu__list {
    display: none;
  }
}

.menu__link {
  font-size: 18px;
  font-weight: bold;
  transition: padding 0.3s ease;
}

.menu__item {
  list-style: none;
}

.menu__link:hover {
  padding: 15px;
  background-color: #1d4ed8;
  color: #fff;
  border-radius: 15px;
}

.menu__link {
  text-decoration: none;
  color: #fff;
}
</style>
