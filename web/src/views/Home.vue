<template>
  <div class="home">
    <div class="hero-container">
      <div class="hero-container__title">Storr</div>
      <div class="hero-container__subtitle">
        Created by people. Powered by Brands.
      </div>
    </div>

    <div class="title">Top Products</div>

    <div class="filter-bar">
      <div class="filter-bar__option">Women's Shoes</div>
      <div class="filter-bar__option">Men's Shoes</div>
      <div class="filter-bar__option">Women's Tops</div>
      <div class="filter-bar__option">Men's Tops</div>
      <div class="filter-bar__option">Sports</div>
      <div class="filter-bar__option">Kids</div>
    </div>

    <div class="products-container">
      <Product
        v-for="product in topProducts"
        :key="product.id"
        :product="product"
      />
    </div>

    <div class="title">Recommended For You</div>

    <div class="products-container">
      <Product
        v-for="product in recommendedProducts"
        :key="product.id"
        :product="product"
      />
    </div>
  </div>
</template>

<script>
import { Component, Vue } from "vue-property-decorator";
import Product from "@/components/Product.vue";
import gql from "graphql-tag";

@Component({
  components: {
    Product
  },
  apollo: {
    products: gql`
      query {
        products: listProducts {
          id
          name
          imageURL
          price
          discountPrice
          description
          brand
          brandUrl
        }
      }
    `
  }
})
export default class Home extends Vue {
  products = [];

  get topProducts() {
    return this.products.slice(0, 6);
  }

  get recommendedProducts() {
    return this.products.slice(24, 42);
  }
}
</script>

<style scoped lang="scss">
.home {
  position: absolute;
  top: 160px;
  left: 0;
  width: 100%;
  max-width: 1500px;
  height: calc(100% - 160px);
  padding: 10px 40px;

  overflow: auto;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
}

.title {
  position: realtive;
  flex-grow: 0;
  flex-shrink: 0;
  width: 100%;
  margin-bottom: 40px;

  font-size: 24px;
  font-weight: 600;
  color: #000000;
  text-align: left;
}

.hero-container {
  position: relative;
  flex-grow: 0;
  flex-shrink: 0;
  width: 100%;
  height: 40vw;
  max-height: 300px;
  margin-top: 60px;
  margin-bottom: 60px;
  padding: 50px;

  background: #3b80fa;
  background: linear-gradient(to right, #3b80fa, #6c9ef7);

  border-radius: 16px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;

  &__title {
    font-size: 32px;
    font-weight: 600;
    line-height: 58px;
    color: #ffffff;
  }

  &__subtitle {
    font-size: 24px;
    font-weight: 400;
    color: #fafafa;
  }
}

.filter-bar {
  position: realtive;
  flex-grow: 0;
  flex-shrink: 0;
  width: 100%;
  margin-bottom: 40px;

  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;

  &__option {
    position: relative;
    width: auto;
    height: auto;
    padding: 10px 20px;
    border-radius: 8px;
    margin-right: 20px;

    background-color: #ffffff00;
    font-size: 14px;
    color: #000000;
    box-shadow: 0 0 3px 1px #00000040;
    cursor: pointer;
    transition: 0.1s linear all;

    &:hover {
      background-color: #3b80fa;
      box-shadow: 0 0 3px 1px #3b80fa60;
      color: #ffffff;
    }
  }
}

.products-container {
  position: relative;
  flex-grow: 0;
  flex-shrink: 0;
  width: 100%;
  height: auto;

  overflow-x: scroll;

  display: flex;
  flex-direction: row;
  flex-wrap: no-wrap;
  justify-content: flex-start;
  align-items: flex-start;
}
</style>
