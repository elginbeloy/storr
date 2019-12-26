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
      <div class="product">
        <div
          class="product__image"
          style="background: url('https://c.static-nike.com/a/images/t_PDP_1280_v1/f_auto/fvkwuv6zfzmqoga8oysr/air-force-1-07-womens-shoe-KyTwDPGG.jpg')"
        >
          <div class="product__image__brand-badge">Nike</div>
        </div>
        <div class="product__title">Nike Air Force 1 '07</div>
        <div class="product__price">$ 90</div>
        <div class="product__rating">7.8 / 10 | 132 Reviews</div>
        <div class="product__desc">
          Men's Shoe
        </div>
      </div>
      <div class="product">
        <div
          class="product__image"
          style="background: url('https://c.static-nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/slo1ymfeufewlxmlkfmx/air-max-270-game-change-big-kids-shoe-HbtNX3.jpg')"
        >
          <div class="product__image__brand-badge">Nike</div>
        </div>
        <div class="product__title">Nike Air Max 270</div>
        <div class="product__price">$ 120</div>
        <div class="product__rating">7.4 / 10 | 132 Reviews</div>
        <div class="product__desc">
          Little/Big Kid's Shoe
        </div>
      </div>
      <div class="product">
        <div
          class="product__image"
          style="background: url('https://c.static-nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/gnagjobmaan1rzm1gccj/air-zoom-pegasus-36-mens-running-shoe-D24Mcz.jpg')"
        >
          <div class="product__image__brand-badge">Nike</div>
        </div>
        <div class="product__title">Nike Air Zoom Pegasus</div>
        <div class="product__price">$ 99.97</div>
        <div class="product__rating">8.4 / 10 | 132 Reviews</div>
        <div class="product__desc">
          Men's Running Shoe
        </div>
      </div>
      <div class="product">
        <div
          class="product__image"
          style="background: url('https://c.static-nike.com/a/images/t_PDP_1280_v1/f_auto/fvkwuv6zfzmqoga8oysr/air-force-1-07-womens-shoe-KyTwDPGG.jpg')"
        >
          <div class="product__image__brand-badge">Nike</div>
        </div>
        <div class="product__title">Nike Air Force 1 '07</div>
        <div class="product__price">$ 90</div>
        <div class="product__rating">7.8 / 10 | 132 Reviews</div>
        <div class="product__desc">
          Men's shoe
        </div>
      </div>
      <div class="product">
        <div
          class="product__image"
          style="background: url('https://c.static-nike.com/a/images/t_PDP_1280_v1/f_auto/fvkwuv6zfzmqoga8oysr/air-force-1-07-womens-shoe-KyTwDPGG.jpg')"
        >
          <div class="product__image__brand-badge">Nike</div>
        </div>
        <div class="product__title">Nike Air Force 1 '07</div>
        <div class="product__price">$ 90</div>
        <div class="product__rating">7.8 / 10 | 132 Reviews</div>
        <div class="product__desc">
          Men's shoe
        </div>
      </div>
      <div class="product">
        <div
          class="product__image"
          style="background: url('https://c.static-nike.com/a/images/t_PDP_1280_v1/f_auto/fvkwuv6zfzmqoga8oysr/air-force-1-07-womens-shoe-KyTwDPGG.jpg')"
        >
          <div class="product__image__brand-badge">Nike</div>
        </div>
        <div class="product__title">Nike Air Force 1 '07</div>
        <div class="product__price">$ 90</div>
        <div class="product__rating">7.8 / 10 | 132 Reviews</div>
        <div class="product__desc">
          Men's shoe
        </div>
      </div>
      <div class="product">
        <div
          class="product__image"
          style="background: url('https://c.static-nike.com/a/images/t_PDP_1280_v1/f_auto/fvkwuv6zfzmqoga8oysr/air-force-1-07-womens-shoe-KyTwDPGG.jpg')"
        >
          <div class="product__image__brand-badge">Nike</div>
        </div>
        <div class="product__title">Nike Air Force 1 '07</div>
        <div class="product__price">$ 90</div>
        <div class="product__rating">7.8 / 10 | 132 Reviews</div>
        <div class="product__desc">
          Men's shoe
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "home"
};
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
