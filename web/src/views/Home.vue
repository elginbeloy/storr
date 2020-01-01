<template>
  <div class="home">
    <div class="filter-bar">
      <div class="filter-title">Filter Products</div>
      <div>Rating <span class="icon-chevron-down" /></div>
      <div>Price <span class="icon-chevron-down" /></div>
      <div>Brand <span class="icon-chevron-down" /></div>
      <div>Color <span class="icon-chevron-down" /></div>
    </div>

    <div class="products-container">
      <div class="product" v-for="product in products" :key="product.id">
        <div
          class="product__image"
          :style="`background: url('${product.imageURL}')`"
        >
          <div class="product__image__brand-badge">{{ product.brand }}</div>
        </div>
        <div class="product__title">{{ product.name }}</div>
        <div class="product__price">{{ product.price }}</div>
        <div class="product__rating">7.8 / 10 | 132 Reviews</div>
        <div class="product__desc">
          {{ product.category }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Component, Vue } from "vue-property-decorator";
import gql from "graphql-tag";

@Component({
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
export default class Home extends Vue {}
</script>

<style scoped lang="scss">
.home {
  position: absolute;
  top: 160px;
  left: 0;
  width: 100%;
  height: calc(100% - 160px);
  padding: 10px 20px;

  overflow: auto;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
}

.filter-bar {
  position: relative;
  width: 100%;
  height: auto;
  margin-top: 40px;
  margin-bottom: 60px;
  padding-left: 100px;
  padding-right: 100px;

  color: #202020;
  font-size: 16px;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}

.filter-title {
  color: #3b80fa;
  font-weight: 600;
}

.products-container {
  position: relative;
  width: 100%;
  height: auto;

  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: flex-start;
}

.product {
  position: relative;
  flex-grow: 0;
  flex-shrink: 0;
  width: 320px;
  height: 400px;
  margin: 20px;
  margin-top: 0px;
  margin-bottom: 10px;
  border-radius: 8px;

  overflow: hidden;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;

  &__image {
    position: relative;
    width: 100%;
    height: 180px;
    margin-bottom: 20px;
    background-position: center !important;
    background-repeat: no-repeat !important;
    background-size: 320px auto !important;

    &__brand-badge {
      position: absolute;
      top: 10px;
      right: 20px;
      padding: 4px 8px;
      font-size: 12px;
      color: #ffffff;
      background-color: #000000;
      border-radius: 8px;
    }
  }

  &__title {
    font-size: 24px;
    color: #000000;
  }

  &__rating {
    font-size: 14px;
    color: #202020;
  }

  &__price {
    font-size: 20px;
    color: #000000;
    margin-top: 5px;
    margin-bottom: 5px;
  }

  &__desc {
    font-size: 14px;
    color: #424242;
    text-align: left;
    line-height: 28px;
  }
}
</style>
