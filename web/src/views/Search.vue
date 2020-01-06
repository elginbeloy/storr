<template>
  <div class="search">
    <div class="filter-bar">
      <div class="filter-title">Filter Products</div>
      <div>Rating <span class="icon-chevron-down" /></div>
      <div>Price <span class="icon-chevron-down" /></div>
      <div>Brand <span class="icon-chevron-down" /></div>
      <div>Color <span class="icon-chevron-down" /></div>
    </div>

    <div class="products-container">
      <Product
        v-for="product in products"
        :key="product.id"
        :product="product"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Product from "@/components/Product.vue";
import gql from "graphql-tag";

@Component({
  components: {
    Product
  },
  apollo: {
    allProducts: gql`
      query {
        allProducts: listProducts {
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
  private allProducts = [];

  get products() {
    const queryTerms = this.$route.params.query.split(" ");

    return this.allProducts.filter(product => {
      const nameMatch = queryTerms.some(queryTerm => {
        return product.name.toLowerCase().includes(queryTerm.toLowerCase());
      });

      const brandMatch = queryTerms.some(queryTerm => {
        return product.brand.toLowerCase().includes(queryTerm.toLowerCase());
      });

      const descriptionMatch = queryTerms.some(queryTerm => {
        return product.description
          .toLowerCase()
          .includes(queryTerm.toLowerCase());
      });

      return nameMatch || brandMatch || descriptionMatch;
    });
  }
}
</script>

<style scoped lang="scss">
.search {
  position: absolute;
  top: 160px;
  left: 0;
  width: 100%;
  max-width: 1500px;
  height: calc(100% - 160px);
  padding: 20px 40px;

  overflow: auto;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
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
</style>
