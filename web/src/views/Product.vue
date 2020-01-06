<template>
  <div class="product">
    <div class="product-container">
      <div class="product-image">
        <img :src="product.imageURL" />
      </div>
      <div class="product-info">
        <div class="product-info__title">{{ product.name }}</div>
        <div class="product-info__brand">{{ product.brand }}</div>
        <div class="product-info__desc">
          <b>AN ICON GETS SLIMMER AND COOLER.</b><br />
          <br />
          This iconic Nike shoe returns with more perforations and engineered
          mesh in the upper that strategically target breathability across
          high-heat areas. A slimmer heel collar and tongue reduce bulk without
          compromising comfort, while exposed Flywire cables give you a snug fit
          at higher speeds. Benefits Perforations on upper enhance breathability
          in forefoot and arch. Full-length Nike unit provides a smooth,
          responsive ride. Slimmer design reduces bulk for a comfortable,
          conforming fit.
        </div>
        <div class="product-info__colors">
          Colors:
          <div
            class="product-info__color-option"
            style="background: #ff0000"
          ></div>
          <div
            class="product-info__color-option"
            style="background: #000000"
          ></div>
          <div
            class="product-info__color-option"
            style="background: #0000ff"
          ></div>
          <div
            class="product-info__color-option product-info__color-option--selected"
            style="background: #ff1457"
          ></div>
          <div
            class="product-info__color-option"
            style="background: #ffffff"
          ></div>
        </div>
        <div class="product-info__qty">
          Quantity:
          <input type="text" v-model="amount" />
          <button>-</button>
          <button>+</button>
        </div>
        <button class="product-info__purchase">
          Add To Cart
        </button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue } from "vue-property-decorator";
import Component from "@/hooks";
import gql from "graphql-tag";

@Component({})
export default class Home extends Vue {
  product = null;
  amount = 1;

  get apollo() {
    return {
      product: {
        query: gql`
          query GetProduct($id: String!) {
            product: getProduct(id: $id) {
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
        `,
        prefetch: ({ route }) => ({ id: route.params.id }),
        variables(): { id: string } {
          return { id: this.$route.params.id };
        }
      }
    };
  }
}
</script>

<style scoped lang="scss">
.product {
  position: absolute;
  top: 160px;
  left: 0;
  width: 100%;
  max-width: 1500px;
  height: calc(100% - 160px);
  padding: 10px 20px;

  overflow: auto;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
}

.product-container {
  position: relative;
  width: 100%;
  height: auto;
  margin-top: 40px;
  margin-bottom: 60px;
  padding-left: 100px;
  padding-right: 100px;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
}

.product-image {
  position: relative;
  width: 50%;
  height: auto;
  padding-right: 50px;

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  img {
    width: 100%;
    max-width: 500px;
    height: auto;
    border-radius: 16px;
  }
}

.product-info {
  position: relative;
  width: 50%;
  height: auto;
  min-height: 500px;
  padding-left: 50px;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;

  &__title {
    font-size: 32px;
    font-weight: 600;
    color: #000000;
    margin-bottom: 15px;
  }

  &__brand {
    font-size: 18px;
    color: #202020;
    margin-bottom: 30px;
  }

  &__desc {
    text-align: left;
    font-size: 14px;
    color: #000000;
    line-height: 24px;
    margin-bottom: 30px;
  }

  &__colors {
    font-size: 14px;
    color: #000000;
    font-weight: 600;
    margin-bottom: 30px;

    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
  }

  &__color-option {
    position: realtive;
    width: 20px;
    height: 20px;
    margin-left: 10px;
    border-radius: 50%;
    cursor: pointer;
    transition: 0.1s linear all;
    box-shadow: 0 0 8px 1px #00000020;

    &:hover {
      box-shadow: 0 0 8px 1px #00000060;
      opacity: 0.5;
    }
  }

  &__color-option--selected {
    box-shadow: 0 0 8px 1px #00000060;
  }

  &__qty {
    font-size: 14px;
    color: #000000;
    font-weight: 600;
    margin-bottom: 30px;

    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;

    input {
      width: 80px;
      height: 40px;
      padding: 10px;
      margin-left: 20px;
      background-color: #ffffff00;
      color: #000000;
      font-family: "Montserrat", sans-serif;
      font-size: 14px;
      border: 1px solid #000000;
      border-radius: 4px;
      outline: 0;
    }

    button {
      margin-left: 10px;
      width: 40px;
      height: 40px;
      background-color: #ffffffff;
      border-radius: 4px;
      color: #000000;
      font-family: "Montserrat", sans-serif;
      font-size: 18px;
      outline: 0;
      cursor: pointer;
      border: 1px solid #000000;
    }
  }

  &__purchase {
    width: 180px;
    height: 40px;
    background-color: #3b80fa;
    color: #ffffff;
    border-radius: 4px;
    font-size: 14px;
    font-family: "Montserrat", sans-serif;
    cursor: pointer;
    outline: 0;
    border: 0;

    &:hover {
      box-shadow: 0 0 6px 1px #3b80fa80;
    }
  }
}
</style>
