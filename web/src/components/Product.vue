<template>
  <div class="product" @click="navigateProduct(product.id)">
    <div
      class="product__image"
      :style="`background: url('${product.imageURL}')`"
    >
      <div class="product__image__brand-badge">{{ product.brand }}</div>
    </div>
    <div class="product__info">
      <div class="product__title">{{ product.name }}</div>
      <div class="product__desc">
        {{ product.description }}
      </div>
      <div class="product__colors">
        <div class="product__color-option" style="background: #c22641"></div>
        <div class="product__color-option" style="background: #ffffff"></div>
        <div class="product__color-option" style="background: #000000"></div>
      </div>
      <div class="product__price">{{ product.price }}</div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class Product extends Vue {
  @Prop({ required: true })
  product!: {};

  navigateProduct(id: string) {
    this.$router.push({ path: `/product/${id}` });
  }
}
</script>

<style scoped lang="scss">
.product {
  position: relative;
  flex-grow: 1;
  flex-shrink: 1;
  width: 260px;
  height: 320px;
  min-width: 260px;
  min-height: 320px;
  max-width: 380px;
  margin: 20px;
  margin-bottom: 30px;

  border-radius: 8px;
  box-shadow: 0 0 6px 1px #00000010;
  transition: 0.1s linear all;
  cursor: pointer;

  overflow: hidden;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;

  &:hover {
    box-shadow: 0 0 6px 1px #00000030;
  }

  &__image {
    position: relative;
    flex-shrink: 0;
    flex-grow: 0;
    width: 100%;
    height: 180px;
    margin-bottom: 10px;
    background-position: center !important;
    background-repeat: no-repeat !important;
    background-size: 100% auto !important;

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

  &__info {
    position: realtive;
    flex-shrink: 0;
    flex-grow: 0;
    width: 100%;
    height: 230px;
    padding: 10px 20px;
    box-sizing: border-box;

    text-align: left;

    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
  }

  &__title {
    width: 100%;
    font-size: 18px;
    color: #000000;
    max-lines: 1;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  &__colors {
    position: realtive;
    flex-grow: 0;
    flex-shrink: 0;

    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
  }

  &__color-option {
    border: 1px solid #00000060;
    margin-right: 10px;
    width: 15px;
    height: 15px;
    border-radius: 50%;
  }

  &__price {
    font-size: 18px;
    font-weight: 600;
    color: #000000;
    margin-top: 10px;
  }

  &__desc {
    font-size: 12px;
    color: #424242;
    text-align: left;
    line-height: 28px;
    max-lines: 3;
  }
}
</style>
